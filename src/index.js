import React from "react";
import {createRoot} from "react-dom/client"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DataStoreProvider } from "./frontend/contexts/DataStoreContext";
import { FilterProvider } from "./frontend/contexts/FilterContext";
import { AuthProvider } from "./frontend/contexts/AuthContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <DataStoreProvider>
            <App />
          </DataStoreProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);