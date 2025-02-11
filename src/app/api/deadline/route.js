import { MongoClient } from "mongodb";

// Connect to MongoDB
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "dynamic_text";

export async function POST(request) {
  const { days, hours, minutes, seconds } = await request.json();

  if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid time values" }),
      { status: 400 }
    );
  }

  await client.connect();
  const db = client.db(dbName);

  try {
    const now = new Date();
    const deadline = new Date(
      now.getTime() +
        days * 24 * 60 * 60 * 1000 +
        hours * 60 * 60 * 1000 +
        minutes * 60 * 1000 +
        seconds * 1000
    );

    // Upsert (update or insert) the deadline
    await db
      .collection("deadlines")
      .updateOne({}, { $set: { deadline } }, { upsert: true });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Deadline set successfully",
        deadline,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Failed to set deadline" }),
      { status: 500 }
    );
  }
}

export async function GET() {
  await client.connect();
  const db = client.db(dbName);

  try {
    const deadline = await db.collection("deadlines").findOne({});
    return new Response(JSON.stringify(deadline || {}), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Failed to fetch deadline" }),
      { status: 500 }
    );
  }
}
