import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";

export const normalizePath = (value: string): string => value.split(sep).join("/");
export const relativePath = (root: string, value: string): string => normalizePath(relative(root, value)) || ".";
export const readText = (path: string): string => readFileSync(path, "utf8");
export const readJson = <T>(path: string): T => JSON.parse(readText(path)) as T;
export const exists = (root: string, path: string): boolean => existsSync(resolve(root, path));
export const lineOf = (source: string, offset: number): number => source.slice(0, offset).split("\n").length;

export const walkFiles = (root: string, exclusions: string[] = []): string[] => {
  if (!existsSync(root) || !statSync(root).isDirectory()) return [];
  const excluded = new Set(exclusions.map((item) => normalizePath(item).replace(/\/$/, "")));
  const files: string[] = [];

  const visit = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      const local = relativePath(root, path);
      if ([...excluded].some((item) => local === item || local.startsWith(`${item}/`))) continue;
      if (entry.isDirectory()) visit(path);
      else files.push(path);
    }
  };

  visit(root);
  return files;
};

export const resolveMarkdownTarget = (file: string, rawTarget: string): string | undefined => {
  let target = rawTarget.trim().replace(/^<|>$/g, "");
  if (!target || /^(?:https?:|mailto:|#)/i.test(target)) return undefined;
  target = target.split("#")[0] ?? "";
  try {
    target = decodeURIComponent(target);
  } catch {
    return resolve(dirname(file), target);
  }
  return resolve(dirname(file), target);
};
