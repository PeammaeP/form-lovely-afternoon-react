import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserFirstNameEdit from "./pages/UserFirstNameEdit.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLastNameEdit from "./pages/UserLastNameEdit.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user-firstNameEdit",
    element: <UserFirstNameEdit />,
  },
  {
    path: "/user-lastNameEdit",
    element: <UserLastNameEdit />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
