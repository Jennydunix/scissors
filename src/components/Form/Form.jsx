import "./Form.scss";
const Form = () => {
	return (
		<section className="sform">
			<div className="container">
				<div className="formContainer">
					<form action="">
						<input type="text" placeholder="Paste URL here..." />
						<div>
							<select>
								<option value="Customize domain" default>
									Customize domain
								</option>
							</select>
							<input type="text" placeholder="Type Alias here" />
						</div>
						<button>
							Trim url <img src="./Vector1.svg" />
						</button>
					</form>
					<p>
						By clicking TrimURL, I agree to the <span>Terms of Service</span>,
						<span>Privacy Policy</span> and Use of Cookies.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Form;
