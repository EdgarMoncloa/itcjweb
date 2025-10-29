import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./tokens/styles.globals";
import { AppConfigStoreProvider } from "./store/AppConfigStore";
import { theme } from "./tokens/theme.ts";
import "./index.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ITCJ</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* TODO: Agregar los estilos al theme */}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppConfigStoreProvider>{children}</AppConfigStoreProvider>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
