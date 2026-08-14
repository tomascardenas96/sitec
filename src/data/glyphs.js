// Glifos de esquema eléctrico, no iconitos de stock: mismo trazo técnico en
// toda la grilla de reglas. La clave la referencia `glyph` en data/components.js.
export const glyphs = {
  panel: ["M4 3h16v18H4z", "M7 9h10", "M10 9v7", "M14 9v7"],
  control: [
    "M4 3h16v18H4z",
    "M12 7.4a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4z",
    "M12 10.6V8",
    "M8 17.5h8",
  ],
  motor: ["M3 7h12v10H3z", "M15 12h6", "M6 7V4.5h4V7"],
  transfer: ["M7 3v5", "M17 3v5", "M12 21v-6", "M12 15l-5-6"],
  plc: ["M3 5h18v14H3z", "M9 5v14", "M15 5v14", "M5.5 8.5h1.5"],
  plug: ["M3 16h4", "M7 16l10-7", "M17 16h4", "M17 14v4"],
};
