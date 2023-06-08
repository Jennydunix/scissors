import "./Pricing.scss";
const Pricing = () => {
	return (
		<section className="pricing">
			<div className="container">
				<div className="title">
					<h2>
						A <span>price perfect</span> for your needs.
					</h2>
					<p>
						From catering for your personal, business, event, socials needs, you
						can be rest assured we have you in mind in our pricing.
					</p>
				</div>
				<div className="priceCards">
					<div className="card">
						<div className="content">
							<h2 className="ctitle">Basic</h2>
							<h2 className="cpricing">Free</h2>
							<h3 className="cdesc">Free plan for all users</h3>
							<ul>
								<li>Unlimited URL Shortening</li>
								<li>Basic Link Analytics</li>
								<li>Customizable Short Links</li>
								<li>Standard Support</li>
								<li>Ad-supported</li>
							</ul>
						</div>
						<button>Select Pricing</button>
					</div>
					<div className="card">
						<div className="content">
							<h2 className="ctitle">Professional</h2>
							<h2 className="cpricing">$15/month</h2>
							<h3 className="cdesc">Ideal for business creators</h3>
							<ul>
								<li>Enhanced Link Analytics</li>
								<li>Custom Branded Domains</li>
								<li>Advanced Link Customization</li>
								<li>Priority Support</li>
								<li>Ad-free Experience</li>
							</ul>
						</div>
						<button>Select Pricing</button>
					</div>
					<div className="card">
						<div className="content">
							<h2 className="ctitle">Teams</h2>
							<h2 className="cpricing">$25/month</h2>
							<h3 className="cdesc">Share with up to 10 users</h3>
							<ul>
								<li>Team Collaboration</li>
								<li>User Roles and Permissions</li>
								<li>Enhanced Security</li>
								<li>API Access</li>
								<li>Dedicated Account Manager</li>
							</ul>
						</div>
						<button>Select Pricing</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
