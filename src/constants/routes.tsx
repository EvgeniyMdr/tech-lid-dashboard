import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

interface IRoute {
  component: JSX.Element;
  private: boolean;
  path: string;
}

export const routes: IRoute[] = [
  {
    component: <Login />,
    private: false,
    path: "/login",
  },
  {
    component: <Registration />,
    private: false,
    path: "/registration",
  },
  {
    component: <Home />,
    private: true,
    path: "/",
  },
];
