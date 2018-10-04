import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class InfoList extends Component {


  shadowRule = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  }


  render() {
    return (
      <div id="infoDiv">
        <div id="infoHeader">
          <h1>What is UV?</h1>
          <button id="infoHome"><Link to="/user">Back to Home</Link></button>
          <button id="shadowLink" onClick={this.shadowRule}>THE SHADOW RULE</button>

          <h3>
            Ultraviolet light is measured on a scale from 0 to 11+
                </h3>
          <h3>
            The UV spectrum has both beneficial and harmful effets to human health
                </h3>
          <h3>
            UV is responsible for the formation of bone-strengthening vitamin D in humans (specifically, UVB)
                </h3>
          <h3>
            However, suntan and sunburn are familiar effects of over-exposure to UV, along with a higher risk of SKIN CANCER
                  </h3>

        </div>
        <div className="infoSection">
          <div className="sectionHeader">
            <h2 className="h2ToCenter">0 to 2: <strong>Low</strong></h2>
          </div>
          <h2>0 to 2 means LOW RISK for the average person</h2>
          <ul>
            <li>
              Wear sunglasses on bright days
            </li>
            <li>
              If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen
            </li>
            <li>
              Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure
            </li>
          </ul>
        </div>
        <div className="infoSection">
          <div className="sectionHeader">
            <h2 className="h2ToCenter">3 to 5: Moderate</h2>
          </div>
          <h2>3 to 5 means MODERATE RISK of harm from unprotected sun exposure</h2>
          <ul>
            <li>
              Stay in shade near midday when the sun is strongest
            </li>
            <li>
              If outdoors, wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses
            </li>
            <li>
              Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating
            </li>
            <li>
              Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure
            </li>
          </ul>
        </div>
        <div className="infoSection">
          <div className="sectionHeader">
            <h2 className="h2ToCenter">6 to 7: High</h2>
          </div>

          <h2>6 to 7 means HIGH RISK of harm from unprotected sun exposure</h2>
          <h2>Protection against skin and eye damage is needed</h2>
          <ul>
            <li>
              Reduce time in the sun between 10 a.m. and 4 p.m.
            </li>
            <li>
              If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses
            </li>
            <li>
              Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating
            </li>
            <li>
              Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure
            </li>
          </ul>
        </div>
        <div className="infoSection">
          <div className="sectionHeader">
            <h2 className="h2ToCenter">8 to 10: Very High</h2>
          </div>
          <h2>8 to 10 means VERY HIGH RISK of harm from unprotected sun exposure</h2>
          <h2>Take extra precautions: unprotected skin and eyes will be damaged and can burn quickly</h2>
          <ul>
            <li>
              Minimize sun exposure between 10 a.m. and 4 p.m.
            </li>
            <li>
              If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses
            </li>
            <li>
              Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating
            </li>
            <li>
              Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure
            </li>
          </ul>
        </div>
        <div className="infoSection">
          <div className="sectionHeader">
            <h2 className="h2ToCenter">11+ : EXTREME</h2>
          </div>
          <h2>11 or more means EXTREME RISK of harm from unprotected sun exposure</h2>
          <h2>Take all precautions because unprotected skin and eyes can burn in minutes</h2>
          <ul>
            <li>
              Try to AVOID sun exposure between 10 a.m. and 4 p.m.
            </li>
            <li>
              If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses
            </li>
            <li>
              Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating
            </li>
            <li>
              Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure
            </li>

          </ul>
        </div>
        <div className="infoSection">
          <h1>The Shadow Rule</h1>
          <h2>An easy way to tell how much UV exposure you are getting is to look for your shadow:</h2>
          <ul>
            <li>
              If your shadow is TALLER than you (in the early morning and late afternoon), your UV exposure is likely to be lower.
          </li>
            <li>
              If your shadow is SHORTER than you (around midday), you are getting higher levels of UV radiation. Seek shade and protect your skin and eyes.
          </li>
          </ul>
        </div>
        <div className="infoSection">
          <button id="infoHome"><Link to="/user">Back to Home</Link></button>
          Information Provided by: <a href="https://www.epa.gov/sunsafety/uv-index-scale-1">epa.gov</a> and <a href="https://en.wikipedia.org/wiki/Ultraviolet">Wikipedia</a>
        </div>
      </div>
    )
  }
};

export default InfoList;