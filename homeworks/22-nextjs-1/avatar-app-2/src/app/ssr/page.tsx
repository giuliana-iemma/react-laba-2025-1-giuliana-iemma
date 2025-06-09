import AvatarGrid from '@/components/AvatarGrid';

type Tile = {
  id: number;
  url: string;
};

export default async function SSGPage() {
  const res = await fetch('https://tinyfac.es/api/data?limit=50&quality=0', { cache: 'no-store' });

  const data = await res.json();

  // console.log(data);

  const initialAvatars: Tile[] = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const avatar = data[randomIndex];

    initialAvatars.push({
      id: Date.now() + Math.random(),
      url: avatar.url,
    });
  }

  // console.log(initialAvatars)

  return (
    <section>
      <h1 className="app-title">Avatar App</h1>
      <AvatarGrid initialTiles={initialAvatars} />
    </section>
  );
}
