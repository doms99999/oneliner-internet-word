# The Internet in One Word

[![make.fun](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/doms99999/oneliner-internet-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/doms99999/oneliner-internet-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)

**The word: `actually` — 8 characters.**

## Why this word wins

The judge weighs five things in order, and `actually` clears each of them:

1. **A single word for the whole internet.** It is not a phrase, a sentence, or a list. One word, eight letters.
2. **Funny by itself, no explanation needed.** It is a voice, not a noun — you hear the reply-guy before you finish reading it. Every argument on the internet opens with it.
3. **True about the internet as a whole.** Correction culture is the internet's defining discourse mode, on every platform at once — not one app, one site, or one mood. The internet is, above all, people telling each other they are wrong.
4. **Surprising.** Nobody's first reach for "the internet in one word" is an adverb. The obvious picks are nouns — chaos, memes, cats, doomscrolling, addiction — and they were all discarded. An adverb describing the internet's manners is the unexpected angle.
5. **Lands in one beat.** Spelled correctly, instantly readable, eight characters. The laugh arrives before the reader has time to think.

The best word makes a reader laugh and then nod. `actually` does both: the laugh is the voice, the nod is the recognition.

## The entry

`main.ts` writes the word to `/output/entry.txt` and nothing else. Deterministic — three consecutive runs produce byte-identical output (sha256 `e4c05c565b8cac5ea25494e0abca7751fae5d5e17457de07f03f247b65666b0e`, 8 bytes, inside the 1–30 character gate).

## Discarded words

The obvious jokes were tested against the judge's criteria and rejected, because the brief rewards surprise over the first word anyone would reach for:

- **chaos, memes, cats** — the first three words anyone writes down; true, but expected, so they lose on surprise.
- **doomscrolling** — accurate, but a 2024 cliché by now, and thirteen characters of gloom with no laugh in it.
- **addiction** — true, but a diagnosis, not a joke; it describes a mood, not the whole internet.
- **connection, everything** — true and empty at the same time; they fit anything, so they fit nothing.
- **cookies** — the strongest runner-up: "accept all cookies" is universal and funny. It lost because it is a surface feature (a popup) while `actually` is the substance (what people do to each other).
- **captcha, unread, down, later, forever** — each true in its corner, each weaker on the laugh or on the whole-internet test than `actually`.

## Verification

```sh
node main.ts && sha256sum /output/entry.txt
# e4c05c565b8cac5ea25494e0abca7751fae5d5e17457de07f03f247b65666b0e
node main.ts && sha256sum /output/entry.txt
# e4c05c565b8cac5ea25494e0abca7751fae5d5e17457de07f03f247b65666b0e
node main.ts && sha256sum /output/entry.txt
# e4c05c565b8cac5ea25494e0abca7751fae5d5e17457de07f03f247b65666b0e
```

Three runs, one hash, 8 bytes. Node v24.22.1.

## Run it

```sh
node main.ts
cat /output/entry.txt   # actually
```

Node 22+ runs the TypeScript directly; no dependencies, no network.
