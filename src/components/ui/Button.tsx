"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const baseClasses =
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-button)] font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none";

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-[var(--primary)]",
    "text-[var(--text-inverse)]",
    "shadow-sm",
    "hover:bg-[var(--primary-hover)]",
    "active:bg-[var(--primary-active)]"
  ),

  secondary: cn(
    "bg-[var(--secondary)]",
    "text-[var(--text-primary)]",
    "border border-[var(--border)]",
    "hover:bg-[var(--secondary-hover)]"
  ),

  outline: cn(
    "bg-transparent",
    "border border-[var(--border)]",
    "text-[var(--text-primary)]",
    "hover:bg-[var(--surface-muted)]"
  ),

  ghost: cn(
    "bg-transparent",
    "text-[var(--text-secondary)]",
    "hover:bg-[var(--surface-muted)]"
  ),

  destructive: cn(
    "bg-[var(--danger)]",
    "text-white",
    "hover:brightness-95"
  ),

  link: cn(
    "bg-transparent",
    "text-[var(--primary)]",
    "underline-offset-4",
    "hover:underline",
    "shadow-none",
    "p-0",
    "h-auto"
  ),
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm gap-2",
  md: "h-11 px-5 text-sm gap-2.5",
  lg: "h-12 px-6 text-base gap-3",
  icon: "h-11 w-11 p-0",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      className,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const content = (
      <>
        {loading ? (
          <Loader2
            className="h-4 w-4 animate-spin shrink-0"
            strokeWidth={2}
          />
        ) : (
          leftIcon && (
            <span className="flex shrink-0 items-center">
              {leftIcon}
            </span>
          )
        )}

        {size !== "icon" && (
          <span className="truncate">
            {children}
          </span>
        )}

        {!loading && rightIcon && size !== "icon" && (
          <span className="flex shrink-0 items-center">
            {rightIcon}
          </span>
        )}

        {size === "icon" && !loading && children}
      </>
    );

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -1 }}
        transition={{
          duration: 0.15,
        }}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";