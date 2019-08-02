import React, {Component} from 'react'
import axios from 'axios'

export class UserHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      circulation: 100,
      price: 0,
      marketCap: 0
    }
  }

  async componentDidMount() {
    let result = await axios.get('/api/doge')
    let data = result.data.data.DOGE

    console.log('state: ', data)
    //console.log('state: ', )

    this.setState({
      circulation: data.circulating_supply,
      price: data.quote.USD.price,
      marketCap: data.quote.USD.market_cap
    })
  }

  render() {
    console.log('state: ', this.state)

    let inflation = this.state.circulation / 5000000000
    inflation = 100 / inflation

    return (
      <div align="center">
        <div>
          <img src="/Dogecoin_logo.png" height="40%" width="40%" />
        </div>
        <div id="textInfo">
          <h2>Price : {this.state.price.toFixed(7)}</h2>
          <h2>Inflation Rate: {inflation.toFixed(2)}%</h2>
          <h2>
            Market Cap: ${this.state.marketCap
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h2>
        </div>
      </div>
    )
  }
}

export default UserHome
