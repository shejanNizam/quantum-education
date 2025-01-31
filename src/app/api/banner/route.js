import { MongoClient } from "mongodb";

export async function POST(request) {
  const { text1, text2 } = await request.json();

  if (!text1 || !text2) {
    return new Response(
      JSON.stringify({ success: false, message: "Both fields are required" }),
      { status: 400 }
    );
  }

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("dynamic_text");

  try {
    // Insert or update the banner text in the database
    await db.collection("banners").updateOne(
      {}, // Empty filter to update the first document
      { $set: { text1, text2 } },
      { upsert: true } // Create a new document if none exists
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Banner text updated successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to update banner text",
      }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db("dynamic_text"); // get request

  try {
    // Fetch the latest banner text
    const banner = await db.collection("banners").findOne({});
    return new Response(JSON.stringify(banner), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to fetch banner text",
      }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
