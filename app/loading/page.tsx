"use client";

import React, { useState, useEffect } from 'react';
import { motion, Transition, Variants } from 'motion/react';

// Your SpinningText component (included for completeness)
type SpinningTextProps = {
  children: string | string[];
  style?: React.CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear" as const,
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }
  if (Array.isArray(children)) {
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }
  const letters = children.split("");
  letters.push(" ");
  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  };
  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };
  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={`relative ${className || ''}`}
      style={{
        ...style,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block"
          style={
            {
              "--index": index,
              "--total": letters.length,
              "--radius": radius,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: "center",
            } as React.CSSProperties
          }
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
}

// Main Loading Page Component
export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          return 100;
        }
        // Simulate realistic loading with variable speed
        const increment = Math.random() * 3 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const circumference = 2 * Math.PI * 120; // radius of 120
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <><div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main Loading Circle Container */}
        <div className="relative w-80 h-80 flex items-center justify-center">

          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 280 280"
          >
            {/* Background circle */}
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="rgb(226 232 240)"
              strokeWidth="2"
              fill="none"
              className="opacity-30"
            />

            {/* Progress circle */}
            <motion.circle
              cx="140"
              cy="140"
              r="120"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300 ease-out drop-shadow-sm"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(15 23 42)" />
                <stop offset="50%" stopColor="rgb(51 65 85)" />
                <stop offset="100%" stopColor="rgb(100 116 139)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Spinning Text Ring */}
          <div className="absolute inset-0 w-full h-full">
            <SpinningText
              duration={20}
              radius={9.5}
              className="w-full h-full text-slate-400 text-xs font-light tracking-[0.2em] opacity-60"
            >
              LOADING • PLEASE WAIT • LOADING • PLEASE WAIT •
            </SpinningText>
          </div>

          {/* Center Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mb-4"
            >
              <div className="text-6xl font-thin text-slate-800 tabular-nums">
                {Math.round(progress)}
              </div>
              <div className="text-sm font-light text-slate-500 tracking-[0.3em] mt-1">
                PERCENT
              </div>
            </motion.div>

            {/* Loading dots animation */}
            <motion.div
              className="flex justify-center space-x-1 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-slate-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Completion Animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-16 h-16 border-2 border-green-500 rounded-full flex items-center justify-center bg-white shadow-lg"
          >
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="text-slate-400 text-sm font-light tracking-[0.2em] text-center">
          {isComplete ? 'READY' : 'INITIALIZING EXPERIENCE'}
        </div>
      </motion.div>
    </div></>
  );
}
