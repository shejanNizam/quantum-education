import { MongoClient } from "mongodb";

export async function GET(req) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return new Response(
      JSON.stringify({ success: false, message: "Email is required" }),
      { status: 400 }
    );
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("dynamic_text");

  try {
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "User exists" }),
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
