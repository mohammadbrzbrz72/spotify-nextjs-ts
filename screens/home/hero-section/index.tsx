import React from "react";
import { HiOutlineArrowLongDown } from "react-icons/hi2";

import HomeLink from "./HomeIcon.csc";

const styles = {
  main: `
    bg-gradient-to-b from-pink-100 to-pink-200
    px-5 md:px-10 pb-20
  `,
  nav: `
    flex justify-between
  `,
  img: `
    m-auto
    w-auto md:w-[800px]
  `,
  text: `
    text-white txt-w300-s12
    mt-10 md:mt-15
    select-none
  `,
  arrowIcon: `
    text-white text-3xl
    m-auto
  `,
};

export default function HeroSection() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <HomeLink />
        <span className={styles.text + " w-in"}>Powered by Spotify</span>
      </nav>
      <img className={styles.img} src="/hero-img@2x.png" alt="music" />
      <HiOutlineArrowLongDown className={styles.arrowIcon} />
    </div>
  );
}
