"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { ChevronDown, Contact, MenuIcon, UsersRound, Rss, BriefcaseBusiness } from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ASSETS_BASE_URL } from "@/lib/variables";
import {
  navLinksVariants,
  PortfolioLinksConfig,
  SolutionsLinks,
  WhyKriscentLinks,
} from "./navbarConfigs";
import ServicesContent from "./service-card";
import WhyKriscent from "./why-kriscent";
import InsightsContent from "./insights-card";

// in the mentioned paths, the navbar will be transparent when scrolled to the top of the page. Otherwise, it will have a solid background.
const transparentNavbarPaths = ["/", "/hire-talent/", "/ai-solutions/"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1880px)' });
  const pathName = usePathname();
  const isHome: boolean = transparentNavbarPaths.includes(pathName);
  const [isOpen, setIsOpen] = useState(false);

  const ticking = useRef(false);

  useEffect(() => {
    const updateNavbar = () => {
      setScrolled(window.scrollY > 24);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    updateNavbar();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isSolid = scrolled || !isHome;

  return (
    <motion.div
      initial={false}
      animate={{ y: 0 }}
      className={cn(
        // Keep original positional/structural classes from your variants
        isSolid
          ? navLinksVariants.navbarBase.offHome
          : navLinksVariants.navbarBase.onHome,
        // Glass treatment layer , only background/blur, no layout changes
        "will-change-transform transition-all duration-300",
        isSolid
          ? [
            // Scrolled / non-home: primary red + glass
            "bg-primary/80 backdrop-blur-xl backdrop-saturate-150",
            "border-b border-white/10",
            "shadow-lg shadow-primary/10",
          ]
          : [
            // Home + top: fully transparent, no blur
            "bg-transparent",
            "border-b border-transparent",
          ]
      )}
    >
      <div className="w-full flex items-center justify-between list-none h-full px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px] 2xl:px-10">

        {/* kriscent navbar logos */}
        <div className="w-72">
          <Link href={"/"}>
            <img
              src={`${ASSETS_BASE_URL}/tempAssets/logokriscent.png?updatedAt=1724488738769`}
              alt="Kriscent logo white"
              width={isBigScreen ? 200 : 140}
              height={isBigScreen ? 80 : 40}
            />
          </Link>
        </div>

        {/* Mobile menu/drawer (Sheet) */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                name="hamburger-menu"
              >
                <MenuIcon className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] h-screen sm:w-[400px] p-0 overflow-x-hidden overflow-y-scroll z-53">
              <nav className="flex flex-col mt-5">
                <MobileNavLinks setIsOpen={setIsOpen} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navigation/navbar */}
        <div className="hidden lg:block">
          <NavbarLinks scrolled={scrolled} isHome={isHome} className="flex items-center gap-4 h-full" />
        </div>
      </div>
    </motion.div>
  );
}

// all components for navbar below --------------------------------------------------------------------------------------------------
// navlinks function for bigger screens here-----------------------------------------
function NavbarLinks({ className, scrolled, isHome }: { className?: string, scrolled: boolean, isHome: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(className)} >
      <Menu setActive={setActive}>

        {/* why kriscent link-------------------------------------------- */}
        <MenuItem
          setActive={setActive}
          active={active}
          item={WhyKriscentLinks.linkTitle}
          scrolled={scrolled}
          isHome={isHome}
        >
          {/* wht kriscent submenu */}
          <WhyKriscent />
        </MenuItem>

        {/* servies menu link -------------------------------------- */}
        <MenuItem setActive={setActive} active={active} item={SolutionsLinks.linkTitle} scrolled={scrolled} isHome={isHome}>

          {/* services submenu  ------------------------------- */}
          <div className="w-full flex h-fit gap-3">
            <div className="p-2 bg-white backdrop-blue-lg shadow-2xl h-fit overflow-hidden rounded-4xl w-[100%]">
              <ServicesContent />
            </div>
          </div>

        </MenuItem>

        {/* external kriscent.com link ------------------------------- */}
        <MenuItem setActive={setActive} active={active} scrolled={scrolled} isHome={isHome} item={"Products"} target={"https://kriscent.com/"} />

        {/* Portfolio manu link ------------------------------- */}
        <MenuItem setActive={setActive} active={active} scrolled={scrolled} isHome={isHome} item={PortfolioLinksConfig.linkTitle} target={PortfolioLinksConfig.target} />

        {/* Insights menu link (replaces Blog) ------------------------------- */}
        <MenuItem setActive={setActive} active={active} scrolled={scrolled} isHome={isHome} item={"Insights"}>
          {/* insights submenu  ------------------------------- */}
          <div className="w-full flex h-fit gap-3">
            <div className="p-2 bg-white backdrop-blue-lg shadow-2xl h-fit overflow-hidden rounded-4xl w-[100%]">
              <InsightsContent />
            </div>
          </div>
        </MenuItem>

        {/* contact manu link ------------------------------- */}
        <MenuItem setActive={setActive} active={active} scrolled={scrolled} isHome={isHome} item={"Contact"} target="/contact" />
      </Menu>

      <Link href={"/hire-talent"}>
        <Button variant="secondary" className="h-8 px-2 cursor-pointer">
          HIRE TALENT
        </Button>
      </Link>

      <Link
        href="https://wa.me/918947027625"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry"
        className="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0CAA41] text-white shadow-lg shadow-[#0CAA41]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0CAA41]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <IconBrandWhatsapp size={20} className="transition-transform duration-300 group-hover:scale-105" />
      </Link>

    </div>
  );
}

