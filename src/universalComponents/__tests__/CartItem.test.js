import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import CartItem from '../CartItem';
import { removeFromCart } from '../cartSlice';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
expect.extend({ toBeInTheDocument });

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('CartItem', () => {
  const mockItem = {
    id: 1,
    name: 'Test Item',
    description: 'This is a test item',
    price: 9.99,
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders the item details and remove button', () => {
    const { getByText } = render(<CartItem item={mockItem} />);
    expect(getByText(mockItem.name)).toBeInTheDocument();
    expect(getByText(mockItem.description)).toBeInTheDocument();
    expect(getByText(`$${mockItem.price}`)).toBeInTheDocument();
    expect(getByText('Remove from Cart')).toBeInTheDocument();
  });

  it('dispatches removeFromCart action when remove button is clicked', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    const { getByText } = render(<CartItem item={mockItem} />);
    const removeButton = getByText('Remove from Cart');
    fireEvent.click(removeButton);
    expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(mockItem));
  });
});
