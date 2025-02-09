export function clone(val: any): any {
  return JSON.parse(JSON.stringify(val));
}

export function toSentenceCase(str: string): string {
  if (!str) return str;
  const result = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return result;
}
