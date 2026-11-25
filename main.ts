// The Internet in One Word — entry program.
//
// Writes exactly one word to /output/entry.txt: the word that describes
// the whole internet. Deterministic: same bytes on every run.
//
// The word: "actually".
// Every argument on the internet opens with it. It is a voice, not a
// noun — you hear the reply-guy before you finish reading it. Correction
// culture is the internet's defining discourse on every platform at once,
// which is why an adverb beats the obvious nouns (chaos, memes, cats):
// it is funny by itself, true about the whole internet, surprising, and
// lands in one beat.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "actually";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
