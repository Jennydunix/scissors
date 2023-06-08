import Layout from "./Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages";
import CreateUserPage from "./pages/signup";
import LoginPage from "./pages/login";
import Dashboard, { loader as dashboardLoader } from "./pages/dashboard";
import Newlink from "./pages/New";
import ErrorElement from "./pages/errorElement";
import LinkDetails, { loader as detailLoader } from "./pages/linkDetail";
function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			errorElement: <ErrorElement />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/dashboard",
					children: [
						{
							index: true,
							element: <Dashboard />,
							loader: dashboardLoader,
						},
						{
							path: ":id",
							element: <LinkDetails />,
							loader: detailLoader,
						},
					],
				},
				{
					path: "/new",
					element: <Newlink />,
				},
			],
		},
		{
			path: "/auth",
			children: [
				{
					path: "signup",
					element: <CreateUserPage />,
				},
				{
					path: "login",
					element: <LoginPage />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
