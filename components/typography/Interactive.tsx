import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface InteractiveProps {
  children: React.ReactNode;
  className?: string;
}

// Link text component
export const LinkText = ({ 
  children, 
  className, 
  href, 
  external = false 
}: InteractiveProps & { href: string; external?: boolean }) => {
  if (external) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-gray-900 underline hover:text-gray-600 transition-colors", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn("text-gray-900 underline hover:text-gray-600 transition-colors", className)}>
      {children}
    </Link>
  );
};

// Button text component
export const ButtonText = ({ 
  children, 
  className, 
  variant = "primary",
  size = "default"
}: InteractiveProps & { variant?: "primary" | "secondary" | "ghost"; size?: "sm" | "default" | "lg" }) => {
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  return (
    <button className={cn("inline-flex items-center rounded-md font-medium transition-colors", variants[variant], sizes[size], className)}>
      {children}
    </button>
  );
};

// Form label component
export const FormLabel = ({ children, className, required, htmlFor }: InteractiveProps & { required?: boolean; htmlFor?: string }) => (
  <label htmlFor={htmlFor} className={cn("block text-sm font-medium text-gray-700 mb-2", className)}>
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

// Placeholder text component
export const PlaceholderText = ({ children, className }: InteractiveProps) => (
  <span className={cn("text-gray-400 text-sm", className)}>
    {children}
  </span>
);

// Error message component
export const ErrorMessage = ({ children, className }: InteractiveProps) => (
  <div className={cn("text-red-600 text-sm mt-1", className)}>
    {children}
  </div>
);

// Success message component
export const SuccessMessage = ({ children, className }: InteractiveProps) => (
  <div className={cn("text-green-600 text-sm mt-1", className)}>
    {children}
  </div>
);

// Tooltip component
export const Tooltip = ({ 
  children, 
  className, 
  content 
}: InteractiveProps & { content: string }) => (
  <span className={cn("relative group cursor-help", className)}>
    {children}
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {content}
    </div>
  </span>
);

// Help text component
export const HelpText = ({ children, className }: InteractiveProps) => (
  <div className={cn("text-gray-500 text-xs mt-1", className)}>
    {children}
  </div>
);

// Code inline component
export const InlineCode = ({ children, className }: InteractiveProps) => (
  <code className={cn("bg-gray-100 text-gray-900 px-1 py-0.5 rounded text-sm font-mono", className)}>
    {children}
  </code>
);

// Keyboard shortcut component
export const Kbd = ({ children, className }: InteractiveProps) => (
  <kbd className={cn("bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-xs font-mono text-gray-700", className)}>
    {children}
  </kbd>
);