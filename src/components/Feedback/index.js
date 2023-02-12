import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="app-bg-container">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="emojis-container">
            {emojis.map(each => (
              <div className="emoji-cont">
                <li className="list">
                  <img
                    className="image"
                    alt={each.name}
                    src={each.imageUrl}
                    onClick={this.onDisplay}
                  />
                  <p className="description">{each.name}</p>
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
