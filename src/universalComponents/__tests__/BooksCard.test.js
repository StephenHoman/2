import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BooksCard from '../BooksCard';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';
expect.extend({ toBeInTheDocument });

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('BooksCard', () => {
  const mockDispatch = jest.fn();
  const mockTextbook = {
    id: 1,
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    price: 9.99,
    edition: '30th Anniversary Edition',
    publisher: 'Del Rey',
    format: 'Paperback',
    isbn: '978-0345453747',
    categories: ['Science Fiction', 'Comedy']
  };

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the textbook details', () => {
    const { getByText } = render(<BooksCard textbook={mockTextbook} />);

    expect(getByText(mockTextbook.title)).toBeInTheDocument();
    expect(getByText(mockTextbook.author)).toBeInTheDocument();
    expect(getByText(`Price: $${mockTextbook.price}`)).toBeInTheDocument();
    expect(getByText(`Edition: ${mockTextbook.edition}`)).toBeInTheDocument();
    expect(getByText(`Publisher: ${mockTextbook.publisher}`)).toBeInTheDocument();
    expect(getByText(`ISBN: ${mockTextbook.isbn}`)).toBeInTheDocument();
    expect(getByText(`Format: ${mockTextbook.format}`)).toBeInTheDocument();
    expect(getByText('Categories:')).toBeInTheDocument();
    mockTextbook.categories.forEach((category) => {
    expect(getByText(category, { selector: 'span.badge.bg-secondary.mx-1' })).toBeInTheDocument()});
        expect(getByText('Add to Cart')).toBeInTheDocument();
  });

  it('should dispatch an addToCart action when Add to Cart button is clicked', () => {
    const { getByText } = render(<BooksCard textbook={mockTextbook} />);
    const addToCartButton = getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockDispatch).toHaveBeenCalledWith(addToCart({
      id: mockTextbook.id,
      name: mockTextbook.title,
      description: mockTextbook.author,
      price: mockTextbook.price,
    }));
  });
});
