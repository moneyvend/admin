import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";
import {theme} from "./utils/theme";
import "./App.css";
import UseQueryHelper from "./utils/useQuery";
import { QueryClientProvider } from "react-query";

export const App = () => (
  <ChakraProvider theme={theme}>
  <QueryClientProvider client={UseQueryHelper.queryClient}>
  <Router>
    <AppRouter />
  </Router>
  </QueryClientProvider>

</ChakraProvider>
)
