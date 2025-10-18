import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    path: '',
                    element: <Home></Home>,
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                }
            ]
        },
        {
            path: '/*',
            element: <h1>Error</h1>,
        }
    ]
)
export default router;