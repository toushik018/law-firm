"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const legalLinks = [
    { name: "Imprint", href: "/imprint" },
    { name: "Data Protection", href: "/data-protection" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const contactInfo = [
    {
      text: "info@kanzlei-cerkezovic.de",
      href: "mailto:info@kanzlei-cerkezovic.de",
    },
    {
      text: "(040) 638 622 39",
      href: "tel:+040638622390",
    },
  ];

  const letterAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-law-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8">
          {/* Social Links */}
          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-marine/70 uppercase hover:text-marine transition-colors duration-300 text-sm tracking-wider relative group flex items-center gap-2"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <ArrowUpRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.text}
                href={item.href}
                className="text-marine/70 hover:text-marine transition-colors duration-300 text-sm tracking-wider relative group flex items-center gap-2"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.text}
                <ArrowUpRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section with Large Brand Name */}
        <div className="pt-8 border-t border-marine/10">
          <div className="flex flex-col gap-8">
            {/* Large Brand Name */}
            <motion.div
              className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tight leading-none overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* First Word with Initial Gold Letter */}
              <div className="flex flex-wrap">
                {"Čerkezović".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    transition={{ delay: index * 0.05 }}
                    className={`hover:text-gold transition-colors duration-300 ${
                      index === 0 ? "text-gold" : "text-marine"
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              {/* Second Line */}
              <div className="flex flex-wrap">
                {"Law Firm".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    transition={{ delay: (index + 10) * 0.05 }}
                    className="text-marine hover:text-gold transition-colors duration-300"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Legal Links & Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6">
                {legalLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-marine/50 hover:text-marine transition-colors duration-300 text-sm relative group"
                    >
                      {link.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-px bg-gold origin-left"
                        whileHover={{ scaleX: 1 }}
                        initial={{ scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="text-marine/50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © {new Date().getFullYear()} All rights reserved to Čerkezović
                Law Firm.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;