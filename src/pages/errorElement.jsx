import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
	const error = useRouteError();
	return (
		<div className="container">
			<h2>{error.data.msg}</h2>
		</div>
	);
};

export default ErrorElement;
