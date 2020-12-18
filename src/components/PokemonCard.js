import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    image: this.props.pokemon.sprites.front
  }


  toggleFlip =() => {
   if (this.state.image === this.props.pokemon.sprites.front){
    this.setState({
      image: this.props.pokemon.sprites.back
    })
   }else {
    this.setState({
      image: this.props.pokemon.sprites.front
    })
   }
  }
  render() {
    const {id, name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div id={id}>
          <div className="image">
            <img src={this.state.image} alt="oops" onClick={this.toggleFlip}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
