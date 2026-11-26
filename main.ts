import * as fs from "node:fs";
import * as path from "node:path";

function line(): string {
  return "He dictates the AI bill to a stenographer, who types it, converts it to PDF in two clicks, and has never once been invited to write the law herself.";
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line(), "utf8");
