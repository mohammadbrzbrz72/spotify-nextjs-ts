"use client";

import React from "react";
import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";

interface IButton {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  loading: boolean;
}

const styles = {
  button: `
    flex justify-center items-center
    bg-pink-100 select-none 
    text-white
  `,
  loading: `
    opacity-50 cursor-default
  `,
};

export function SubmitButton({
  className,
  onClick,
  loading,
  children,
}: IButton) {
  return (
    <button
      className={clsx(styles.button, className, loading && styles.loading)}
      onClick={onClick}
      type="submit"
    >
      {loading ? <ImSpinner9 className="spinner select-none" /> : children}
    </button>
  );
}
