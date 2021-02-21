import { render, screen } from '@testing-library/react'
import Banner from './index'
import WrapComponent from '../../Utils/Test Utils'

it('Test banner render', () => {
  render(WrapComponent(Banner))
  const element = screen.getByText(/Welcome/)
  expect(element).toBeInTheDocument()
})
