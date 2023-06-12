import React from "react";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./utils/routes";
import {
  Login,
  HomePage,
  DashboardPage,
  UsersPage
  
} from "./views";
import { Text } from "@chakra-ui/react";
import { RouteWithLayout } from "./components";
import { MainLayout } from "./layouts";

const AppRouter = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<HomePage />} />
      <Route path={AppRoutes.LOGIN} element={<Login />} />
      <Route
        path={AppRoutes.DASHBOARD}
        element={<RouteWithLayout component={DashboardPage} layout={MainLayout} />}
      />
       <Route
        path={AppRoutes.NEWSLETTER}
        element={<RouteWithLayout component={DashboardPage} layout={MainLayout} />}
      />
       <Route
        path={AppRoutes.WAITLIST}
        element={<RouteWithLayout component={DashboardPage} layout={MainLayout} />}
      />
       <Route
        path={AppRoutes.USERS}
        element={<RouteWithLayout component={UsersPage} layout={MainLayout} />}
      />
      <Route
        path={AppRoutes.SETTINGS}
        element={
          <RouteWithLayout component={() => <Text>Settings Page</Text>} layout={MainLayout} />
        }
      />
    </Routes>
  );
};

export default AppRouter;
