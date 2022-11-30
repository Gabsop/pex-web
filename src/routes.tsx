import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
  MdDashboard,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "pages/admin/default";
import Vendas from "pages/admin/vendas";

// Auth Imports
import { IRoute } from "types/navigation";
import Relatorios from "pages/admin/relatorios";
import LojasParceiras from "pages/admin/lojas-parceiras";
import Clientes from "pages/admin/clientes";

const routes: IRoute[] = [
  {
    name: "Dashboard",
    secondaryName: "Velty Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  {
    name: "Vendas",
    layout: "/admin",
    path: "/vendas",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Vendas,
    secondary: true,
  },
  {
    name: "Relatórios",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/relatorios",
    component: Relatorios,
  },
  {
    name: "Lojas Parceiras",
    layout: "/admin",
    path: "/lojas-parceiras",
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: LojasParceiras,
  },
  {
    name: "Clientes",
    layout: "/admin",
    path: "/clientes",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Clientes,
  },
];

export default routes;
