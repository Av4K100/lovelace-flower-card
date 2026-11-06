import { LovelaceCardConfig } from "custom-card-helpers";
import { HassEntity } from "home-assistant-js-websocket";

export interface ExtraBadge {
    type?: string;        // Badge type discriminator (e.g. "care_info")
    fields?: string[];    // care_info: care fields shown in the popup (default: all)
    title?: string;       // care_info: dialog heading (default: "Care")
    entity?: string;      // Entity ID for sensor/binary_sensor
    attribute?: string;   // Entity attribute to display instead of state (e.g., "last_changed")
    icon?: string;        // Icon to display (default: entity's icon or mdi:information)
    color?: string;       // Color for regular sensors/text
    color_on?: string;    // Color when binary_sensor is "on" (default: green)
    color_off?: string;   // Color when binary_sensor is "off" (default: grey)
    text?: string;        // Static text to display (alternative to entity)
    show_state?: boolean; // Show state value next to icon (default: false)
    format?: 'relative';  // Show a timestamp state/attribute as days, e.g. "6 d ago"
    tap_action?: Record<string, unknown>; // Action on tap (any HA action, e.g. perform-action); default: more-info
    next_primary?: boolean; // With next_entity: show the next-due line big and the last-done value small underneath
    next_entity?: string; // Second line: when this is next due, from a date/timestamp entity, e.g. 'next in 3 d', 'due today', '2 d late'
}

/** One part of a name, composed by Home Assistant (HA 2025.11+). */
export type EntityNameItem =
    | { type: 'entity' | 'device' | 'area' | 'floor' }
    | { type: 'text'; text: string };

/** A card name: typed text, or parts that Home Assistant composes per entity. */
export type CardName = string | EntityNameItem | EntityNameItem[];

export interface FlowerCardConfig extends LovelaceCardConfig {
    entity?: string;
    battery_sensor?: string;
    image_entity?: string;     // Fork: take the picture from this entity (e.g. a Planta image.*), live
    display_type?: DisplayType;
    hide_units?: boolean;      // Hide value/unit next to bars (default: false for full, true for compact)
    bars_per_row?: number;     // Number of bars per row: 1 or 2 (default: 2 for full, 1 for compact)
    name?: CardName;
    hide_species?: boolean;
    hide_image?: boolean;
    extra_badges?: ExtraBadge[];
    show_care?: string[];      // selected care_* attribute keys to display (default: none)
    battery_warn_level?: number;   // Below this → red (default: 20)
    battery_ok_level?: number;     // Above this → green (default: 40)
    bar_tap_action?: Record<string, unknown>;                   // Fork: action when any bar is tapped (any HA action); default: more-info
    bar_tap_actions?: Record<string, Record<string, unknown>>;  // Fork: per-bar actions keyed by bar name (moisture, temperature, ...); win over bar_tap_action
}

export enum DisplayType {
    Full = "full",
    Compact = "compact"
}

// Shape returned to Home Assistant's card picker via `getEntitySuggestion`.
// `label` distinguishes variants when more than one is offered for an entity.
export interface EntitySuggestion {
    label?: string;
    config: FlowerCardConfig;
}

export interface HomeAssistantEntity extends HassEntity {
    entity_id: string;
    state: string;
}

export interface PlantInfo {
    result: {
        [key: string]: PlantAttribute;
    };
}

export interface PlantAttribute {
    max: number;
    min: number;
    current: number;
    icon: string;
    sensor: string;
    unit_of_measurement: string;
}

export interface Limits {
    max: number;
    min: number;
}

export interface Attribute {
    icon: string;
    sensor: string;
    unit_of_measurement: string;
    display_state: string;
}

export interface DisplayedAttribute extends Attribute {
    current: number;
    limits: Limits;
    name: string;
}

export interface DisplayedAttributes {
    [key: string]: DisplayedAttribute;
}

export interface Icons {
    [key: string]: string;
}

export interface UOM {
    [key: string]: string;
}

export interface UOMT {
    [key: string]: string;
}
