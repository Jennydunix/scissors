import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Header = () => {
	const ctx = useContext(AuthContext);
	const navigate = useNavigate();
	const handlelogout = async () => {
		try {
			await axios.post("http://localhost:5000/auth/logout");
			ctx.logout()
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<header>
			<div className="container">
				<nav>
					<Link className="logo" to={ctx.user ? "/dashboard" : "/"}>
						<img src="/Vector.svg" alt="" />
						<h2>|SCISSOR</h2>
					</Link>
					{!ctx.user && (
						<>
							<ul>
								<li className="active">MY URLs</li>
								<li>Features</li>
								<li>Pricing</li>
								<li>Analytics</li>
								<li>FAQ&apos;s</li>
							</ul>

							<ul>
								<Link to={"/auth/login"}>Log in</Link>
								<Link to={"/auth/signup"} className="action">
									Try for free
								</Link>
							</ul>
						</>
					)}
					{ctx.user && (
						<div className="cuurentUserDetail">
							<p>{ctx.user.username}</p>
							<Link to="/new">New Link</Link>
							<button className="logout" onClick={handlelogout}>
								Logout
							</button>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
