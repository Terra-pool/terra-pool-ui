import { Switch, Route, RouteProps, Redirect } from "react-router-dom"
import { Dictionary } from "ramda"

import Dashboard from "./pages/Dashboard"
import My from "./pages/My"

import Data from "./tools/Data"
import Tool from "./tools/Tool"

export enum MenuKey {
  DASHBOARD = "Pools",
  MY = "My Page"
}

export const omit = [MenuKey.DASHBOARD]
export const menu: Dictionary<RouteProps> = {
  // Not included in navigation bar
  [MenuKey.DASHBOARD]: { path: "/", exact: true, component: Dashboard },

  // Menu
  [MenuKey.MY]: { path: "/my", component: My },

  // For developers
  data: { path: "/data", component: Data },
  tool: { path: "/tool", component: Tool },
}

export const getPath = (key: MenuKey) => menu[key].path as string

export default (routes: Dictionary<RouteProps> = menu, path: string = "") => (
  <Switch>
    {Object.entries(routes).map(([key, route]) => (
      <Route {...route} path={path + route.path} key={key} />
    ))}

    <Redirect to="/" />
  </Switch>
)
