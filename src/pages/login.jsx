import { Link } from "react-router-dom";
import "./login.scss";
import { Helmet } from "react-helmet-async";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const LoginPage = () => {
	const ctx = useContext(AuthContext)
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			userdetail: "",
			password: "",
		},
		validationSchema: yup.object().shape({
			userdetail: yup.string().required("Field is required"),
			password: yup
				.string()
				.min(4, "Min of 4 letters")
				.max(15, "Max of 15 letters")
				.required("Field is required"),
		}),
		onSubmit: async (values) => {
			setLoading(true);
			try {
				const { data } = await axios.post(
					"https://api-scissors.onrender.com/auth/signIn",
					values,
					{
						withCredentials: true,
					}
				);
				setLoading(false);
				ctx.login(data)
				navigate("/dashboard");
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		},
	});
	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<div className="formContainer">
				<form onSubmit={formik.handleSubmit} method="post">
					<h1>Login to your account</h1>
					<div className="inputContainer">
						<label>Enter username or password</label>
						<input
							type="text"
							name="userdetail"
							value={formik.values.userdetail}
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
					<button disabled={loading}>{loading ? "Loading" : "Login"}</button>
					<p>
						Don&apos;t have an account <Link to={"/dashboard"}>Create one</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
