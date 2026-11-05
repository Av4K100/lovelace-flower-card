import { describe, it, expect, vi } from 'vitest';
import { daysSince, relativeDaysLabel, nextDueLabel, handleBadgeTap } from '../src/utils/badge-actions';
import FlowerCard from '../src/flower-card';

const now = new Date(2026, 10, 4, 21, 0); // 4 Nov 2026, 21:00 local

describe('daysSince', () => {
  it('counts calendar days, not 24-hour blocks', () => {
    expect(daysSince(new Date(2026, 10, 3, 23, 59), now)).toBe(1);
    expect(daysSince(new Date(2026, 10, 4, 0, 1), now)).toBe(0);
    expect(daysSince(new Date(2026, 9, 29, 12, 0), now)).toBe(6);
  });

  it('parses ISO timestamps as HA sends them', () => {
    expect(daysSince(new Date(2026, 9, 29, 12, 0).toISOString(), now)).toBe(6);
  });

  it('is negative for future dates', () => {
    expect(daysSince(new Date(2026, 10, 7, 9, 0), now)).toBe(-3);
  });

  it('returns null for unknown or unparseable values', () => {
    expect(daysSince('unknown', now)).toBeNull();
    expect(daysSince('', now)).toBeNull();
    expect(daysSince(undefined, now)).toBeNull();
  });
});

describe('relativeDaysLabel', () => {
  it('formats past, today and future in English by default', () => {
    expect(relativeDaysLabel(new Date(2026, 10, 4, 8, 0), undefined, now)).toBe('today');
    expect(relativeDaysLabel(new Date(2026, 10, 3, 8, 0), undefined, now)).toBe('1 d ago');
    expect(relativeDaysLabel(new Date(2026, 9, 29, 8, 0), undefined, now)).toBe('6 d ago');
    expect(relativeDaysLabel(new Date(2026, 10, 7, 8, 0), undefined, now)).toBe('in 3 d');
  });

  it('uses the Home Assistant language', () => {
    expect(relativeDaysLabel(new Date(2026, 9, 29, 8, 0), { language: 'de' }, now)).toBe('vor 6 T.');
    expect(relativeDaysLabel(new Date(2026, 9, 29, 8, 0), { language: 'nl' }, now)).toBe('6 d geleden');
  });

  it('returns null for non-dates so the normal state is shown', () => {
    expect(relativeDaysLabel('unavailable', undefined, now)).toBeNull();
  });
});

describe('nextDueLabel', () => {
  it('labels upcoming, today and overdue dates', () => {
    expect(nextDueLabel('2026-11-07', undefined, now)).toEqual({ text: 'next in 3 d', state: 'upcoming' });
    expect(nextDueLabel('2026-11-04', undefined, now)).toEqual({ text: 'due today', state: 'today' });
    expect(nextDueLabel('2026-11-02', undefined, now)).toEqual({ text: '2 d late', state: 'late' });
  });

  it('returns null for non-dates', () => {
    expect(nextDueLabel('unknown', undefined, now)).toBeNull();
  });
});

describe('handleBadgeTap', () => {
  it('fires hass-action with the badge tap_action', () => {
    const card = document.createElement('div') as unknown as FlowerCard;
    const seen: CustomEvent[] = [];
    card.addEventListener('hass-action', (e) => seen.push(e as CustomEvent));
    const tap_action = { action: 'perform-action', perform_action: 'button.press', target: { entity_id: 'button.x' } };
    handleBadgeTap(card, { entity: 'sensor.x_last_watering', tap_action }, 'sensor.x_last_watering');
    expect(seen).toHaveLength(1);
    expect(seen[0].detail).toEqual({ config: { entity: 'sensor.x_last_watering', tap_action }, action: 'tap' });
  });

  it('opens more-info when no tap_action is set', () => {
    const card = document.createElement('div') as unknown as FlowerCard;
    const handler = vi.fn();
    card.addEventListener('hass-more-info', handler);
    handleBadgeTap(card, { entity: 'sensor.x' }, 'sensor.x');
    expect(handler).toHaveBeenCalledTimes(1);
    expect((handler.mock.calls[0][0] as CustomEvent).detail).toEqual({ entityId: 'sensor.x' });
  });
});
