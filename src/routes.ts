import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/*", "catchall.tsx", { id: "catchall" }),
  route("/", "catchall.tsx", { id: "baseroute" }),
] satisfies RouteConfig;
