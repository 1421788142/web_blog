import { RouteObject } from "react-router-dom";
import lazyLoad from "@/utils/lazyLoad";
import React from "react";
import MainLayout from "@/layouts/main";

// 用户继承路由
const baseRouter:RouteObject[] = [
	{
        path: '/',
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: lazyLoad(React.lazy(()=>import('@/views/home'))),
                handle: {
                    title: "首页",
                    key: "home"
                }
            }
        ]
	},
]


export default baseRouter