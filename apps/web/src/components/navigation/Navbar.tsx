import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  url: string;
}

interface NavbarProps {
  navDirectory: NavItem[];
}

function Navbar({ navDirectory }: NavbarProps) {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
  };

  const handleRedirect = (url: string) => {
    closeDrawer();
    if (url.startsWith("#")) {
      const el = document.querySelector(url);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center px-5 md:px-11 py-[14px] md:py-0 justify-between [background:color-mix(in_oklab,var(--ivory)_82%,transparent)] [backdrop-filter:blur(12px)] border-b border-hairline">
        {/* Mobile logo: diamond + logo image */}
        <div
          className="flex md:hidden items-center cursor-pointer hover:scale-105 duration-300"
          onClick={() => handleRedirect("#hero")}
        >
          <img src="/logos/Ethos-PurpleDeep-512.png" className="h-14 w-auto object-contain" />
        </div>

        {/* Desktop logo */}
        <div className="hidden md:block w-18 py-2 hover:cursor-pointer hover:scale-105 duration-300">
          <img className="object-cover" src="/logos/Ethos-PurpleDeep-512.png" onClick={() => handleRedirect("#hero")} />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex py-4 items-center gap-8">
          {navDirectory.map((navItem, idx) => (
            <div
              key={idx}
              onClick={() => handleRedirect(navItem.url)}
              className={`text-sm underline-none cursor-pointer duration-300 ${navItem.url === "/order" ? "rounded-full bg-primary px-5.5 py-2.5 font-semibold tracking-[0.04em] text-white transition hover:bg-purple-deep hover:scale-105" : "font-medium text-muted-ink hover:text-plum-ink hover:scale-105"}`}
            >
              {navItem.label}
            </div>
          ))}
        </div>

        {/* Mobile: Order CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => handleRedirect("/order")}
            className="bg-primary text-white text-[12.5px] font-semibold tracking-[0.04em] px-[18px] py-[9px] rounded-full border-none cursor-pointer"
          >
            Order
          </button>
          <button
            onClick={() => openDrawer()}
            aria-label="Open menu"
            className="flex flex-col justify-center gap-[4.5px] w-10 h-10 items-center border border-hairline bg-card rounded-[11px] cursor-pointer p-0"
          >
            <span className="block w-[17px] h-[1.6px] bg-plum-ink" />
            <span className="block w-[17px] h-[1.6px] bg-plum-ink" />
          </button>
        </div>
      </div>

      {/* Mobile slide-out drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-[60] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => closeDrawer()}
              className="absolute inset-0 [background:color-mix(in_oklab,var(--plum-ink)_40%,transparent)] [backdrop-filter:blur(2px)]"
            />
            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="absolute top-0 right-0 w-[82%] max-w-[340px] h-full bg-background shadow-[−12px_0_40px_rgba(0,0,0,0.16)] px-6.5 py-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-11">
                <img src="/logos/Ethos-PurpleDeep-512.png" className="h-14 w-auto object-contain" />
                <button
                  onClick={() => closeDrawer()}
                  className="border-none bg-transparent text-[22px] text-muted-ink cursor-pointer leading-none p-1"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col flex-1">
                {navDirectory.filter(item => item.url !== "/order").map((navItem, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRedirect(navItem.url)}
                    className="text-left border-b border-border bg-transparent cursor-pointer font-serif text-[32px] font-medium text-plum-ink py-4 px-0 duration-200 hover:text-purple-deep"
                  >
                    {navItem.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => handleRedirect("/order")}
                className="w-full border-none bg-primary text-white font-sans text-[15px] font-semibold py-4.5 rounded-full cursor-pointer mt-6"
              >
                Order online
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
