import { Helmet } from "react-helmet-async";
import axios from "axios";
import { json, useLoaderData } from "react-router-dom";
import "./linkDetail.scss"
const LinkDetails = () => {
	const data = useLoaderData();
	
	const copyContent = async () => {
		try {
			const text = `https://redirect-riww.onrender.com/${data.shortId}`;
			await navigator.clipboard.writeText(text);
			alert('copied')
			console.log("Content copied to clipboard");
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};
	return (
		<>
			<Helmet>
				<title>Link Detail</title>
			</Helmet>
			<div className="container">
				<div className="lbox">
					<h2>Title: {data.title}</h2>
					<p> Description :{data.desc}</p>
					<p>Number of visits :{data.no_of_visits}</p>
					<span>
						<p>Custom Link : https://redirect-riww.onrender.com/{data.shortId}</p>
						<button onClick={copyContent}> Copy to clipboard</button>
					</span>
					<p>Long Url : {data.longUrl}</p>
				</div>
			</div>
		</>
	);
};

export default LinkDetails;

export const loader = async ({ params }) => {
	try {
		const { data } = await axios(
			"https://api-scissors.onrender.com/links/detail/" + params.id,
			{
				withCredentials: true,
			}
		);
		return data;
	} catch (error) {
		throw json(
			{
				msg: "Cant find link.",
			},
			{ status: 401 }
		);
	}
};
