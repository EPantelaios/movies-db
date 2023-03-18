import { useEffect, useState } from 'react';

import { IconButton, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

export function ScrollButton({ id }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  function scrollToID() {
    const el = document.getElementById(id);
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  useEffect(() => {
    function isInViewport() {
      const el = document.getElementById(id);
      const rect = el?.getBoundingClientRect();
      if (!rect) return null;
      const isInView =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth);
      return setIsButtonVisible(!isInView);
    }

    window.addEventListener('scroll', isInViewport, { capture: true });
    return () => {
      window.removeEventListener('scroll', isInViewport, { capture: true });
    };
  }, [id]);

  return (
    <motion.div
      variants={{
        hidden: () => ({ x: 100, opacity: 0 }),
        visible: () => ({ x: 0, opacity: 1 }),
      }}
      transition={{ duration: 0.5 }}
      exit="hidden"
      initial="hidden"
      animate={isButtonVisible ? 'visible' : 'hidden'}
      style={{
        zIndex: 100,
        position: 'fixed',
        right: '1.5rem',
        bottom: '1.5rem',
      }}
    >
      <IconButton
        aria-label="scroll-button"
        icon={<IoIosArrowUp fontSize="1.7rem" />}
        bg="bg"
        size={buttonSize}
        shadow="lg"
        rounded="lg"
        color="gray"
        border="3px solid teal"
        _hover={{}}
        _active={{}}
        onClick={scrollToID}
      />
    </motion.div>
  );
}
