import React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

type Props = {
  title: string;
  titleAccent?: string;
  text?: string;
  ctaLabel?: string;
  ctaTarget?: string;
};

const Header = ({ title, titleAccent, text, ctaLabel, ctaTarget }: Props) => {
  return (
    <header className="hero">
      <div className="toggle-container">
        <ThemeToggle />
      </div>

      <h1 className="hero__title">
        {title}
        {titleAccent && <span className="hero__title--accent"> {titleAccent}</span>}
      </h1>

      {text && <p className="hero__text">{text}</p>}

      {ctaLabel && ctaTarget && (
        <Link className="hero__cta" href={ctaTarget}>
          {ctaLabel}
        </Link>
      )}
    </header>
  );
};

export default Header;
