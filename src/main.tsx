import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import "./index.css";

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home.tsx";

import { HeaderProps } from "./types/types.ts";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      light: "#33c9dc",
      dark: "#008394",
    },
    secondary: {
      main: "#fff176",
      light: "#fff391",
      dark: "#b2a852",
    },
    text: {
      primary: "#242424",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header height={64} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
