import React from 'react'

function SearchBar () {
  return (
    <div className="searchbar-container">
      <div className='wrap'>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Where are you going?"></input>
          <button type="submit" className="searchButton">
            <i className="fa fa-search"><img src='images/MagnifyingGlass.png'></img></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
