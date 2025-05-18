import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Template from "./Template.jsx";
import Provider from "./providers/Provider.jsx";

const router = createBrowserRouter([
  { path: "/", Component: App },
  {
    path: "/template",
    Component: Template,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
