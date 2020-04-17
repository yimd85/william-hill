import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {};

  componentDidMount() {
    axios.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_knicks')
      .then(res => this.setState(res.data.teams[0]));
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          flex: '1',
          width: '100%',
          height: '70px',
          backgroundColor: '#4F4D53',
        }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flexDirection: 'row', flex: '1' }}>
              <img
              className={'header_image'}
                src={this.state.strTeamLogo}
                alt={'logo'}
              />
            </div>
            <div style={{ textAlign: "right", flex: '1' }}>
              <div className={'link_container'}>
                <span >
                  <a
                    href={` https://${this.state.strFacebook}`}
                  >{'Facebook'}</a>
                  {' | '}
                </span>
                <span >
                  <a
                    href={` https://${this.state.strTwitter}`}
                  >{'Twitter'}</a>
                  {' | '}
                </span>
                <span ><a
                  href={` https://${this.state.strInstagram}`}
                >{'Instagram'}</a>
                  {' | '}
                </span>
                <span >
                  <a
                    href={` https://${this.state.strWebsite}`}
                  >{'Website'}</a>
                </span>
              </div>

            </div>
          </div>
        </div>
        <div>
          <h1>WE ARE NEW YORK BASKETBALL</h1>
        </div>
        <div>
          <img className={'main_image'} src={this.state.strTeamFanart2} alt={'knicks_image'} />
          <img className={'main_image'} src={this.state.strTeamFanart3} alt={'melo_image'} />
          <img className={'main_image'} src={this.state.strTeamFanart4} alt={'ewing_image'} />
        </div>
        <div className={'footer'} >
          <div className={'footer_text'}>{'Since: '}{this.state.intFormedYear}</div>
        </div>
      </div>
    )
  }
}

export default App;
