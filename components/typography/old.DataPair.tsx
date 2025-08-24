import React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Metadata";

interface DataPairProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  layout?: "vertical" | "horizontal";
}

// DataPair component for label-value pairs with consistent styling
export const DataPair = ({
  label,
  children,
  className,
  layout = "vertical",
}: DataPairProps) => {
  const isVertical = layout === "vertical";

  return (
    <div
      className={cn(
        "space-y-2",
        isVertical
          ? "flex flex-col"
          : "flex flex-row items-baseline justify-between",
        className,
      )}
    >
      <Eyebrow className={!isVertical ? "mr-4" : ""}>{label}</Eyebrow>
      <div className="text-primary-foreground">{children}</div>
    </div>
  );
};

// Convenience component for horizontal layout
export const DataPairHorizontal = ({
  label,
  children,
  className,
}: Omit<DataPairProps, "layout">) => (
  <DataPair label={label} layout="horizontal" className={className}>
    {children}
  </DataPair>
);

// Convenience component for grid layouts (common in metadata sections)
export const DataGrid = ({
  children,
  className,
  columns = 2,
}: {
  children: React.ReactNode;
  className?: string;
  columns?: number;
}) => (
  <div
    className={cn(
      `grid gap-8`,
      columns === 2 && "grid-cols-1 md:grid-cols-2",
      columns === 3 && "grid-cols-1 md:grid-cols-3",
      columns === 4 && "grid-cols-2 md:grid-cols-4",
      className,
    )}
  >
    {children}
  </div>
);
