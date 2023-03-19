import { render, fireEvent } from '@testing-library/react';

import SortMenu from '../components/UI/SortMenu';

describe('SortMenu', () => {
  const options = ['Title', 'Year', 'Rating'];
  const onSelect = jest.fn();

  it('renders the sort menu with default value', () => {
    const { getByText } = render(
      <SortMenu options={options} onSelect={onSelect} />
    );
    expect(getByText('Sort By:')).toBeInTheDocument();
  });

  it('opens the menu when clicked', () => {
    const { getByText } = render(
      <SortMenu options={options} onSelect={onSelect} />
    );
    const menuButton = getByText(/Sort By:/i);
    fireEvent.click(menuButton);
    const menuList = getByText(options[0]);
    expect(menuList).toBeInTheDocument();
  });

  it('sets the selected option and calls onSelect function', () => {
    const { getByRole, getByText } = render(
      <SortMenu options={options} onSelect={onSelect} />
    );
    const menuButton = getByRole('button');
    fireEvent.click(menuButton);
    const option = getByText('Title');
    fireEvent.click(option);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith('Title');
    expect(menuButton).toHaveTextContent('Sort By: Title');
  });
});
