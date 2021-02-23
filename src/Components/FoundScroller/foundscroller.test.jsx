import { render, screen } from '@testing-library/react'
import FoundScroller from './index'
import WrapComponent from '../../Utils/Test Utils'
import Collection from '../../Tests/__mocked__'

it('Should render found scroller', () => {
  render(WrapComponent(FoundScroller, { data: Collection.MovieArray }))
  const element = screen.getByText(/Wonder Woman 1984/)
  expect(element).toBeInTheDocument()
})