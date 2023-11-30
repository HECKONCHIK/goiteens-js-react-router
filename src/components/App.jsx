import { Outlet } from "react-router-dom";
import { AppNav } from "./AppNav";

export const App = () => {
  return (
    <div className="container">
      <AppNav />
      <Outlet></Outlet>
    </div>
  );
};
