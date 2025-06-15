import React from 'react';

type Props = {
  name: string;
  flags: string;
  capital: string[];
  region: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  // borders?: string[] //List of codes of borders
};

const CountryDetail = ({
  name,
  flags,
  region,
  population,
  languages,
  currencies,
  capital,
}: Props) => {
  return (
    <section className="detail">
      <img className="detail__image" src={flags} alt={`Flag of ${name}`} />

      <ul className="detail__information">
        <li className="detail__fact">
          Capital <span className="detail__data">{capital[0]}</span>{' '}
        </li>
        <li className="detail__fact">
          Region <span className="detail__data">{region}</span>{' '}
        </li>
        <li className="detail__fact">
          Population <span className="detail__data">{population.toLocaleString()}</span>{' '}
        </li>

        {languages && (
          <li className="detail__fact">
            Languages:
            <span className="detail__data">{Object.values(languages).join(', ')}</span>
          </li>
        )}

        {currencies && (
          <li className="detail__fact">
            Currencies:
            <span className="detail__data">
              {Object.values(currencies).map((currency) => `${currency.name} (${currency.symbol})`)}
            </span>
          </li>
        )}
      </ul>
    </section>
  );
};

export default CountryDetail;
