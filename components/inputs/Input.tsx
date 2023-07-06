"use client";

import React from "react";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";

interface IInput {
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder: string;
  disabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const styles = {
  input: `
    reset-style
    pl-3
  `,
};

export function Input({
  type,
  className,
  placeholder,
  disabled,
  onChange,
}: IInput) {
  return (
    <input
      type={type}
      className={clsx(styles.input, className)}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
