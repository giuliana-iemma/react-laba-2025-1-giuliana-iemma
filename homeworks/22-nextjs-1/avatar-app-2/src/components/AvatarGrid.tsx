'use client';

import { useState } from 'react';
import AddAvatarButton from './AddAvatarButton';
import AvatarCard from './AvatarCard';
import RefreshAllButton from './RefreshAllButton';

type Tile = {
  id: number;
  url: string;
};

//Initial avatars
type AvatarGridProps = {
  initialTiles?: Tile[];
};

const AvatarGrid = ({ initialTiles = [] }: AvatarGridProps) => {
  const [tiles, setTiles] = useState<Tile[]>(initialTiles);

  async function getRandomAvatarUrl() {
    const res = await fetch('https://tinyfac.es/api/data?limit=50&quality=0');
    console.log(res);

    const data = await res.json();
    const random = Math.floor(Math.random() * data.length);

    return data[random].url;
  }

  //Adding a new object
  async function handleAddTile() {
    const avatar = await getRandomAvatarUrl();

    setTiles((prev) => [...prev, { id: Date.now(), url: avatar }]);

    // console.log(tiles);
  }

  //Refreshing a targetted avatar
  async function handleRefreshCard(id: number) {
    const avatar = await getRandomAvatarUrl();

    setTiles((prev) => prev.map((tile) => (tile.id === id ? { ...tile, url: avatar } : tile)));

    // console.log(tiles)
  }

  ///Refresh all
  async function handleRefreshAll() {
    const avatars = await Promise.all(tiles.map(() => getRandomAvatarUrl())); //Wait for all the tiles to load to create the array of random avatar urls

    setTiles((prev) =>
      prev.map((tile, index) => ({
        ...tile,
        url: avatars[index],
      }))
    );
  }

  return (
    <>
      <div className="card__container">
        {tiles &&
          tiles.map((tile) => (
            <AvatarCard
              avatarUrl={tile.url}
              key={tile.id}
              onRefresh={() => handleRefreshCard(tile.id)}
            />
          ))}

        <AddAvatarButton onClick={() => handleAddTile()} />
      </div>

      <RefreshAllButton onClick={() => handleRefreshAll()} />
    </>
  );
};

export default AvatarGrid;
