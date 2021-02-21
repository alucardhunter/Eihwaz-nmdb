import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Welcome = React.lazy(() => import('../Pages/Welcome'))
const Movie = React.lazy(() => import('../Pages/Movie'))
const Search = React.lazy(() => import('../Pages/Search'))

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/movie/:movie" exact component={Movie} />
      <Route path="/search" exact component={Search} />
    </Switch>
  )
}

export default Routes
