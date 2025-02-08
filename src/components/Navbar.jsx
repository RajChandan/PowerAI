import React, {useState} from "react";

const Navbar = () => {
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  } ; 

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-white text-2xl font-bold">PowerAI</span>
                </div>
                {/* Desktop Links */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {[{name:"Home",href:"/"},
                            {name:"Features",href:"/features"},
                            {name:"Webinars",href:"/webinars"},
                            {name:"Solutions",href:"/solutions"},
                            
                        ].map((link) => (
                            <a key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {link.name}
                            </a>

                        ))
                        }
                    </div>
                </div>
            </div>

        </div>
    </nav>
  );
};
export default Navbar;