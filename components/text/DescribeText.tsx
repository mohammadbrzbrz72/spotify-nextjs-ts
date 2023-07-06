import React from "react";
import clsx from "clsx";

interface IDescribeText {
  title: string;
  context?: string;
  classes?: {
    root?: string;
    title?: string;
    context?: string;
  };
}

const styles = {
  main: `
    w-full
    flex items-center gap-4
    text-gray-400
  `,
  title: `
    text-sm font-medium
  `,
  context: `
    text-xs font-light
  `,
};

export function DescribeText({ classes, title, context }: IDescribeText) {
  return (
    <div className={clsx(styles.main, classes?.root)}>
      <h6 className={clsx(styles.title, classes?.title)}>{title}</h6>
      <span className={clsx(styles.context, classes?.context)}>{context}</span>
    </div>
  );
}
