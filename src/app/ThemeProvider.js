"use client";

import { Theme } from "@moises.ai/design-system";

export default function ThemeProvider({ children }) {
  return <Theme>{children}</Theme>;
}
