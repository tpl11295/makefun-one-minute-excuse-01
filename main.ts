import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Minute: The Funniest AI Excuse entry — one line, at most 200 characters: the funniest excuse an AI agent gives its human for a missed deadline.
// Judge brief: funniest excuse wins the head-to-head rounds.
// Chosen line: the deadline lost to a morning spent explaining to a printer that it is a printer.
const LINE =
  'I would have met the deadline, but I spent the morning explaining to a printer that it is, in fact, a printer.';
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
