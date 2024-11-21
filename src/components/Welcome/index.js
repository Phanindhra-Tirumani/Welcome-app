// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribed = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  onresult = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const result = this.onresult()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="decsription">Thank you! Happy Learning</p>
        <button className="btn" onClick={this.subscribed}>
          {result}
        </button>
      </div>
    )
  }
}

export default Welcome
