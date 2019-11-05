
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import magicService from '../services/magicService';
// import magicService from '../services/magicService'

class CardDetail extends Component {
  state={
    card: null
  }
  
  componentDidMount(){
    const { id }= this.props.match.params
    magicService.getOneCard(id)
    .then((response)=>{
      console.log(response.data.card)
      this.setState({
        card: response.data.card
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  goBack =()=>{
    this.props.history.goBack()
  }

  render() {
    const { card } = this.state
    return (
      <div>
        {/* <Link to='/cards' exact><button>Back to Cards List</button></Link> */}
        {card ? <h2>{card.name}</h2>: <p></p>}
        <div className='container big'>
          {card ? <img src={card.imageUrl} alt={card.name}/>: <p>loading...</p>}
        </div>
          <button className='container' onClick={this.goBack}>Go to previous Page</button>
        
      </div>
    )
  }
}
export default CardDetail

