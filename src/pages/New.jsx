import "./new.scss";
import { Helmet } from "react-helmet-async";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Newlink = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			title: "",
			desc: "",
			longUrl: "",
			customID: "",
		},
		validationSchema: yup.object().shape({
			title: yup.string().required("Field is required"),
			desc: yup.string().required("Field is required"),
			longUrl: yup.string().required("Field is required"),
			customID: yup.string().required("Field is required"),
		}),
		onSubmit: async (values) => {
			setLoading(true);
			try {
				const { data } = await axios.post(
					"https://api-scissors.onrender.com/links/createLink/custom",
					values,
					{
						withCredentials: true,
					}
				);
				setLoading(false);
				navigate(`/dashboard/${data._id}`);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		},
	});
	return (
		<>
			<Helmet>
				<title>NewLink</title>
			</Helmet>
			<div className="container">
				<form onSubmit={formik.handleSubmit}>
					<div className="inputContainer">
						<label>Title</label>
						<input
							type="text"
							name="title"
							value={formik.values.title}
							onChange={formik.handleChange}
						/>
					</div>
					<div className="inputContainer">
						<label>Desc </label>
						<textarea
							name="desc"
							rows="4"
							cols="50"
							value={formik.values.desc}
							onChange={formik.handleChange}
						></textarea>
					</div>
					<div className="inputContainer">
						<label>Url text</label>
						<input
							type="text"
							name="customID"
							value={formik.values.customID}
							onChange={formik.handleChange}
						/>
					</div>
					<div className="inputContainer">
						<label>Long Url</label>
						<input
							type="text"
							name="longUrl"
							value={formik.values.longUrl}
							onChange={formik.handleChange}
						/>
					</div>
					<button disabled={loading}>
						{loading ? "Loading" : "Create Link"}
					</button>
				</form>
			</div>
		</>
	);
};

export default Newlink;
