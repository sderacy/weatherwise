import React from 'react'
import { render } from '@testing-library/react'
import Title from '../Components/Title/Title.js'

describe('Title', () => {
  it('renders the title correctly', () => {
    // Render the Title component
    const { getByTestId } = render(<Title />)

    // Get the title element by its test id
    const titleElement = getByTestId('title')

    // Assert that the title text is correct
    expect(titleElement.textContent).toBe('Weather Wise')
  })
})
