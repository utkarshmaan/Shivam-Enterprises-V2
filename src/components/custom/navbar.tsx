import { useEffect, useState } from 'react';
import gsap from "gsap";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import ServiceItem from './serviceItem';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleToggle() {
        setToggle(!toggle);
    }
    function handleNavigation(){
        navigate('/')
    }

    useEffect(() => {
        gsap.fromTo(
            ".navbar-content",
            { y: -400, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1, stagger: 0.3 }
        );
    }, []);

    return (
        <nav className="p-4 text-white bg-gray-800 navbar max-w-screen font-Itim">
            <div className="container flex justify-between items-center mx-auto">
                <div className="flex gap-2 items-center font-bold text-[1.5rem] navbar-content cursor-pointer" onClick={handleNavigation}>
                    <div>
                        <p className="text-gray-800" style={{ textShadow: "2px 0 yellow, -2px 0 yellow, 0 2px yellow, 0 -2px yellow" }}>S</p>
                        <p className="text-gray-800" style={{ textShadow: "2px 0 yellow, -2px 0 yellow, 0 2px yellow, 0 -2px yellow" }}>E</p>
                    </div>
                    <div className='bg-white h-12 w-[.1rem]'/>
                    <div>
                        {/* Branding Text */}
                        <h1 className='text-yellow-200 text-2xl'>SHIVAM</h1>
                        <h1 className='text-blue-200 text-2xl'>ENTERPRISES</h1>
                    </div>
                </div>

                {/* Desktop Navbar Links */}
                {windowWidth > 800 ? (
                    <ul className="flex items-center space-x-6 navbar-content text-xl z-50">
                        <li><a href="/">Home</a></li>
                        <li>
                            <HoverCard>
                                <HoverCardTrigger>Services</HoverCardTrigger>
                                <HoverCardContent className="w-screen h-fit">
                                    <ServiceItem />
                                </HoverCardContent>
                            </HoverCard>
                        </li>
                    </ul>
                ) : (
                    // Mobile Menu
                    <div className="flex flex-col items-center navbar-content">
                        <p onClick={handleToggle} className="cursor-pointer text-3xl">☰</p>
                        <div className={`bg-gray-800 w-full h-full fixed top-0 left-0 ${toggle ? 'block' : 'hidden'} z-50`}>
                            <ul className="flex flex-col items-center justify-center h-full text-white text-2xl gap-6">
                                <li><a href="/">Home</a></li>
                                <li><a href="/services/PRINTING">Printing</a></li>
                                <li><a href="/services/PAPER">Paper</a></li>
                                <li><a href="/services/PACKING">Packing</a></li>
                                <li><a href="/services/ADVERTISING">Advertising</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
