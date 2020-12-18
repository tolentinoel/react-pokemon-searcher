import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searched: []
  }


  componentDidMount(){
    const pokeUrl = "http://localhost:3000/pokemon"
    fetch(pokeUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemons: data,
        searched: data
      })
    })
  }

  filterPokemons= (e) => {
    let newPokes = this.thePokemons(e.target.value)
    this.setState({
      searched: newPokes
    })
  }

  thePokemons = (term) => {
    return this.state.pokemons.filter((pokeObj)=> {
      return pokeObj.name.includes(term)
    })
  }

  handleFormSubmit = (target) => {
    const pokeUrl = "http://localhost:3000/pokemon"
    const { name, hp, frontUrl, backUrl } = target

    let newPoke = {
      name: name.value,
      hp: hp.value,
      sprites: {
        front: frontUrl.value,
        back: backUrl.value
      }
    }

    fetch(pokeUrl, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(newPoke)
    })
    .then(response => response.json())
    .then(data => {
      this.setState((prevState) => {
        return {searched: [data, ...prevState.searched], pokemons: [data, ...prevState.pokemons]}
      })
    })
   target.reset()
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher </h1>
        <br />
        <PokemonForm handleFormSubmit={this.handleFormSubmit}/>
        <br />
        <Search filterPokemons={this.filterPokemons}/>
        <br />
        <PokemonCollection pokemons={this.state.searched} />
      </Container>
    )
  }
}

export default PokemonPage
