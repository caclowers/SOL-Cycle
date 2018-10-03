import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoList from '../InfoList/InfoList.js'
// import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});


class InfoPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  shadowRule = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <main id="welcome">Hi,<br /> {this.props.user.userName}!</main>
          <div className="infoDiv">

            <div id="infoHeader">
              <h1>What is UV?</h1>
              <button id="infoHome"><Link to="/user">Back to Home</Link></button>
              <button id="shadowLink" onClick={this.shadowRule}>THE SHADOW RULE</button>
              <h2>Ultraviolet light is measured on a scale from 0 to 11+</h2>
              <h2>The UV spectrum has both beneficial and harmful effets to human health.</h2>
              <h2>UV is responsible for the formation of bone-strengthening vitamin D in humans (specifically, UVB).</h2>
              <h2>However, suntan and sunburn are familiar effects of over-exposure of the skin to UV, along with a higher risk of SKIN CANCER.</h2>
              

            </div>
            <InfoList />
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* <Nav /> */}
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
