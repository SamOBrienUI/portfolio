"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import classes from "./styles.module.css";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`${classes.nav} ${scrolled ? classes.scrolled : ""}`}>
      <div className={classes.navContent}>
        <Link href="/" className={classes.logoLink}>
          <span className={classes.logo}>SamOB</span>
        </Link>

        <ul className={classes.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        <div className={classes.navActions}>
          <Link href="/blog" className={classes.ctaButton}>
            Read Blog
          </Link>
          <Link
            href="/about"
            className={`${classes.ctaButton} ${classes.aboutButton}`}
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
