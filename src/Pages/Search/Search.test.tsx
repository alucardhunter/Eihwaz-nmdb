import { render, screen } from '@testing-library/react'
import Search from './index'
import WrapComponent from '../../Utils/Test Utils'

it('Should render Search', () => {
  render(WrapComponent(Search))
  const element = screen.getByText(/There's no movies that match the query!/)
  expect(element).toBeInTheDocument()
})
