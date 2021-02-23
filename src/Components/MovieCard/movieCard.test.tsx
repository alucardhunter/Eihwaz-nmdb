import { render, screen } from '@testing-library/react'
import wrapComponent from '../../Utils/Test Utils'
import MovieCard from './index'
import Collection from '../../Tests/__mocked__'

it('Test render movie card', async () => {
  render(wrapComponent(MovieCard, { data: Collection.Movie }))
  const element = screen.getByRole('img')
  const movietitle = screen.getByText(/Wonder Woman/)
  expect(element).toBeInTheDocument()
  expect(movietitle).toBeInTheDocument()
})
