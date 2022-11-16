import React from 'react'

function SiteCard() {

  return (
    <>

    <div className='site'>
        <div className='header'>
            <button>Site name</button>
        </div>

        <div className='log'>
            <button id="btn"> sync site </button>
            <button id="btn"> mrp site </button>
            <button id="btn"> asn site </button>
        </div>
    </div>

    </>
  )
}

export default SiteCard