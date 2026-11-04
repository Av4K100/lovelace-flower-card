import { fireEvent } from "custom-card-helpers";
import { ExtraBadge } from "../types/flower-card-types";
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

/** Short relative label for a badge: 'today', '1 d ago', '6 d ago', 'in 3 d'. Null if not a date. */
export const relativeDaysLabel = (value: unknown, now: Date = new Date()): string | null => {
    const days = daysSince(value, now);
    if (days === null) return null;
    if (days === 0) return 'today';
    if (days > 0) return `${days} d ago`;
    return `in ${-days} d`;
};

/**
 * Tap handler for an entity badge. With `tap_action` set, the action is handed to
 * Home Assistant's own action handler (the `hass-action` event), so every action
 * type the frontend supports works, including `perform-action` and `confirmation`.
 * Without it, the badge keeps the original behaviour and opens more-info.
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
