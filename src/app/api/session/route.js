import { cookies } from "next/headers";

export async function GET() {
  const session = cookies().get("session");
  console.log(session);
  

  if (!session) {
    return new Response(
      JSON.stringify({ success: false, message: "Not logged in" }),
      { status: 401 }
    );
  }

  return new Response(JSON.stringify({ success: true, email: session.value }), {
    status: 200,
  });
}
