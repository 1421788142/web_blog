import { RouteObject } from "react-router-dom";
import MainLayout from "@/layouts/main";
import Home from "@/views/home";
import Article from "@/views/base/article/index";
import Resource from "@/views/base/resource/index";
import User from "@/views/base/user/index";
import Notice from "@/views/base/notice/index";
import ArticleDetail from "@/views/base/article/_id/index";

// 用户继承路由
const baseRouter:RouteObject = {
    path: '/',
    element: <MainLayout />,
    children:[
        {
            path: "/",
            element: <Home/>,
            handle: {
                title: "首页",
                key: "home"
            }
        },
        {
            path: "/article",
            element: <Article/>,
            handle: {
                title: "文章管理",
                key: "article"
            }
        },
        {
            path: "/article/:id",
            element: <ArticleDetail/>,
            handle: {
                title: "文章管理",
                key: "article"
            }
        },
        {
            path: "/resource",
            element: <Resource/>,
            handle: {
                title: "资源管理",
                key: "resource"
            }
        },
        {
            path: "/user",
            element: <User/>,
            handle: {
                title: "个人空间",
                key: "user"
            }
        },
        {
            path: "/notice",
            element: <Notice/>,
            handle: {
                title: "留言管理",
                key: "notice"
            }
        }
    ]
}


export default baseRouter