export function getUrlParams(hash: string): { [key: string]: string } {
  const params: { [key: string]: string } = {};
  const paramArray = hash.substring(1).split('&');
  for (const param of paramArray) {
    const [key, value] = param.split('=');
    params[key] = value;
  }
  return params;
}
