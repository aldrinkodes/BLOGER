import React from 'react'
import "./Section.css"
function Section() {
  return (
    <div className="section-container">
    <div className="section-header">
        <h2 className="s-h2">Count:<span className="c-value">100</span></h2>
    </div>
    <div className="section-timeline"></div>
    <div className='section-flex-box'>
        <div className='box-1'>
            <div className='box-1-content'></div>
        </div>
    </div>
</div>
  )
}

export default Section;