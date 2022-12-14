import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<ul>
				<li>HOME</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/list">List</Link>
				</li>
			</ul>
		</div>
	);
}
