import HomeClient from '@/components/HomeClient';

export default async function HomePage() {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,region', {
    next: { revalidate: 60 }, // opcional: ISR cada 60s
  });

  const countries = await res.json();
  const regions = [...new Set(countries.map((c: any) => c.region))].filter(Boolean);

  return <HomeClient countries={countries} regions={regions} />;
}
