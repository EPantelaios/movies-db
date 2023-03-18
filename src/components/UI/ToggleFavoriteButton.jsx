import { useContext, useState } from 'react';

import { IconButton, useToast } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import FavoriteIcon from '../../assets/FavoriteIcon';
import FavoritesContext from '../../store/favorites/FavoritesContext';

const ToggleFavoriteButton = ({ movie }) => {
  const { favorites, handleAddFavorite, handleRemoveFavorite } =
    useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((m) => m.imdbID === movie.imdbID)
  );
  const toast = useToast({
    position: 'bottom-right',
    duration: 2000,
    isClosable: true,
  });

  const handleToggleFavorite = (event) => {
    event.stopPropagation();
    if (favorites.some((m) => m?.imdbID === movie.imdbID)) {
      if (movie.imdbID) {
        handleRemoveFavorite(movie.imdbID);
        setIsFavorite(false);
        toast({
          title: `${movie.Title} removed from favorites`,
          status: 'success',
        });
      } else {
        toast({
          title: `Cannot remove this movie from favorites`,
          status: 'error',
        });
      }
    } else {
      handleAddFavorite(movie);
      setIsFavorite(true);
      toast({
        title: `${movie.Title} added to favorites`,
        status: 'success',
      });
    }
  };

  return (
    <IconButton
      aria-label="Toggle to favorites"
      title={`${isFavorite ? 'Remove from favorites' : 'Add to favorites'}`}
      icon={
        <motion.div
          animate={{ scale: isFavorite ? 1.3 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <FavoriteIcon isFavorite={isFavorite} />
        </motion.div>
      }
      variant={`${isFavorite ? 'none' : 'ghost'}`}
      size="lg"
      onClick={(e) => handleToggleFavorite(e)}
    />
  );
};

export default ToggleFavoriteButton;
