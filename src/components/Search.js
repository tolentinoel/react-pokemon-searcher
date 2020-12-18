import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" className="prompt" value={props.inputValue} onChange={props.filterPokemons}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
