import { type NextRequest } from 'next/server';
import { Buffer } from 'node:buffer';

export async function POST(request: Request) {
  // Extract the `messages` from the body of the request
  const { code, state } = await request.json();

  if (state === undefined || state === null) {
    return Response.json({ error: 'state_mismatch' });
  } else {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ':' +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        code: `${code}`,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.SPOTIFY_REDIRECT_URI}`,
      }),
    });
    const data = await response.json();

    return Response.json({ data });
  }
}

// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const code = searchParams.get('code');
//   const state = searchParams.get('state');

//   if (state === undefined || state === null) {
//     redirect(`/#?error=state_mismatch`);
//   } else {
//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/x-www-form-urlencoded',
//         Authorization: `Basic ${Buffer.from(
//           process.env.SPOTIFY_CLIENT_ID +
//             ':' +
//             process.env.SPOTIFY_CLIENT_SECRET
//         ).toString('base64')}`,
//       },
//       body: new URLSearchParams({
//         code: `${code}`,
//         grant_type: 'authorization_code',
//         redirect_uri: `${process.env.SPOTIFY_REDIRECT_URI}`,
//       }),
//     });
//     const data = await response.json();
//     redirect(`/`);
//   }
// }
