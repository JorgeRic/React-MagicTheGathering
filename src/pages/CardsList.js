
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import magicService from '../services/magicService'

class CardsList extends Component {
  state={
    cards: [],
  }

  componentDidMount(){
    magicService.getAllCards()
    .then((response)=>{
      const cardsFromApi = response.data.cards
      
      this.setState({
        cards: cardsFromApi
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render() {
    const { cards } = this.state;
    return (
    <>
      <h2>Cards List page</h2>
      <section className='container'>
        {cards.length > 0 ? cards.map((card)=>{
          return(
            <article key={card.id}>
              <h3>{card.name}</h3>
              <p>{card.type}</p>
              <Link to={`/cards/${card.id}`}>
                <img src={card.imageUrl} alt={card.name}></img>
              </Link>
            </article> 
          )
        }): <p>Loading...</p>}
      </section>
    </>
    )
  }
}
export default CardsList