// mobile navbar links function----------------------------------------------------------
function MobileNavLinks({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <motion.div
      className="flex flex-col gap-3 relative px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Why Kriscent Links */}
      <MobileMenuItem
        title={WhyKriscentLinks.linkTitle}
        icon={WhyKriscentLinks.icon}
        target={WhyKriscentLinks.target}
        setIsOpen={setIsOpen}
      >
        <motion.div
          className="pl-4 text-gray-600 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {WhyKriscentLinks.childrens.map((item, index) => (
            <MobileMenuItem
              key={index}
              title={item.linkTitle}
              icon={item.icon}
              target={item.target}
              setIsOpen={setIsOpen}
            />
          ))}
        </motion.div>
      </MobileMenuItem>

      {/* Services Links */}
      <MobileMenuItem
        title={SolutionsLinks.servicesLinks.linkTitle}
        icon={SolutionsLinks.servicesLinks.icon}
        setIsOpen={setIsOpen}
      >
        <motion.div className="ml-4 text-gray-600 flex flex-col gap-2 bg-white">
          {SolutionsLinks.servicesLinks.childrens.map((item, index) => (
            <MobileMenuItem
              key={index}
              title={item.linkTitle}
              icon={item.icon}
              target={item.target}
              setIsOpen={setIsOpen}
            />
          ))}
        </motion.div>
      </MobileMenuItem>

      {/* Portfolio Link */}
      <MobileMenuItem
        title={PortfolioLinksConfig.linkTitle}
        icon={PortfolioLinksConfig.icon}
        target={PortfolioLinksConfig.target}
        setIsOpen={setIsOpen}
      />

      {/* Insights Links */}
      <MobileMenuItem
        title="Insights"
        icon={<Rss className="h-4 w-4" />}
        setIsOpen={setIsOpen}
      >
        <motion.div className="ml-4 text-gray-600 flex flex-col gap-2 bg-white">
          <MobileMenuItem
            title="Case Studies"
            icon={<BriefcaseBusiness className="h-4 w-4" />}
            target="/case-studies"
            setIsOpen={setIsOpen}
          />
          <MobileMenuItem
            title="Blog"
            icon={<Rss className="h-4 w-4" />}
            target="https://kriscent.in/blog"
            setIsOpen={setIsOpen}
          />
        </motion.div>
      </MobileMenuItem>

      {/* Career Link */}
      <MobileMenuItem
        title="Career"
        icon={<UsersRound className="h-4 w-4" />}
        target="/career"
        setIsOpen={setIsOpen}
      />

      {/* Contact Link */}
      <MobileMenuItem
        title="Contact us"
        icon={<Contact className="h-4 w-4" />}
        target="/contact"
        setIsOpen={setIsOpen}
      />

      <Link
        className="w-full flex justify-center"
        href="/hire-talent"
        onClick={() => setIsOpen(false)}
      >
        <Button
          className="w-[90%] bg-primary text-white hover:bg-primary/90 mt-4
                     transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Hire Talent
        </Button>
      </Link>

      <Link
        className="w-full flex justify-center"
        href="https://wa.me/918947027625"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsOpen(false)}
      >
        <Button
          className="w-[90%] bg-[#0CAA41] text-white hover:bg-[#0CAA41]/90 mt-4
                     transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <IconBrandWhatsapp size={18} className="mr-2" /> WhatsApp Enquiry
        </Button>
      </Link>
    </motion.div>
  );
}

// links for showing the menu links in the mobile devices
function MobileMenuItem({
  title,
  children,
  target,
  icon,
  setIsOpen
}: {
  title: string
  children?: React.ReactNode
  target?: string
  icon?: React.ReactNode
  setIsOpen: (isOpen: boolean) => void
}) {
  const [isOpen, setIsOpenLocal] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (children) {
      setIsOpenLocal(!isOpen);
    } else {
      router.push(target || '/');
      setIsOpen(false);
    }
  };

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={handleClick}
        className="flex justify-between items-center w-full py-3 px-4 text-sm font-medium
                     rounded-lg transition-colors duration-200
                     hover:bg-gray-50 active:bg-gray-100"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="text-gray-500">
              {icon}
            </span>
          )}
          <span className="text-gray-700">{title}</span>
        </div>
        {children && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </motion.span>
        )}
      </button>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="py-2 bg-gray-50/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
