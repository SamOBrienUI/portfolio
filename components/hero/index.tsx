import Link from "next/link";
import classes from "./styles.module.css";

export function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.backgroundAnimation}>
        <div className={classes.gradientOrb} />
        <div
          className={classes.gradientOrb}
          style={{ animationDelay: "-5s", right: "15%", top: "60%" }}
        />
        <div
          className={classes.gradientOrb}
          style={{ animationDelay: "-10s", right: "60%", top: "05%" }}
        />
        <div
          className={classes.gradientOrb}
          style={{ animationDelay: "-12s", right: "35%", top: "10%" }}
        />
        <div
          className={classes.gradientOrb}
          style={{ animationDelay: "-20s", right: "10%", top: "50%" }}
        />
        <div
          className={classes.gradientOrb}
          style={{ animationDelay: "-15s", right: "0%", top: "0%" }}
        />
      </div>
      <div className={classes.heroContent}>
        <div className={classes.heroText}>
          <h1>Sam O'Brien</h1>
          <p className={classes.heroTagline}>
            Front-End Engineer Specializing in Scalable, Performant, and
            Interactive React & TypeScript Applications
          </p>
          <div className={classes.ctaContainer}>
            <Link href="/blog" className={classes.heroCta}>
              Read My Blog
            </Link>
            <Link href="/#recent-posts" className={classes.heroSecondary}>
              View Recent Posts
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.heroOverlay} />
    </div>
  );
}
