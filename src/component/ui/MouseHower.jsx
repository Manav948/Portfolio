"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Hero from "../Hero";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 130,
};

const MouseFollowCard = () => {
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);
  const scale = useSpring(0, SPRING);

  return (
    <div
      onPointerMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - bounds.left);
        y.set(e.clientY - bounds.top);
      }}
      onPointerEnter={() => {
        opacity.set(1);
        scale.set(1);
      }}
      onPointerLeave={() => {
        opacity.set(0);
        scale.set(0);
      }}
      className="
        relative h-full w-full
        overflow-hidden
      "
    >
      <motion.div
        style={{ x, y, opacity, scale }}
        className="
          pointer-events-none absolute
          h-15 w-15 rounded-full
          bg-linear-to-r from-[#f12d1c] to-[#ec1d31]
        "
      />
      <Hero />
    </div>
  );
};

export default MouseFollowCard;
