# Focus Dial

A single-file Pomodoro study workspace designed for an ADHD attention system.
No build step, no backend, no account — open `index.html` and it runs.

Published as an Artifact: the file is the whole app.

## What is in it

| Module | What it does |
|---|---|
| **Focus** | Wall-clock-anchored interval timer (drift-free when the tab is throttled), cycle pips, session intent, activation rating, mid-session distraction tally, thought parking, body-double mode |
| **Plan** | Week grid, block editor, `.ics` import (weekly `RRULE` expanded 8 weeks) and export, Google Calendar `TEMPLATE` deep links, greedy auto-scheduler that packs courses into free slots ranked by your historically best hours |
| **Tasks** | Pomodoro estimates, *activation cost* (how hard it is to start), course tags, paste-import, capacity check against free hours in the week |
| **Notes** | Draggable sticky wall; brain-dump capture writes here mid-session |
| **Sound** | Nine Web Audio layers synthesised live — rain, ocean, brown/pink noise, fire, café, forest, second-tick, binaural carrier — plus mixes and links out to your own playlists |
| **Calm** | Box / 4-7-8 / coherent breathing pacer, 5-4-3-2-1 grounding, movement snacks, energy–stress–focus check-ins |
| **Stats** | Focus minutes per day, best-hours histogram, 13-week consistency heatmap, distraction causes, check-in sparklines, per-course totals, session log, CSV export, derived insights |

## Design notes

- **Storage** — one `localStorage` key (`focusdial.v2`); JSON export/import is the backup and the migration path to a desktop build.
- **Google Calendar** — a browser sandbox cannot run an OAuth handshake or call Google's APIs, so the bridge speaks iCalendar instead: import the `.ics`, export blocks back, or push a single block through a `calendar.google.com/render` link.
- **Downloads** — the artifact sandbox makes `<a download>` inert, so exports open in a copy-to-clipboard panel instead.
- **Charts** — every chart is a single series against a single scale; palette validated for CVD separation and contrast in both themes.
- **Themes** — full light/dark token set covering the three viewer states (explicit light, explicit dark, unstamped system), plus four accent presets.

Sample data (three weeks of sessions, tasks, blocks, notes) is seeded on first run and clearly labelled; **Start clean** erases it.
