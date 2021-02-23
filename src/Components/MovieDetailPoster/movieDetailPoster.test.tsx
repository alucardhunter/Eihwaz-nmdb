import { render, screen } from '@testing-library/react'
import MovieDetailPoster from './index'
import WrapComponent from '../../Utils/Test Utils'
import Collection from '../../Tests/__mocked__'

it('Should render movie detail poster', () => {
  render(WrapComponent(MovieDetailPoster, { data: Collection.MovieDetail }))
  const element = screen.getAllByText(/Wonder Woman 1984/)
  expect(element[0]).toBeInTheDocument()
})
