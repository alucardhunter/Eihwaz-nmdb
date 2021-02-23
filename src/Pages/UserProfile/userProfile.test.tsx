import { render, screen } from '@testing-library/react'
import UserProfile from './index'
import WrapComponent from '../../Utils/Test Utils'

it('Should render Search', () => {
  render(WrapComponent(UserProfile))
  const element = screen.getByText(/User Profile/)
  expect(element).toBeInTheDocument()
})
