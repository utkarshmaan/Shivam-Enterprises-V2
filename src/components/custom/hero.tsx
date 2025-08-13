import { useEffect } from 'react';
import heroVideo from "../../media/video1.mp4";
import { Button } from '../ui/button';
import gsap from "gsap";

const HeroSection = () => {
    useEffect(() => {
        gsap.fromTo(
            ".hero-title",
            { autoAlpha: 0, scale: 0.5 },
            { autoAlpha: 1, duration: 1, scale: 1, stagger: 0.3 }
        );
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Video Background with Dark Overlay */}
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 -z-10"></div>
            <video
                className="absolute inset-0 object-cover w-full h-full -z-20"
                autoPlay
                loop
                muted
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Hero Content */}
            <div className="relative flex flex-col items-center justify-center h-full">
                <h1 className="hero-title text-7xl font-bold text-yellow-300 z-10 font-Patrick drop-shadow-lg">
                    CRAFTED TO SERVE, BUILT ON QUALITY.
                </h1>
                <p className="hero-title mt-4 text-2xl text-blue-200 z-10 font-Itim drop-shadow-lg">
                    Delivering tailored solutions with a quality-first approach to meet your needs, big or small.
                </p>
                <Button className="mt-8 rounded-xl text-lg px-6 py-3 bg-yellow-300 text-gray-900 hover:bg-yellow-400 transition font-Itim">
                    <a href="#services">Get Started</a>
                </Button>
            </div>
        </section>
    );
};

export default HeroSection;
