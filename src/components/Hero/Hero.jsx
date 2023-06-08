import { Link } from "react-router-dom";
import "./Hero.scss";
const Hero = () => {
	return (
		<section>
			<div className="container">
				<div className="box">
					<div>
						Optimize Your Online Experience with Our Advanced
						<span> URL Shortening </span>
						Solution
					</div>
					<div>
						Personalize your shortened URLs to align with your brand identity.
						Utilize custom slugs, branded links, and domain customization
						options to reinforce your brand presence and enhance user
						engagement.
					</div>
                    <div className="actions">
                        <ul>
                            <Link to={"/auth/signup"}>Sign up</Link>
                            <li>Learn more</li>
                        </ul>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
