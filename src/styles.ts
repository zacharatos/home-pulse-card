import { css } from "lit";

// Design: calm neutral surfaces with colour where it carries meaning: the shortcut icons, the
// weather, who is home, the alarm state, and a soft sun (day) or moon (night) glow in the corner.
// Shortcuts are the main feature. Paddings and radii match Area Pulse Card so the two line up.
export const cardStyles = css`
  :host {
    /* Every variable reads the shared Pulse token first (set by the Pulse theme), then Home Assistant's
       own variable, then the value this card always used. Without the Pulse theme nothing changes. */
    --hpc-accent: var(--pulse-accent, var(--primary-color));
    /* Colours with a meaning: on (lights), needs a look, problem, all good, information. */
    --hpc-amber: var(--pulse-active, var(--amber-color, #ffc107));
    --hpc-orange: var(--pulse-warn, var(--orange-color, #ff9800));
    --hpc-red: var(--pulse-bad, var(--red-color, #f44336));
    --hpc-green: var(--pulse-ok, var(--green-color, #4caf50));
    --hpc-blue: var(--pulse-info, var(--blue-color, #2196f3));
    /* Category colours: Home Assistant's palette (the Pulse theme mutes it). */
    --hpc-deep-orange: var(--deep-orange-color, #ff6f22);
    --hpc-light-blue: var(--light-blue-color, #03a9f4);
    --hpc-cyan: var(--cyan-color, #00bcd4);
    --hpc-teal: var(--teal-color, #009688);
    --hpc-indigo: var(--indigo-color, #3f51b5);
    --hpc-purple: var(--purple-color, #926bc7);
    /* Surfaces: the same two neutral steps Area Pulse uses. */
    --hpc-neutral-bg: var(--pulse-surface-neutral, color-mix(in srgb, var(--primary-text-color) 5%, transparent));
    --hpc-neutral-bg-hover: var(--pulse-surface-neutral-hover, color-mix(in srgb, var(--primary-text-color) 9%, transparent));
    --hpc-neutral-strong: var(--pulse-surface-neutral-strong, color-mix(in srgb, var(--primary-text-color) 14%, transparent));
    --hpc-radius: var(--pulse-radius, var(--ha-card-border-radius, 12px));
    --hpc-control-radius: var(--pulse-control-radius, var(--ha-card-features-border-radius, var(--feature-border-radius, 12px)));
    --hpc-chip-height: var(--pulse-chip-height, 30px);
    --hpc-gap: var(--pulse-gap, 14px);
    /* Corner glow: warm sun by day, cool moon by night, at the theme's glow strength. Override per theme if you like. */
    --hpc-glow-day: var(--pulse-glow-day, var(--hpc-orange));
    --hpc-glow-night: var(--pulse-glow-night, var(--hpc-blue));
    --hpc-glow-strength: calc(var(--pulse-glow-alpha, 0.16) * 100%);
    /* Same inner padding as Area Pulse Card, so icons line up when the cards are stacked. */
    --hpc-pad: var(--pulse-pad, 12px);
    display: block;
    height: 100%;
  }

  ha-card {
    position: relative;
    height: 100%;
    overflow: hidden;
    container-type: inline-size;
  }
  :host([appearance="flat"]) ha-card {
    background: none;
    border: none;
    box-shadow: none;
    overflow: visible;
  }
  .glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      130% 95% at 0% 0%,
      color-mix(in srgb, var(--hpc-glow) var(--hpc-glow-strength), transparent) 0%,
      transparent 58%
    );
    transition: background 1s ease;
  }
  ha-card.day {
    --hpc-glow: var(--hpc-glow-day);
  }
  ha-card.night {
    --hpc-glow: var(--hpc-glow-night);
  }
  :host([appearance="flat"]) .glow {
    display: none;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--hpc-gap);
    padding: var(--hpc-pad);
  }
  :host([appearance="flat"]) .content {
    padding: 0;
  }

  button {
    font: inherit;
    -webkit-tap-highlight-color: transparent;
  }

  /* ---- Greeting ---- */
  .greeting {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    min-width: 0;
    padding: 2px 2px 0;
  }
  .hello-text {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .hello {
    margin: 0;
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    letter-spacing: -0.2px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .date {
    font-size: 13px;
    line-height: 18px;
    color: var(--secondary-text-color);
  }
  .greeting.center {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
  }
  .greeting.center .hello-text {
    align-items: center;
  }
  .greeting.center .hello {
    font-size: 26px;
    line-height: 32px;
    white-space: normal;
  }
  .greeting.center .weather {
    align-items: center;
  }

  .weather {
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    padding: 4px 6px;
    margin: -4px -6px;
    border: none;
    border-radius: var(--hpc-control-radius);
    background: none;
    color: var(--primary-text-color);
    cursor: pointer;
  }
  .weather:hover {
    background: var(--hpc-neutral-bg);
  }
  .weather:focus-visible {
    outline: 2px solid var(--hpc-accent);
  }
  .weather-main {
    display: flex;
    align-items: center;
    gap: 6px;
    --mdc-icon-size: 22px;
  }
  .weather-main ha-icon {
    color: var(--c, var(--secondary-text-color));
  }
  .temp {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    font-variant-numeric: tabular-nums;
  }
  .weather-cond {
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
  }

  /* ---- Status row: people, alarm, extra chips ---- */
  .status {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scrollbar-width: none;
    margin: 0 calc(-1 * var(--hpc-pad));
    padding: 0 var(--hpc-pad);
    scroll-padding: 0 var(--hpc-pad);
    scroll-snap-type: x proximity;
  }
  .status::-webkit-scrollbar {
    display: none;
  }
  .status.overflow {
    -webkit-mask-image: linear-gradient(to right, #000 calc(100% - 32px), transparent);
    mask-image: linear-gradient(to right, #000 calc(100% - 32px), transparent);
  }
  :host([appearance="flat"]) .status {
    margin: 0;
    padding: 0;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .chip {
    --c: var(--primary-text-color);
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: var(--hpc-chip-height);
    padding: 0 12px 0 9px;
    border-radius: calc(var(--hpc-chip-height) / 2);
    border: none;
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg);
    cursor: pointer;
    white-space: nowrap;
    max-width: 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
    user-select: none;
    -webkit-user-select: none;
    transition: background-color 200ms ease, transform 120ms ease;
    --mdc-icon-size: 16px;
  }
  .chip ha-icon,
  .chip ha-state-icon {
    color: var(--secondary-text-color);
  }
  .chip:hover {
    background: var(--hpc-neutral-bg-hover);
  }
  .chip:active {
    transform: scale(0.96);
  }
  .chip:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  /* Something is on: tinted with its group colour, like Area Pulse. */
  .chip.active {
    color: color-mix(in srgb, var(--c) 72%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 16%, transparent);
  }
  .chip.active ha-icon {
    color: var(--c);
  }
  .chip.colored ha-icon,
  .chip.colored ha-state-icon {
    color: var(--c);
  }
  .chip.calm {
    color: var(--secondary-text-color);
    cursor: default;
  }
  .chip.calm:active {
    transform: none;
  }
  .chip.alarm.loud {
    color: color-mix(in srgb, var(--c) 80%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 16%, transparent);
  }
  .chip.alarm.loud ha-icon {
    color: var(--c);
    animation: hpc-blink 1.4s ease-in-out infinite;
  }
  .chip .label {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chip .muted {
    color: var(--secondary-text-color);
    font-weight: 400;
  }

  /* People: green when home, quieter when away. */
  .chip.person {
    padding-left: 4px;
  }
  .avatar {
    flex: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--hpc-neutral-strong);
    color: var(--primary-text-color);
    background-size: cover;
    background-position: center;
    font-size: 11px;
    font-weight: 600;
  }
  .avatar {
    position: relative;
  }
  .person.home .avatar:not(.pic) {
    background: color-mix(in srgb, var(--hpc-green) 22%, transparent);
    color: var(--hpc-green);
  }
  .person.home .avatar::after {
    content: "";
    position: absolute;
    right: -2px;
    bottom: -2px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--hpc-green);
    border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
    box-sizing: border-box;
  }
  .person.away {
    color: var(--secondary-text-color);
  }
  .person.away .avatar {
    opacity: 0.55;
    filter: grayscale(1);
  }

  /* ---- Alarm block (opt-in) ---- */
  .alarm-row {
    --c: var(--secondary-text-color);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 8px 8px 10px;
    border-radius: var(--hpc-control-radius);
    background: var(--hpc-neutral-bg);
    min-width: 0;
  }
  .alarm-row.triggered {
    background: color-mix(in srgb, var(--hpc-red) 14%, transparent);
  }
  .alarm-main {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    border-radius: var(--hpc-control-radius);
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .alarm-main:focus-visible {
    box-shadow: 0 0 0 2px var(--hpc-accent);
  }
  .alarm-icon {
    flex: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--c) 20%, transparent);
    color: var(--c);
    --mdc-icon-size: 22px;
  }
  .alarm-row.triggered .alarm-icon,
  .alarm-row.pending .alarm-icon {
    background: color-mix(in srgb, var(--c) 20%, transparent);
  }
  .alarm-row.triggered .alarm-icon ha-icon,
  .alarm-row.pending .alarm-icon ha-icon {
    animation: hpc-blink 1.4s ease-in-out infinite;
  }
  .alarm-titles {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .alarm-state {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .alarm-sub {
    font-size: 12px;
    line-height: 16px;
    color: var(--secondary-text-color);
  }
  .alarm-buttons {
    flex: none;
    display: flex;
    gap: 6px;
  }
  .alarm-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    min-width: 40px;
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    border: none;
    border-radius: var(--hpc-control-radius);
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg-hover);
    cursor: pointer;
    transition: background-color 200ms ease, transform 120ms ease;
    --mdc-icon-size: 20px;
  }
  .alarm-btn ha-icon {
    color: var(--b);
  }
  .alarm-btn:hover {
    background: var(--hpc-neutral-strong);
  }
  .alarm-btn:active {
    transform: scale(0.94);
  }
  .alarm-btn:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  .alarm-btn .label {
    display: none;
  }
  @container (min-width: 460px) {
    .alarm-btn .label {
      display: inline;
    }
    .alarm-btn {
      padding: 0 14px 0 10px;
    }
  }

  /* ---- Alerts and pulse (pulse is opt-in) ---- */
  .pulse {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .banner {
    --c: var(--hpc-red);
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 40px;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: var(--hpc-control-radius);
    background: color-mix(in srgb, var(--c) 14%, transparent);
    color: color-mix(in srgb, var(--c) 80%, var(--primary-text-color));
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    --mdc-icon-size: 20px;
  }
  .banner.alert ha-icon.lead {
    animation: hpc-blink 1.4s ease-in-out infinite;
  }
  .banner .text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .banner.nudge {
    --c: var(--hpc-amber);
    align-items: flex-start;
    padding: 10px 12px;
    color: var(--primary-text-color);
    cursor: default;
  }
  .banner.nudge ha-icon.lead {
    color: color-mix(in srgb, var(--c) 85%, var(--primary-text-color));
  }
  .nudge-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .nudge-title {
    font-weight: 500;
  }
  .nudge-what {
    font-weight: 400;
    color: var(--secondary-text-color);
  }
  .nudge-fixes {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
  }
  .banner .fix {
    flex: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 12px 0 10px;
    border: none;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
    background: color-mix(in srgb, var(--c) 24%, transparent);
    cursor: pointer;
    --mdc-icon-size: 16px;
  }
  .banner .fix:hover {
    background: color-mix(in srgb, var(--c) 34%, transparent);
  }
  @keyframes hpc-blink {
    50% {
      opacity: 0.35;
    }
  }

  /* ---- Today line (under the date) ---- */
  .today {
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    margin: 3px 0 0 -4px;
    padding: 2px 6px 2px 4px;
    border: none;
    border-radius: 8px;
    background: none;
    font-size: 13px;
    line-height: 18px;
    color: var(--primary-text-color);
    text-align: left;
    cursor: pointer;
    --mdc-icon-size: 15px;
  }
  .today ha-icon {
    flex: none;
    color: var(--hpc-accent);
  }
  .today:hover {
    background: var(--hpc-neutral-bg);
  }
  .today:focus-visible {
    outline: 2px solid var(--hpc-accent);
  }
  .today {
    align-items: flex-start;
  }
  .today ha-icon {
    margin-top: 1px;
  }
  /* Up to two lines, then an ellipsis. */
  .today-text {
    min-width: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .greeting.center .today {
    align-self: center;
    margin-left: 0;
  }

  /* ---- House modes: a segmented control ---- */
  .modes {
    display: flex;
    gap: 4px;
    padding: 4px;
    border-radius: calc(var(--hpc-control-radius) + 4px);
    background: var(--hpc-neutral-bg);
  }
  .mode {
    --c: var(--hpc-accent);
    flex: 1 1 0;
    min-width: 0;
    height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    padding: 0 4px;
    border: none;
    border-radius: var(--hpc-control-radius);
    background: none;
    color: var(--secondary-text-color);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: background-color 250ms ease, color 250ms ease, transform 120ms ease;
    --mdc-icon-size: 20px;
  }
  .mode:hover {
    background: var(--hpc-neutral-bg-hover);
  }
  .mode:active {
    transform: scale(0.96);
  }
  .mode:focus-visible {
    outline: 2px solid var(--c);
    outline-offset: -2px;
  }
  .mode.active {
    color: color-mix(in srgb, var(--c) 75%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 20%, var(--ha-card-background, var(--card-background-color, #fff)));
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }
  .mode.active ha-icon {
    color: var(--c);
  }
  .mode-name {
    max-width: 100%;
    font-size: 11px;
    line-height: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Wide cards: icon beside the name. */
  @container (min-width: 480px) {
    .mode {
      flex-direction: row;
      gap: 8px;
      height: 42px;
    }
    .mode-name {
      font-size: 13px;
    }
  }

  /* ---- Shortcuts: the main feature ---- */
  .shortcuts {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  /* Rows are balanced in code (7 → 4 + 3); every tile in a row shares the width. */
  .shortcut-row {
    display: flex;
    gap: 8px;
  }
  .shortcut {
    --c: var(--hpc-accent);
    position: relative;
    flex: 1 1 0;
    min-width: 0;
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 6px;
    box-sizing: border-box;
    border: none;
    border-radius: var(--hpc-control-radius);
    color: var(--primary-text-color);
    background: var(--hpc-neutral-bg);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: background-color 200ms ease, transform 120ms ease;
    --mdc-icon-size: 26px;
  }
  .shortcut.named {
    height: 80px;
    --mdc-icon-size: 24px;
  }
  .shortcut ha-icon,
  .shortcut ha-state-icon {
    color: var(--c);
  }
  .shortcut:hover {
    background: var(--hpc-neutral-bg-hover);
  }
  .shortcut:active {
    transform: scale(0.97);
  }
  .shortcut:focus-visible {
    outline: 2px solid var(--hpc-accent);
    outline-offset: 1px;
  }
  .shortcut.active {
    background: color-mix(in srgb, var(--c) 18%, transparent);
  }
  .shortcut .name {
    max-width: 100%;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .badge {
    position: absolute;
    top: 7px;
    right: 7px;
    min-width: 18px;
    height: 18px;
    max-width: calc(100% - 14px);
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    /* Tinted like the chips, so it stays legible on any colour in light and dark themes. */
    color: color-mix(in srgb, var(--c) 70%, var(--primary-text-color));
    background: color-mix(in srgb, var(--c) 30%, var(--ha-card-background, var(--card-background-color, #fff)));
    box-shadow: 0 0 0 2px var(--ha-card-background, var(--card-background-color, #fff));
  }

  .warning {
    padding: 16px;
    color: var(--warning-color, #ffa600);
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* ---- Compact ---- */
  :host([layout="compact"]) {
    --hpc-gap: 10px;
    --hpc-pad: 10px;
  }
  :host([layout="compact"]) .hello {
    font-size: 17px;
    line-height: 22px;
  }
  :host([layout="compact"]) .date,
  :host([layout="compact"]) .weather-cond {
    font-size: 12px;
    line-height: 16px;
  }
  :host([layout="compact"]) .temp {
    font-size: 17px;
  }
  :host([layout="compact"]) .chip {
    height: 26px;
  }
  :host([layout="compact"]) .avatar {
    width: 18px;
    height: 18px;
  }
  :host([layout="compact"]) .mode {
    height: 40px;
    --mdc-icon-size: 18px;
  }
  :host([layout="compact"]) .mode-name {
    font-size: 10px;
  }
  :host([layout="compact"]) .shortcut {
    height: 52px;
    --mdc-icon-size: 22px;
  }
  :host([layout="compact"]) .shortcut.named {
    height: 64px;
    gap: 4px;
  }
  :host([layout="compact"]) .shortcut .name {
    font-size: 11px;
  }

  @media (prefers-reduced-motion: reduce) {
    .banner.alert ha-icon.lead,
    .alarm-row ha-icon,
    .chip.alarm.loud ha-icon {
      animation: none !important;
    }
  }
`;
