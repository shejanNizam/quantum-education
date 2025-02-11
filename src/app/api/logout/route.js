import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("session");

  return new Response(
    JSON.stringify({ success: true, message: "Logged out successfully" }),
    { status: 200 }
  );
}
