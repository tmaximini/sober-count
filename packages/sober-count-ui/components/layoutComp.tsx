import React, { ReactElement, ReactNode } from "react";
import { theme } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";
import { CookiesProvider } from "react-cookie";

// import tailwind
import "./styles.css";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

interface Props {
  children: ReactNode;
  classes?: string;
  unstyled?: boolean;
}

export default function Layout({
  children,
  classes,
  unstyled
}: Props): ReactElement {
  const defaultClasses = "container mx-auto p-8 my-24 mw-100";

  return (
    <CookiesProvider>
      <ThemeProvider theme={customTheme}>
        <main className={classes ? classes : unstyled ? "" : defaultClasses}>
          {/* <Nav /> */}
          {children}
        </main>
      </ThemeProvider>
    </CookiesProvider>
  );
}
