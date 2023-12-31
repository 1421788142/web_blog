import { useRoutes, RouteObject } from "react-router-dom";
import Login from "@/views/auth/Login";
import Error403 from "@/views/errors/403";
import Error404 from "@/views/errors/404";
import { memo } from "react";
import baseRouter from "@/routers/modules/base";

const rootRouter:RouteObject[] = [
	{
		path: "/login",
		element: <Login />,
		handle: {
			title: "登录页",
			key: "login"
		}
	},
	{
		path: "/403",
		element: <Error403 />,
		handle: {
			title: "暂无权限",
			key: "403"
		}
	},
	{
		path: "*",
		element: <Error404 />,
		handle: {
			title: "暂无页面",
			key: "404"
		}
	},
]

const Router = memo(() => {
	return useRoutes([...rootRouter, ...baseRouter])
})

export default Router