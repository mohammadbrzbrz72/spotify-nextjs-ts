import React from "react";

//! I don't need header yet
import Header from "./Header";
import Footer from "./Footer";

const styles = {
  main: "min-h-screen w-full overflow-x-hidden",
  wrapper: "w-full",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </div>
  );
}
