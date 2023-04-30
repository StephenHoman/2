import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ApparelCard from '../ApparelCard.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
expect.extend({ toBeInTheDocument });
 
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('ApparelCard', () => {
  const mockDispatch = jest.fn();
  const mockApparel = {
    id: 1,
    name: 'T-Shirt',
    price: 19.99,
    description: 'This is a test T-Shirt',
    sizes: ['S', 'M', 'L'],
    colors: ['red', 'blue', 'green'],
    image_url: 'https://example.com/Photos/clothes.jpg'
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the apparel details', () => {
    const { getByText, getByAltText } = render(<ApparelCard apparel={mockApparel} />);

    expect(getByText(mockApparel.name)).toBeInTheDocument();
    expect(getByText(mockApparel.description)).toBeInTheDocument();
    expect(getByText(/\$\d+\.\d+/)).toBeInTheDocument();
    expect(getByText(`${mockApparel.colors.join(', ')}`)).toBeInTheDocument();
    expect(getByText(mockApparel.name)).toBeInTheDocument();
 });
 
  it('should dispatch an addToCart action when Add to Cart button is clicked', () => {
    const { getByText } = render(<ApparelCard apparel={mockApparel} />);
    const addToCartButton = getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart({
      id: mockApparel.id,
      name: mockApparel.name,
      description: mockApparel.description,
      price: mockApparel.price,
    }));
  });
});