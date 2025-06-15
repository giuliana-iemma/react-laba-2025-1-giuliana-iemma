import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Custom404() {
  return (
    <>
      <Header
        title="404 - Country not found"
        text="Oops! The country you`re looking for doesn’t seem to exist."
        ctaTarget="/"
        ctaLabel="Back to Home"
      />
    </>
  );
}
