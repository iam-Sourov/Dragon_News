import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layouts/HomeLayout";

 const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
        },
        {
            path: '/*',
            element: <h1>Error</h1>,
        }
    ]
)
export default router;