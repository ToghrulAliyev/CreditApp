import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound/Notfound";
import Userfin from "../pages/User/Userfin";
import CreateUser from "../pages/createUser/createUser";
import AddCredit from "../pages/addCredit/addCredit";
const RouteConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/fin",
      element: <Userfin />,
    },
    {
      path: "/createUser",
      element: <CreateUser />,
    },
    {
      path: "/addcredit",
      element: <AddCredit />,
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/account",
    //   element: (
    //     <PrivateRoute>
    //       <Account />
    //     </PrivateRoute>
    //   ),
    // },

    // {
    //   path: "/settings",
    //   element: (
    //     <PrivateRoute>
    //       <Settings />
    //     </PrivateRoute>
    //   ),
    // },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/",
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default RouteConfig;
