import React from 'react'
import Link from 'next/link';

export const HomePage = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Link href="/">
            Your Logo
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-menu-item">
              <Link href="#section1">
                Section 1
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link href="#section2">
                Section 2
              </Link>
            </li>
            <li className="navbar-menu-item">
              <Link href="#section3">
                Section 3
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="section1">
          <h1>Section 1</h1>
          {/* Content for Section 1 */}
        </section>
        <section id="section2">
          <h1>Section 2</h1>
          {/* Content for Section 2 */}
        </section>
        <section id="section3">
          <h1>Section 3</h1>
          {/* Content for Section 3 */}
        </section>
      </main>
    </div>
  )
}
