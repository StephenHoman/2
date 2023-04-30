import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SupplyCard from '../SupplyCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
expect.extend({ toBeInTheDocument });


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('SuppliesCard', () => {
  const mockDispatch = jest.fn();
  const mockSupplies = {
    id: 1,
    name: 'Pencil',
    description: 'This is a test pencil',
    price: 0.99,
    dimensions: {
      height: '5 inches',
      width: '0.2 inches',
      depth: '0.2 inches',
    },
    colors: ['Yellow', 'Black'],
    material: 'Wood',
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the supply details', () => {
    const { getByText } = render(<SupplyCard supply={mockSupplies} />);

    expect(getByText(mockSupplies.name)).toBeInTheDocument();
    expect(getByText(mockSupplies.description)).toBeInTheDocument();
    expect(getByText(/\$\d+\.\d+/)).toBeInTheDocument();
 
    expect(getByText(mockSupplies.material)).toBeInTheDocument();
  });

  it('should dispatch an addToCart action when Add to Cart button is clicked', () => {
    const { getByText } = render(<SupplyCard supply={mockSupplies} />);
    const addToCartButton = getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart({
      id: mockSupplies.id,
      name: mockSupplies.name,
      description: mockSupplies.description,
      price: mockSupplies.price,
    }));
  });
});
