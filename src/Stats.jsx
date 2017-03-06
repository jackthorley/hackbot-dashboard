import React, { Component, PropTypes as T } from 'react'
import Timer from './Timer'

class Stats extends Component {
  static propTypes = {
    teams: T.number,
    hackers: T.number,
    challenges: T.number
  }

  render() {
    const { teams, hackers, challenges } = this.props
    return (
      <div>
        <nav className='level'>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Challenges</p>
              <p className='title is-1'>{challenges || '-'}</p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Teams</p>
              <p className='title is-1'>{teams || '-'}</p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Hackers</p>
              <p className='title is-1'>{hackers || '-'}</p>
            </div>
          </div>
        </nav>
        <nav className='level'>
          <div className='level-item has-text-centered'>
            <div>
              <h2 className='title is-4'>Time Left</h2>
              <h1 className='title is-1'><Timer start={new Date(2017, 2, 18, 12, 0, 0)} end={new Date(2017, 2, 19, 12, 0, 0)} /></h1>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Stats
