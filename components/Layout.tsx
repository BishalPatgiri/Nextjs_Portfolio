import React, { ReactNode } from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.header}>
        <nav>
          {/* Navigation links */}
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
