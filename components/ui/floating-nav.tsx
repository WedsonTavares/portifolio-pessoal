"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { navItems, socialMedia } from "@/data";
import { cn, withBasePath } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
       if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Rolando para baixo
        } else {
          setVisible(true); // Rolando para cima
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
  <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            )}
          >
            <span className="!cursor-pointer text-sm">{navItem.name}</span>
          </Link>
        ))}

        
          </motion.nav>

          {/* Social icons pinned to the top-right corner (outside the centered nav) */}
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
              className="fixed right-4 top-10 z-[5000] hidden items-center gap-2 rounded-3xl px-2 py-2 md:flex"
          >
            {socialMedia.map((profile) => (
              <Link
                key={`social-${profile.name}`}
                href={profile.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-md p-1"
                title={profile.name}
              >
                <Image
                  src={withBasePath(profile.img)}
                  alt={`social-${profile.name}`}
                  width={18}
                  height={18}
                />
              </Link>
            ))}
          </motion.div>
    </AnimatePresence>
  );
};
