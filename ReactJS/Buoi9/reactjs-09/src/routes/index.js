import Blog from "../pages/Blog";
import BlogDefault from "../pages/Blog/BlogDefault";
import BlogNews from "../pages/Blog/BlogNews";
import BlogRelated from "../pages/Blog/BlogRelated";
import Home from "../pages/Home";
import LayoutDefault from "../pages/layout/LayoutDefault";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "blog",
                element: <Blog/>,
                children: [
                    {
                        path: "",
                        element: <BlogDefault/>
                    },
                    {
                        path: "news",
                        element: <BlogNews/>
                    },
                    {
                        path: "related",
                        element: <BlogRelated/>
                    }
                ]
            }
        ]
    }
]