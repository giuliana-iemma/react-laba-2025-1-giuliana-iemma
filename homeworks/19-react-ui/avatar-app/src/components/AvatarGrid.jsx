import { useState } from 'react';
import AddTileButton from './AddTileButton';
import AvatarCard from './AvatarCard';
import RefreshAllButton from './RefreshAllButton'

const AvatarGrid = () => {
  //Posible avatars
  const avatars = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

  //Will represent avatars in an array of objects {id: , url: }
  const [tiles, setTiles] = useState([]);

  //Get a Random avatar
  function getRandomAvatar() {
    const index = Math.floor(Math.random() * avatars.length);
    return avatars[index];
  }

  //Adding a new object
  function handleAddTile() {
    setTiles((prev) => [
      ...prev,
      { id: Date.now(), url: `./src/assets/images/${getRandomAvatar()}` },
    ]);

    // console.log(tiles);
  }

  //Refreshing a targetted avatar
  function handleRefreshCard(id) {
    setTiles((prev) =>
      prev.map((tile) =>
        tile.id === id ? { ...tile, url: `./src/assets/images/${getRandomAvatar()}` } : tile
      )
    );

    // console.log(tiles)
  }

  ///Refresh all
  function handleRefreshAll () {
    setTiles(prev => 
      prev.map(tile => ({
        ...tile, 
        url: `./src/assets/images/${getRandomAvatar()}`
      }))
    )
      
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

        <AddTileButton onClick={() => handleAddTile()} />
      </div>

      <RefreshAllButton onClick={() => handleRefreshAll()}/>
    </>
    
  );
};

export default AvatarGrid;
