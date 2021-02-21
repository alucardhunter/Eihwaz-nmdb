import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './index'

it('rendes menu', async () => {
  render(<Header />)
  const element = screen.getByText('Movies')
  expect(element).toBeInTheDocument()
})
