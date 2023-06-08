import About from "../components/About/About";
import Faqs from "../components/FAQ/Faq";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/Pricing";
import QuickStart from "../components/QuickStart/QuickStart";
import Statics from "../components/statics/Statics";

const HomePage = () => {
	return (
		<>
            <Hero/>
            <Statics/>
            <About/>
            <Pricing/>
            <Form/>
            <Faqs/>
            <QuickStart/>
		</>
	);
};

export default HomePage;
