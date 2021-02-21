import React from 'react'
import './styles.css'
import { AppBar, Toolbar, Button, useScrollTrigger, Slide, IconButton, SwipeableDrawer } from '@material-ui/core'
import Logo from '../../../Assets/Images/Eihwaz2.png'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppDispatch } from '../../../Store/store'
import { RootState } from '../../../Store/rootReducer'
import { toogleDrawer } from '../../../Store/Modules/User/userSlice'

interface HideOnScrollProps {
  children?: any
}

const HideOnScroll = (props: HideOnScrollProps) => {
  const { children } = props

  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header: React.FC = () => {
  const history = useHistory()
  const dispatch = AppDispatch.dispatch
  const { menuDrawer } = useSelector((state: RootState) => state.User)

  const handleMovieButton = () => {
    history.push('/')
  }

  const handleMenuButton = () => {
    dispatch(toogleDrawer())
  }

  return (
    <div>
      <HideOnScroll>
        <AppBar className="Header">
          <Toolbar className="Toolbar_Header">
            <div className="Logo_Container">
              <IconButton onClick={() => handleMenuButton()} className="Menu_Button" edge="start" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <img className="Logo_Header" src={Logo} alt="Eihwaz Logo" />
            </div>
            <div className="Menu_Items_Container" >
              <Button className="Menu_Titles" onClick={() => handleMovieButton()}>Movies</Button>
              <Button className="Menu_Titles">Tv Shows</Button>
              <Button className="Menu_Titles">People</Button>
            </div>
            <div className="Profile_Container">
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <SwipeableDrawer className="Drawer" onClose={() => { dispatch(toogleDrawer()) }} onOpen={() => { }} open={menuDrawer}>
        <div style={{ height: '100vh', width: '50vw', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ height: 50, width: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <Button className="Menu_Titles"
              onClick={() => {
                handleMovieButton()
                dispatch(toogleDrawer())
              }}>Movies
              </Button>
          </div>
          <div style={{ height: 50, width: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <Button className="Menu_Titles"
              onClick={() => {
                handleMovieButton()
                dispatch(toogleDrawer())
              }}>Tv Shows</Button>
          </div>
          <div style={{ height: 50, width: '100%', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <Button className="Menu_Titles"
              onClick={() => {
                handleMovieButton()
                dispatch(toogleDrawer())
              }}>People</Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default React.memo(Header)
