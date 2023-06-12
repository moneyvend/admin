import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  palette: {
    brand: {
      main: "#99C83C"
    },
    primary: {
      main: "#31507D"
    },
    hint: {
      main: "#A8A8A8"
    },
    hintText: {
      main: "#CACACA"
    }
  },
  colors: {
    brand: {
      50: "#99C83C",
      100: "#99C83C",
      500: "#99C83C"
    },
    primary: {
      50: "#31507D",
      100: "#31507D",
      500: "#31507D"
    },
    hint: {
      100: "#A8A8A8"
    },
    hintText: {
      50: "#CACACA",
      100: "#CACACA",
      500: "#CACACA"
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
    mono: `'Poppins', sans-serif`
  }
});

export const Styles = {
  border: "1px solid rgba(168, 168, 168, 0.19)"
};
