export const get = (from: {}, path: string) =>
  path
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    // @ts-ignore
    .reduce((prev, cur) => prev && prev[cur], from);
