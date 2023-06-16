import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../Components/Header/Header.js'

describe('Header', () => {
  it('renders header correctly and handles search input', () => {
    // Create a mock function for the onSearchInput callback
    const onSearchInput = jest.fn()

    // Render the Header component
    const { getByPlaceholderText } = render(
      <Header onSearchInput={onSearchInput} />
    )

    // Simulate a user typing in the search input
    const searchInput = 'New York'
    const inputElement = getByPlaceholderText('City (e.g. Ewing)')

    fireEvent.change(inputElement, { target: { value: searchInput } })

    expect(inputElement.value).toBe(searchInput)
  })
})
