import { NextResponse } from "next/server";

export default function middleware(req) {
  const session = req.cookies.get("session");
  const { pathname } = req.nextUrl; 
  const url = req.url;
 
  console.log("===============>>>>>>>>>",url);
  

  // Restrict access to `/dashboard` if user is not logged in
  if (!session && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/login");
  }

  return NextResponse.next();
}


// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import react from 'react';

// const middleware = (req) => {
//     const cookieStore = cookies();
//     const verify = cookieStore.get('session');
//     let url = req.url
//     console.log("===============>>>>>>>>>", url);
    
//     if (!verify && url.includes("/dashboard")) {
//         return NextResponse.redirect("http://localhost:3000/login");
//     }

// };
// export default middleware;

// // // Apply middleware to protect `/dashboard`
// // export const config = {
// //   matcher: ["/dashboard/:path*"],
// // };
