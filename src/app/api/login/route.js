import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";
import { cookies } from "next/headers";

export async function POST(request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Email and password are required",
      }),
      {
        status: 400,
      }
    );
  }
  if (email !== "admin@gmail.com" || password !== "1qazxsw2") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "you are not an admin",
      }),
      {
        status: 400,
      }
    );
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("dynamic_text");

  try {
    let user = await db.collection("users").findOne({ email });

    if (!user) {
      // If user does not exist, create a new one
      const hashedPassword = await bcrypt.hash(password, 10);
      await db
        .collection("users")
        .insertOne({ email, password: hashedPassword });

      user = { email }; // Simulating response for new user
    }

    // Store user session in an HTTP-only cookie (not LocalStorage)
    cookies().set("session", email, {
      path: "/",
      httpOnly: true,
      secure: true,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Login successful" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
