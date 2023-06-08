import { Link } from "react-router-dom";
import "./login.scss";
import { Helmet } from "react-helmet-async";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateUserPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validationSchema: yup.object().shape({
			username: yup.string().required("Field is required"),
			email: yup.string().email().required("Field is required"),
			password: yup
				.string()
				.min(4, "Min of 4 letters")
				.max(15, "Max of 15 letters")
				.required("Field is required"),
		}),
		onSubmit: async (values) => {
			setLoading(true)
			try {
				await axios.post("https://api-scissors.onrender.com/auth/createUser", {
					...values,
					username: values.username.toLowerCase(),
				});
				setLoading(false)
				navigate("/auth/login");
			} catch (error) {
				setLoading(false)
				console.log(error);
			}
		},
	});

	return (
		<>
			<Helmet>
				<title>Sign up</title>
			</Helmet>
			<div className="formContainer">
				<form onSubmit={formik.handleSubmit}>
					<h1>Create Account</h1>
					<div className="inputContainer">
						<label>User Name</label>
						<input
							type="text"
							name="username"
							value={formik.values.username}
							onChange={formik.handleChange}
						/>
					</div>
					<div className="inputContainer">
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
					</div>
					<div className="inputContainer">
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
					</div>
					<button disabled={loading}>
						{loading ? "Loading" : "Create Account"}
					</button>
					<p>
						Have an account <Link to={"/auth/login"}>Login</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default CreateUserPage;
