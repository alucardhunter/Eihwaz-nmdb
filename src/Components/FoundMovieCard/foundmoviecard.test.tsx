import { render, screen } from '@testing-library/react'
import FoundMovieCard from './index'
import WrapComponent from '../../Utils/Test Utils'
import Collection from '../../Tests/__mocked__'

it('Should render found movie card', () => {
  render(WrapComponent(FoundMovieCard, { data: Collection.Movie }))
  const element = screen.getByText(/Wonder Woman 1984/)
  expect(element).toBeInTheDocument()
})
