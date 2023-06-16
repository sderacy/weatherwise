import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders header correctly and handles search input', () => {
    // Create a mock function for the onSearchInput callback
    const onSearchInput = jest.fn()

    // Render the Header component
    const { getByPlaceholderText } = render(
      <Header onSearchInput={onSearchInput} />
    )

    // Assert that the Title component is rendered
    expect(getByPlaceholderText('City (e.g. Ewing)')).toBeInTheDocument()

    // Simulate user input in the SearchBar component
    const searchInput = 'New York'
    fireEvent.change(getByPlaceholderText('City (e.g. Ewing)'), {
      target: { value: searchInput },
    })

    // Assert that the onSearchInput callback is called with the correct input
    expect(onSearchInput).toHaveBeenCalledWith(searchInput)
  })
})
