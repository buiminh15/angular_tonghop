export function convertToJSON(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}
