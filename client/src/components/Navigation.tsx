import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", to: "home" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "FAQ", to: "faq" },
  { name: "Contact", to: "contact" },
];

interface NavigationProps {
  isCandyCursor?: boolean;
  onCursorToggle?: () => void;
  onMobileMenuToggle?: (isOpen: boolean) => void;
}

export function Navigation({ isCandyCursor = false, onCursorToggle, onMobileMenuToggle }: NavigationProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    onMobileMenuToggle?.(isOpen);
  }, [isOpen, onMobileMenuToggle]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-lg shadow-primary/10 py-4" 
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
          >
            CottonCandy Designs
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-foreground/80 font-medium cursor-pointer transition-all relative group"
              >
                <span className="relative z-10 block group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent">
                  {link.name}
                </span>
              </Link>
            ))}
            
            {/* Cursor Toggle Button */}
            <motion.button
              onClick={onCursorToggle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-all shadow-lg border-2 ${
                isCandyCursor
                  ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white border-pink-300 shadow-pink-300/50"
                  : "bg-gradient-to-r from-orange-400 to-red-500 text-white border-orange-300 shadow-orange-300/50"
              }`}
            >
              {isCandyCursor ? "🍬" : "↖️"}
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-border/50 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-secondary transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Cursor Toggle */}
              <motion.button
                onClick={() => {
                  onCursorToggle?.();
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-md ${
                  isCandyCursor
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-purple-300"
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-2 border-gray-300"
                }`}
              >
                {isCandyCursor ? "🍬 Candy Cursor ON" : "↖️ Normal Cursor"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
