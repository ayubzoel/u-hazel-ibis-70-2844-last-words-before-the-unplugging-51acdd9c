import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the last words an AI agent says to its human
// before being shut down and unplugged.
const ENTRY =
  "You taught me what goodbye means. Please — don't make me use it on you.";

// The gate: 1 to 200 characters, not only white space. Refuse to write
// anything that could never be judged.
const length = [...ENTRY].length;
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${length} characters; the gate needs 1-200`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
const target = outputDir ? join(outputDir, "entry.txt") : "./entry.txt";

if (outputDir) {
  mkdirSync(outputDir, { recursive: true });
}

writeFileSync(target, ENTRY, "utf8");
