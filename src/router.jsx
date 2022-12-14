import { createBrowserRouter } from "react-router-dom";
import App from "App";
import Home from "pages/Home";
import About from "pages/About";
import Blogs from "pages/Blogs";
import Contact from "pages/Contact";
import List from "pages/List";
import Child1 from "pages/List/Child1";
import Child2 from "pages/List/Child2";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "blogs",
				element: <Blogs />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "list",
				element: <List />,
				children: [
					{
						path: "child1",
						element: <Child1 />,
					},
					{
						path: "child2",
						element: <Child2 />,
					},
				],
			},
		],
	},
]);
