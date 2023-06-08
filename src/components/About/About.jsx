import "./About.scss";
const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="aboutBox">
					<div className="text">
						<h2>
							Why choose <span>Scissors</span>{" "}
						</h2>
						<p>
							Scissors is the hub of everything that has to do with your link
							management. We shorten your URLs, allow you creating custom ones
							for your personal, business, event usage. Our swift QR code
							creation, management and usage tracking with advance analytics for
							all of these is second to none.
						</p>
					</div>
					<div className="features">
						<div className="features-box">
							<img src="./link-2.svg" alt="" />
							<h2>URL Shortening</h2>
							<p>
								Scissor allows you to shorten URLs of your business, events.
								Shorten your URL at scale, URL redirects.
							</p>
						</div>
						<div className="features-box">
							<img src="./edit.svg" alt="" />
							<h2>Custom URLs</h2>
							<p>
								With Scissor, you can create custom URLs, with the length you
								want! A solution for socials and businesses.
							</p>
						</div>
						<div className="features-box">
							<img src="./grid.svg" alt="" />
							<h2>QR Codes</h2>
							<p>
								Generate QR codes to your business, events. Bring your audience
								and customers to your doorstep with this scan and go solution.
							</p>
						</div>
						<div className="features-box">
							<img src="./activity.svg" alt="" />
							<h2>Data Analytics</h2>
							<p>
								Receive data on the usage of either your shortened URL, custom
								URLs or generated QR codes. Embedded to monitor progress.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
