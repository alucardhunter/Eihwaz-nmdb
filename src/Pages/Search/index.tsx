import React, { useEffect, useState } from 'react'
import './styles.css'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/rootReducer'
import Pagination from '@material-ui/lab/Pagination'
import { useLocation, useHistory } from 'react-router-dom'
import { AppDispatch } from '../../Store/store'
import { searchMovies } from '../../Store/Modules/Movies/moviesThunk'
import FoundScroller from '../../Components/FoundScroller'
import Banner from '../../Components/Banner'

const Search: React.FC = () => {
  const history = useHistory()
  const dispatch = AppDispatch.dispatch
  const { foundedMovies, status } = useSelector((state: RootState) => state.Movies)
  const query = new URLSearchParams(useLocation().search)
  const filter = query.get('query') || undefined
  const filterPage = query.get('page')
  const [page, setPage] = useState(filterPage ? +filterPage : 0)

  useEffect(() => {
    dispatch(searchMovies({
      search: filter,
      page: filterPage ? +filterPage : undefined
    }))
    window.scrollTo(0, 0)
  }, [dispatch, filter, page])

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
    history.push({
      pathname: '/search',
      search: `?page=${value}&query=${filter}`
    })
  }

  return (
    <Grid container className="Search_Page_Container" spacing={0}>
      <Banner />
      {status === 'loading'
        ? <div className="Loading_Holder">
          <CircularProgress />
        </div>
        : <FoundScroller data={foundedMovies?.results} />
      }
      <Pagination
        className="Pagination"
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
        count={foundedMovies?.total_pages}
      />
    </Grid>
  )
}

export default React.memo(Search)
