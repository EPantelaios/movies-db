import { useState } from 'react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

function SortMenu({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <Menu>
      <MenuButton
        data-testid="sort-menu"
        as={Button}
        rightIcon={<ChevronDownIcon boxSize={5} />}
        backgroundColor="teal"
        color="white"
        borderRadius="8px"
        _hover={{ backgroundColor: '#11acac', borderColor: '#11acac' }}
        _active={{ backgroundColor: '#11acac', borderColor: '#11acac' }}
      >
        Sort By: {selectedOption}
      </MenuButton>
      <MenuList minWidth="10rem">
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleSelectOption(option);
            }}
            backgroundColor={option === selectedOption && '#11acac'}
            _hover={{
              backgroundColor: option === selectedOption && '#0a7979',
            }}
          >
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortMenu;
