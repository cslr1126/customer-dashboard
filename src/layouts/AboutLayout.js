import React from 'react'
import StickyNav from '../components/StickyNav';

const AboutLayout = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <StickyNav/>
        <div>
            <h3>This is the about section</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutLayout;