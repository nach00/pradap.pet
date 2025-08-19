import React from "react";
import { cn } from "@/lib/utils";

interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

// Standard paragraph text
export const Paragraph = ({ children, className }: BodyTextProps) => (
  <p className={cn("text-gray-600 leading-relaxed", className)}>
    {children}
  </p>
);

// Lead paragraph - introductory text
export const Lede = ({ children, className }: BodyTextProps) => (
  <p className={cn("text-gray-600 text-lg leading-relaxed font-light mb-8", className)}>
    {children}
  </p>
);

// Large text for emphasis
export const LargeText = ({ children, className }: BodyTextProps) => (
  <p className={cn("text-gray-600 text-xl leading-relaxed", className)}>
    {children}
  </p>
);

// Small text for captions, disclaimers
export const SmallText = ({ children, className }: BodyTextProps) => (
  <p className={cn("text-gray-500 text-sm leading-relaxed", className)}>
    {children}
  </p>
);

// Muted text for less important content
export const MutedText = ({ children, className }: BodyTextProps) => (
  <p className={cn("text-gray-400 text-sm", className)}>
    {children}
  </p>
);

// Blockquote for longer quotations
export const Blockquote = ({ children, className, cite }: BodyTextProps & { cite?: string }) => (
  <blockquote className={cn("border-l-4 border-gray-200 pl-6 my-6 italic text-gray-600", className)}>
    {children}
    {cite && (
      <footer className="mt-2 text-sm text-gray-500">
        — {cite}
      </footer>
    )}
  </blockquote>
);

// Pull quote for highlighting key content
export const PullQuote = ({ children, className }: BodyTextProps) => (
  <div className={cn("bg-gray-50 border-l-4 border-yellow-400 p-6 my-8", className)}>
    <blockquote className="text-xl font-light text-gray-900 italic">
      {children}
    </blockquote>
  </div>
);

// Highlighted text for emphasis
export const Highlight = ({ children, className }: BodyTextProps) => (
  <mark className={cn("bg-yellow-100 text-yellow-900 px-1 py-0.5 rounded", className)}>
    {children}
  </mark>
);