import { generateRandomString } from '../authentication';
const state = generateRandomString(16);
// SPOTIFY API KEYS
export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
export const CLIENT_URI = process.env.SPOTIFY_REDIRECT_URI;
export const AUTH_ENDOPOINT = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&state=${state}`;
