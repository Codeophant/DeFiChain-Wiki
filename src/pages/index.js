import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.mapBackground} />

      <div className={clsx("container", styles.container)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate>Homepage.Subtitle</Translate>
        </p>
        <div className={styles.buttonHolder}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/welcome"
            >
              <Translate>Homepage.Button.Knowledgebase</Translate>
            </Link>
          </div>

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/0ptim/DeFiChain-Wiki"
            >
              <Translate>Homepage.Button.Contribute</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
