import React from 'react'
import './styles.css'

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="Footer_Container">
      <div className="Holder_Logo">
        <h1 className="Footer_Logo_Title">
          Eihwaz
      </h1>
        <h5 className="Footer_Logo_Subtitle">
          New Movie Database
      </h5>
      </div>
      <div className="Footer_Information_Container">
        <h3 className="Footer_Information">All right reserved to TMDB</h3>
        <h3 className="Footer_Information">Powered by: Eihwaz Web Solution</h3>
      </div>
    </div>
  )
}

export default React.memo(Footer)
