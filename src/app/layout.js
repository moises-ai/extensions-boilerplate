import ThemeProvider from "./ThemeProvider";
import "@moises.ai/design-system/styles.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
