import ContactUs from "@/components/custom/contactUs";
import HeroSection from "@/components/custom/hero";
import PrintArtworkTips from "@/components/custom/PrintArtworkTips";
import Services from "@/components/custom/services";
import WhyUs from "@/components/custom/whyus";
const HomePage = () =>{

    return (
        <main>

            <HeroSection/>
            <Services/>
            {/* <Testimonials/> */}
            <PrintArtworkTips/>
            <WhyUs/>
            <ContactUs/>
        </main>
    )
}

export default HomePage;
