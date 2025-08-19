import React from "react";
import { cn } from "@/lib/utils";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

// Unordered/bulleted list
export const BulletedList = ({ children, className }: ListProps) => (
  <ul className={cn("space-y-2 text-gray-600", className)}>
    {children}
  </ul>
);

// Ordered/numbered list
export const NumberedList = ({ children, className }: ListProps) => (
  <ol className={cn("space-y-2 text-gray-600 list-decimal list-inside", className)}>
    {children}
  </ol>
);

// List item with bullet point
export const ListItem = ({ children, className }: ListItemProps) => (
  <li className={cn("flex items-start", className)}>
    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
    <span className="text-gray-600">{children}</span>
  </li>
);

// Numbered list item
export const NumberedListItem = ({ children, className }: ListItemProps) => (
  <li className={cn("text-gray-600", className)}>
    {children}
  </li>
);

// Checklist item
export const ChecklistItem = ({ children, className, checked = false }: ListItemProps & { checked?: boolean }) => (
  <li className={cn("flex items-start", className)}>
    <span className={cn(
      "w-4 h-4 rounded-sm border-2 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center",
      checked ? "bg-green-500 border-green-500" : "border-gray-300"
    )}>
      {checked && (
        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
    </span>
    <span className={cn("text-gray-600", checked && "line-through text-gray-400")}>
      {children}
    </span>
  </li>
);

// Definition list
export const DefinitionList = ({ children, className }: ListProps) => (
  <dl className={cn("space-y-4", className)}>
    {children}
  </dl>
);

export const DefinitionTerm = ({ children, className }: ListItemProps) => (
  <dt className={cn("font-medium text-gray-900", className)}>
    {children}
  </dt>
);

export const DefinitionDescription = ({ children, className }: ListItemProps) => (
  <dd className={cn("text-gray-600 ml-0", className)}>
    {children}
  </dd>
);