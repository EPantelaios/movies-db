import { FaHeart } from 'react-icons/fa';

function FavoriteIcon({ isFavorite, size }) {
  return <FaHeart size={size || 40} color={isFavorite ? 'red' : 'white'} />;
}

export default FavoriteIcon;
