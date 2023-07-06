"use client";

import InternalLink, { LinkProps } from "next/link";
import clsx from "clsx";

type IProps = { className?: string; children: React.ReactNode } & LinkProps;

const styles = {
  main: "",
};

export function Link({ className, children, ...rest }: IProps) {
  return (
    <InternalLink className={clsx(styles.main, className)} {...rest}>
      {children}
    </InternalLink>
  );
}
