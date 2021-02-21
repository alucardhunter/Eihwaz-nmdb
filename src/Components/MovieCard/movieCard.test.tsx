import { render, screen } from '@testing-library/react'
import wrapComponent from '../../Utils/Test Utils'
import MovieCard from './index'

it('Test render movie card', () => {
  render(wrapComponent(MovieCard))
  const element = screen.getByRole('img')
  expect(element).toBeInTheDocument()
})
