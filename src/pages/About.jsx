import { useNavigate } from "react-router-dom";

export default function About() {
	const navigate = useNavigate();
	const onClick = () => {
		navigate("/");
	};
	return (
		<div>
			<button onClick={onClick}>BACK</button>
		</div>
	);
}
