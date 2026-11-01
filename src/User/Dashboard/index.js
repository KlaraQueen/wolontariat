import React from "react";
import { Outlet } from "react-router-dom";
import { DashboardNavigation } from "./Navigation";
import { DashboardWrapper, DashboardContent } from "./styled";

export const Dashboard = () => (
  <DashboardWrapper>
    <DashboardNavigation />
    <DashboardContent>
      <Outlet />
    </DashboardContent>
  </DashboardWrapper>
);
