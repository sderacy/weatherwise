import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('calls onInput function with the input value on search button click', () => {
    // Mock the onInput function
    const mockOnInput = jest.fn()

    // Render the SearchBar component
    const { getByTestId } = render(<SearchBar onInput={mockOnInput} />)

    // Get the input field and search button by their test ids
    const inputField = getByTestId('searchField')
    const searchButton = getByTestId('searchBtn')

    // Simulate typing in the input field
    fireEvent.change(inputField, { target: { value: 'New York' } })

    // Simulate clicking the search button
    fireEvent.click(searchButton)

    // Assert that the onInput function was called with the correct value
    expect(mockOnInput).toHaveBeenCalledWith('New York')
  })

  it('calls onInput function with the input value on pressing Enter', () => {
    // Mock the onInput function
    const mockOnInput = jest.fn()

    // Render the SearchBar component
    const { getByTestId } = render(<SearchBar onInput={mockOnInput} />)

    // Get the input field by its test id
    const inputField = getByTestId('searchField')

    // Simulate typing in the input field
    fireEvent.change(inputField, { target: { value: 'Chicago' } })

    // Simulate pressing Enter key
    fireEvent.keyUp(inputField, { key: 'Enter' })

    // Assert that the onInput function was called with the correct value
    expect(mockOnInput).toHaveBeenCalledWith('Chicago')
  })
})
