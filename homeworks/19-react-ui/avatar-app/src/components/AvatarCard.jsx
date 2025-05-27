

const AvatarCard = ({avatarUrl, onRefresh}) => {
  return (
    <article className='card'>
      <img className='card__image' src={avatarUrl} alt="Avatar" />
      
      <button className='card__button' onClick={onRefresh}>
        <img className='card__button-icon' src="./src/assets/icons/refresh.svg" alt="Refresh" />
      </button>
    </article>
  )
}

export default AvatarCard;
