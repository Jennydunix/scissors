import "./dashboard.scss";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { json } from "react-router-dom";
import { useLoaderData, Link } from "react-router-dom";

const Dashboard = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<Helmet>
				<title>Dashboard</title>
			</Helmet>
			<div className="container">
				{data.length === 0 ? (
					<p className="etext">You have not created a link yet</p>
				) : (
					<div className="linkLists">
						{data.map((link) => (
							<Link
								to={`/dashboard/${link._id}`}
								className="card"
								key={link._id}
							>
								<h3>{link.title}</h3>
								<p>{link.desc}</p>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Dashboard;

export const loader = async () => {
	try {
		const { data } = await axios.get("https://api-scissors.onrender.com/links", {
			withCredentials: true,
		});
		return data;
	} catch (error) {
		throw json(
			{
				msg: "something happened.",
			},
			{ status: 401 }
		);
	}
};
