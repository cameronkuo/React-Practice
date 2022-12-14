import React, { Suspense } from "react";
import { ConfigProvider, theme } from "antd";
import Reservation from "components/Reservation";
import { Link, Outlet } from "react-router-dom";

const Form = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(import("components/Form"));
		}, 5000);
	});
});

function App() {
	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
			}}
		>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/blogs">Blogs</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/list">Contact</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
			<div className="flex flex-col items-center">
				<Suspense fallback={<div className="text-white">Loading...</div>}>
					<Form />
				</Suspense>
				<Reservation />
			</div>
		</ConfigProvider>
	);
}

export default App;
