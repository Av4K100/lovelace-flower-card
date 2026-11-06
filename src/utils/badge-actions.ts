import { fireEvent } from "custom-card-helpers";
import { ExtraBadge, FlowerCardConfig } from "../types/flower-card-types";
import { HassLanguageContext, localize } from "../localize/localize";
import FlowerCard from "../flower-card";
import { moreInfo } from "./utils";

/**
 * Whole days between a timestamp and now, by local calendar date
 * (yesterday 23:59 counts as 1 day ago). Negative for a future date.
 * Returns null when the value isn't a parseable date.
 */
export const daysSince = (value: unknown, now: Date = new Date()): number | null => {
    if (value === undefined || value === null || value === '') return null;
    const date = value instanceof Date ? value : new Date(String(value));
    if (isNaN(date.getTime())) return null;
    const startOf = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    return Math.round((startOf(now) - startOf(date)) / 86400000);
};

/** Short relative label for `format: relative`: 'today', '6 d ago', 'in 3 d'. Null if not a date. */
export const relativeDaysLabel = (
    value: unknown,
    hass?: HassLanguageContext,
    now: Date = new Date(),
): string | null => {
    const days = daysSince(value, now);
    if (days === null) return null;
    if (days === 0) return localize(hass, 'badge_today');
    const key = days > 0 ? 'badge_days_ago' : 'badge_in_days';
    return localize(hass, key).replace('{days}', String(Math.abs(days)));
};

/**
 * Label and state for a badge's `next_entity` line: 'next in 3 d', 'due today' or '2 d late'.
 * Null if the value isn't a date.
 */
export const nextDueLabel = (
    value: unknown,
    hass?: HassLanguageContext,
    now: Date = new Date(),
): { text: string; short: string; state: 'upcoming' | 'today' | 'late' } | null => {
    const days = daysSince(value, now);
    if (days === null) return null;
    if (days === 0) { const t = localize(hass, 'badge_due_today'); return { text: t, short: t, state: 'today' }; }
    if (days > 0) { const t = localize(hass, 'badge_days_late').replace('{days}', String(days)); return { text: t, short: t, state: 'late' }; }
    return {
        text: localize(hass, 'badge_next_in').replace('{days}', String(-days)),
        short: localize(hass, 'badge_in_days').replace('{days}', String(-days)),
        state: 'upcoming',
    };
};

/**
 * Tap handler for an entity badge. With `tap_action` set, the action is handed to
 * Home Assistant's own action handler (the `hass-action` event), so every action
 * type the frontend supports works, including `perform-action` and `confirmation`.
 * Without it, the badge keeps the existing behaviour and opens more-info.
 */
export const handleBadgeTap = (card: FlowerCard, badge: ExtraBadge, entityId: string): void => {
    if (badge.tap_action) {
        fireEvent(card, 'hass-action' as never, {
            config: { entity: entityId, tap_action: badge.tap_action },
            action: 'tap',
        } as never, { bubbles: true, composed: true });
        return;
    }
    moreInfo(card, entityId);
};

/**
 * Tap handler for a measurement bar. `bar_tap_actions[<bar name>]` wins, then `bar_tap_action`
 * (used for every bar); the action goes to Home Assistant's own handler (`hass-action`), so a
 * `navigate` to a Bubble Card pop-up hash or any other action works. Without either, the bar keeps
 * the existing behaviour and opens more-info for its sensor.
 */
export const handleBarTap = (card: FlowerCard, barName: string, sensorId: string): void => {
    const config = card.config as FlowerCardConfig | undefined;
    const action = config?.bar_tap_actions?.[barName] ?? config?.bar_tap_action;
    if (action) {
        fireEvent(card, 'hass-action' as never, {
            config: { entity: sensorId, tap_action: action },
            action: 'tap',
        } as never, { bubbles: true, composed: true });
        return;
    }
    moreInfo(card, sensorId);
};

/**
 * Tap handler for the card header (plant name and species). With `name_tap_action` set, the action
 * goes to Home Assistant's own handler (`hass-action`); without it, the header keeps opening
 * more-info for the plant. The photo's lightbox (when enabled) is not affected.
 */
export const handleNameTap = (card: FlowerCard, plantEntityId: string): void => {
    const action = (card.config as FlowerCardConfig | undefined)?.name_tap_action;
    if (action) {
        fireEvent(card, 'hass-action' as never, {
            config: { entity: plantEntityId, tap_action: action },
            action: 'tap',
        } as never, { bubbles: true, composed: true });
        return;
    }
    moreInfo(card, plantEntityId);
};
