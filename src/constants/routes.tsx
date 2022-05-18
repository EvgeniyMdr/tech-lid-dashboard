import { CreateEmployeePage } from "@/pages/CreateEmployeePage";
import { EditEmployerPage } from "@/pages/EditEmployerPage";
import { EmployerPage } from "@/pages/EmployerPage";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Registration } from "@/pages/Registration";

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
  {
    component: <CreateEmployeePage />,
    private: true,
    path: "/create-employee",
  },
  {
    component: <EmployerPage />,
    private: true,
    path: "/employer/:id",
  },
  {
    component: <EditEmployerPage />,
    private: true,
    path: "/edit-employer/:id",
  },
];
