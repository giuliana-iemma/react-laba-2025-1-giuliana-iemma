import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  name: string;
  flags: string;
  region: string;
  isFavorite?: boolean;
  onToggleFavorite: (name: string) => void;
};

const CountryCard = ({ name, flags, region, isFavorite, onToggleFavorite }: Props) => {
  return (
    <article className="country" key={name}>
      <div className="like">
        <button className="like__button" onClick={() => onToggleFavorite(name)}>
          {isFavorite ? (
            <img className="like__icon" src="/icons/heart-filled.svg" alt="Favorite" />
          ) : (
            <img className="like__icon" src="/icons/heart-empty.svg" alt="Not Favorite" />
          )}
        </button>
      </div>

      <Link className="country__link" href={`/countries/${encodeURIComponent(name.toLowerCase())}`}>
        <div className="country__image-wrapper">
          <Image className="country__image" src={flags} alt={name} fill />
        </div>

        <span className="country__title">
          {name} - {region}
        </span>
      </Link>
    </article>
  );
};

export default CountryCard;
