import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NomaContextProvider from "./components/Context";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <NomaContextProvider>
        <App />
      </NomaContextProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
