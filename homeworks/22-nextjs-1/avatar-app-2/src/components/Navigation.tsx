import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation__item">
          <Link className="navigation__link" href="/">
            CSR
          </Link>
        </li>

        <li className="navigation__item">
          <Link className="navigation__link" href="/ssg">
            SSG
          </Link>
        </li>

        <li className="navigation__item">
          <Link className="navigation__link" href="/ssr">
            SSR
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
