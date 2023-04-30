import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ComputerCard from '../ComputerCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
expect.extend({ toBeInTheDocument });

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('ComputerCard', () => {
  const mockDispatch = jest.fn();
  const mockComputer = {
    id: 1,
    name: 'Macbook Pro',
    description: 'This is a test Macbook Pro',
    price: 1499.99,
    specs: {
      Processor: '2.4GHz quad-core Intel Core i5',
      RAM: '8GB 2133MHz LPDDR3 memory',
      Storage: '256GB SSD storage',
      Display: '13.3-inch Retina display'
    },
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the computer details', () => {
    const { getByText } = render(<ComputerCard computer={mockComputer} />);

    expect(getByText(mockComputer.name)).toBeInTheDocument();
    expect(getByText(mockComputer.description)).toBeInTheDocument();
    expect(getByText(/\$\d+\.\d+/)).toBeInTheDocument();
    expect(getByText('Specifications:')).toBeInTheDocument();
    expect(getByText(`Processor: ${mockComputer.specs.Processor}`)).toBeInTheDocument();
    expect(getByText(`RAM: ${mockComputer.specs.RAM}`)).toBeInTheDocument();
    expect(getByText(`Storage: ${mockComputer.specs.Storage}`)).toBeInTheDocument();
    expect(getByText(`Display: ${mockComputer.specs.Display}`)).toBeInTheDocument();
     

  });

  it('should dispatch an addToCart action when Add to Cart button is clicked', () => {
    const { getByText } = render(<ComputerCard computer={mockComputer} />);
    const addToCartButton = getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart({
      id: mockComputer.id,
      name: mockComputer.name,
      description: mockComputer.description,
      price: mockComputer.price,
    }));
  });
});
