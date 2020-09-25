import { Welcome } from "./views/Welcome";
import { Quiz } from "./views/Quiz";
import { Summary } from "./views/Summary";

export const AppRoutes = [
  {
    path: "/quiz",
    component: Quiz,
    routes: [],
  },
  {
    path: "/summary",
    component: Summary,
    routes: [],
  },
  {
    path: "/",
    component: Welcome,
    routes: [],
  },
];
