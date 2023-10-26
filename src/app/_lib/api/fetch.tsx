export async function getAccessToken(code: string, state: string) {
  const url = '/api/callback';
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ code, state }),
  });

  return await res.json();
}
