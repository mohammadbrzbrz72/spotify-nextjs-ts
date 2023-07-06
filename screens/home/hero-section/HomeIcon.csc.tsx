"use client";

import React from "react";

import { Link } from "@/components";

const styles = {
  link: `
    flex flex-col justify-center items-center
    mt-5 md:mt-6
  `,
  img: `
  `,
  text: `
    text-white txt-w300-s12
  `,
};

export default function HomeIcon() {
  return (
    <Link className={styles.link} href="/">
      <img src="/icons/gl-logo-small@2x.png" alt="home logo" />
      <span className={styles.text}>Geek Label</span>
    </Link>
  );
}
