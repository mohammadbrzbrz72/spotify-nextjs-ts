"use client";

import React from "react";
import clsx from "clsx";
import PuffLoader from "react-spinners/PuffLoader";

interface IProps {
  className?: string;
  loading: boolean;
  children: React.ReactNode;
  color?: string;
  size?: number;
}

const styles = {
  main: `
    relative w-full
  `,
  spinnerBox: `
    flex justify-center items-center
    w-full h-full
    absolute top-0 left-0
    z-50 bg-[rgba(0,0,0,0.02)]
  `,
  loading: `
    opacity-30
  `,
};

export function PuffLoaderSpinner({
  size = 100,
  color = "#06f",
  loading,
  children,
  className,
}: IProps) {
  return (
    <div className={clsx(styles.main, className, loading && styles.loading)}>
      <div className={clsx(styles.spinnerBox, !loading && "hidden")}>
        <PuffLoader
          size={size}
          color={color}
          loading={loading}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      {children}
    </div>
  );
}
