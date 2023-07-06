import React from "react";

const styles = {
  footer: `
    flex justify-center items-center
    bg-gray-300
    h-[70px]
  `,
  text: `
    text-white txt-w300-s12
  `,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        Designed by Geek Label - Powered by Spotify
      </span>
    </footer>
  );
}
