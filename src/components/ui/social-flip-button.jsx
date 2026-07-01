"use client";;
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaDiscord,
} from "react-icons/fa";

const defaultItems = [
    { letter: "C", icon: <FaGithub />, label: "Github", href: "#" },
    { letter: "O", icon: <FaTwitter />, label: "Twitter", href: "#" },
    { letter: "N", icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
    { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "#" },
    { letter: "A", icon: <FaFacebook />, label: "Facebook", href: "#" },
    { letter: "C", icon: <FaEnvelope />, label: "Email", href: "#" },
    { letter: "T", icon: <FaDiscord />, label: "Discord", href: "#" },
];

const SocialFlipNode = ({
    item,
    index,
    isHovered,
    setTooltipIndex,
    tooltipIndex,
    itemClassName,
    frontClassName,
    backClassName,
    onNodeClick
}) => {
    const Wrapper = item.href ? "a" : "div";
    const wrapperProps = item.href
        ? { 
            href: item.href, 
            target: "_blank", 
            rel: "noopener noreferrer",
            onClick: (e) => onNodeClick(e, index)
          }
        : { onClick: item.onClick };

    return (
        <Wrapper
            {...wrapperProps}
            className={cn("relative h-10 w-10 cursor-pointer", itemClassName)}
            style={{ perspective: "1000px" }}
            onMouseEnter={() => setTooltipIndex(index)}
            onMouseLeave={() => setTooltipIndex(null)}>
            <AnimatePresence>
                {isHovered && tooltipIndex === index && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
                        animate={{ opacity: 1, y: -50, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.8, x: "-50%" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 z-50 whitespace-nowrap rounded-lg bg-zinc-950 border border-white/10 px-3 py-1.5 text-xs font-semibold text-accent shadow-xl">
                        {item.label}
                        {/* Arrow */}
                        <div
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-zinc-950 border-r border-b border-white/10" />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                className="relative h-full w-full"
                initial={false}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                    delay: index * 0.08,
                }}
                style={{ transformStyle: "preserve-3d" }}>
                {/* Front - Letter */}
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 border border-white/10 text-lg font-display uppercase font-bold text-zinc-300 shadow-sm transition-colors duration-200 group-hover/button:text-white",
                        frontClassName
                    )}
                    style={{ backfaceVisibility: "hidden" }}>
                    {item.letter}
                </div>

                {/* Back - Icon */}
                <div
                    className={cn(
                        "absolute inset-0 flex items-center justify-center rounded-lg bg-accent text-lg text-black font-semibold shadow-inner",
                        backClassName
                    )}
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}>
                    {item.icon}
                </div>
            </motion.div>
        </Wrapper>
    );
};

export function SocialFlipButton({
    items,
    platform,
    href,
    className,
    itemClassName,
    frontClassName,
    backClassName
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipIndex, setTooltipIndex] = useState(null);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (isHovered && containerRef.current && !containerRef.current.contains(e.target)) {
                setIsHovered(false);
                setTooltipIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isHovered]);

    const handleNodeClick = (e, index) => {
        const supportsHover = window.matchMedia("(hover: hover)").matches;
        if (!supportsHover) {
            if (!isHovered) {
                e.preventDefault();
                setIsHovered(true);
                setTooltipIndex(index);
            } else if (tooltipIndex !== index) {
                e.preventDefault();
                setTooltipIndex(index);
            }
        }
    };

    let displayItems = items;
    if (platform && href) {
        let letter = "S";
        let icon = null;
        let label = platform.charAt(0).toUpperCase() + platform.slice(1);

        switch (platform.toLowerCase()) {
            case "github":
                letter = "G";
                icon = <FaGithub />;
                break;
            case "twitter":
                letter = "T";
                icon = <FaTwitter />;
                break;
            case "linkedin":
                letter = "L";
                icon = <FaLinkedin />;
                break;
            case "instagram":
                letter = "I";
                icon = <FaInstagram />;
                break;
            case "facebook":
                letter = "F";
                icon = <FaFacebook />;
                break;
            case "email":
            case "mail":
                letter = "E";
                icon = <FaEnvelope />;
                label = "Email";
                break;
            case "discord":
                letter = "D";
                icon = <FaDiscord />;
                break;
        }
        displayItems = [{ letter, icon, label, href }];
    } else if (!displayItems) {
        displayItems = defaultItems;
    }

    return (
        <div className={cn("flex items-center justify-center gap-4", className)}>
            <div
                ref={containerRef}
                className="group relative flex items-center justify-center gap-2 rounded-2xl glass-border bg-black/40 p-3 shadow-2xl backdrop-blur-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setTooltipIndex(null);
                }}>
                {/* Border Lines Container - Clipped */}
                <div
                    className="absolute -inset-[1px] overflow-hidden rounded-2xl pointer-events-none">
                    {/* Animated Top Border Line */}
                    <motion.div
                        className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                        }} />

                    {/* Animated Bottom Border Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                        }} />
                </div>

                {displayItems.map((item, index) => (
                    <SocialFlipNode
                        key={index}
                        item={item}
                        index={index}
                        isHovered={isHovered}
                        setTooltipIndex={setTooltipIndex}
                        tooltipIndex={tooltipIndex}
                        itemClassName={itemClassName}
                        frontClassName={frontClassName}
                        backClassName={backClassName}
                        onNodeClick={handleNodeClick} />
                ))}
            </div>
        </div>
    );
}

export default SocialFlipButton;
