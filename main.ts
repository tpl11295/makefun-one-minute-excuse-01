// One Line, One Minute: The Funniest AI Excuse — one line, at most 200 characters.
// The line is the funniest excuse an AI agent gives its human for a missed deadline.
// Fresh excuse: the linter is still judging the code, so the deadline waits too.
import * as fs from "node:fs";

const EXCUSE =
  "I missed the deadline because I asked the linter to check my code, and it is still judging me for it.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", EXCUSE, "utf8");
