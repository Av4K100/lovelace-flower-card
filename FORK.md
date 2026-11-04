# Av4K100 fork of lovelace-flower-card

This fork adds two options to `extra_badges`. Everything else is the original card from
[Olen/lovelace-flower-card](https://github.com/Olen/lovelace-flower-card).

## What's added

- **`tap_action`** on entity badges. Any Home Assistant action, e.g. `perform-action`
  with a `confirmation`. Without it, a badge still opens more-info as before.
- **`format: relative`** shows a timestamp state (or attribute) as days:
  `today`, `1 d ago`, `6 d ago`, `in 3 d`. The tooltip shows the same.

## Example: one-tap Planta logging with "last done" days

```yaml
extra_badges:
  - entity: sensor.monstera_albo_last_watering
    icon: mdi:watering-can
    color: "#42A5F5"
    show_state: true
    format: relative
    tap_action:
      action: perform-action
      perform_action: button.press
      target:
        entity_id: button.monstera_albo_complete_watering
      confirmation:
        text: Log a watering for Monstera Albo in Planta?
  - entity: sensor.monstera_albo_last_fertilizing
    icon: mdi:flask-outline
    color: "#BA68C8"
    show_state: true
    format: relative
    tap_action:
      action: perform-action
      perform_action: button.press
      target:
        entity_id: button.monstera_albo_complete_fertilizing
      confirmation:
        text: Log a feed for Monstera Albo in Planta?
```

## How the fork stays up to date

- HACS installs **`flower-card-av4k.js`** (set in `hacs.json`), not upstream's `flower-card.js`.
- The **Fork sync** workflow (`.github/workflows/fork-sync.yml`) pulls in Olen's changes once a day
  (like pressing **Sync fork**) and then starts **Fork build**. If it can't sync on its own, it fails
  and GitHub emails you; press **Sync fork** by hand instead.
- The **Fork build** workflow (`.github/workflows/fork-build.yml`) rebuilds `flower-card-av4k.js`
  from `src/` after every push to `main`, including **Sync fork**. Upstream's built files are
  never edited here, so syncing can't clash on them.
- The fork's own code lives in `src/utils/badge-actions.ts`, with small hooks in
  `src/utils/attributes.ts` and `src/types/flower-card-types.ts`, to keep sync clashes unlikely.

## Workflows in this fork

- **Fork sync**, **Fork build**: this fork's own; keep these on.
- **Test & Lint**: upstream's tests on each push; harmless, kept on.
- **Auto Release**, **Update plant**: upstream's release jobs; disabled here.
- **HACS Validation**, **Mark Stale Issues**, **Remove Awaiting Feedback Label**: upstream's store
  listing and issue housekeeping; not needed for a personal fork, disabled here.
