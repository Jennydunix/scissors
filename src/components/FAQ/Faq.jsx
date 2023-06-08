import "./Faq.scss";
const Faqs = () => {
	return (
		<section className="faq">
			<div className="container">
				<h2>FAQs</h2>
				<div className="faqs">
					<div className="question">
						<div className="q">
							<p>How does URL shortening work?</p>
							<span>-</span>
						</div>
						<div className="a">
							<p>
								URL shortening works by taking a long URL and creating a
								shorter, condensed version that redirects to the original URL.
								When a user clicks on the shortened link, they are redirected to
								the intended destination.
							</p>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>
								Is it necessary to create an account to use the URL shortening
								service?
							</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>Are the shortened links permanent? Will they expire?</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>
								Are there any limitations on the number of URLs I can shorten?
							</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>
								Can I customize the shortened URLs to reflect my brand or
								content?
							</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>Can I track the performance of my shortened URLs?</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>
								How secure is the URL shortening service? Are the shortened
								links protected against spam or malicious activity?
							</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>What is a QR code and what can it do?</p>
							<span>+</span>
						</div>
					</div>
					<div className="question">
						<div className="q">
							<p>
								Is there an API available for integrating the URL shortening
								service into my own applications or websites?
							</p>
							<span>+</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faqs;
