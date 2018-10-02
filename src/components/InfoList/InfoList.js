import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class InfoList extends Component {



  render() {
    return (
      <div >


        <div className="sectionHeader">
          <h2 className="h2ToCenter">0 to 2: Low</h2>
        </div>

        A UV Index reading of 0 to 2 means LOW RISK for the average person.

        <ul>
          <li >
            Wear sunglasses on bright days.
            </li>
          <li>
            If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen.
               </li>
          <li>
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
               </li>
        </ul>
        <div className="sectionHeader">
          <h2 className="h2ToCenter">3 to 5: Moderate</h2>
        </div>

        A UV Index reading of 3 to 5 means MODERATE RISK of harm from unprotected sun exposure.
        <ul>
          <li>
            Stay in shade near midday when the sun is strongest.
               </li>
          <li>
            If outdoors, wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
               </li>
          <li>
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.
               </li>
          <li>
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
               </li>
        </ul>
        <div className="sectionHeader">
          <h2 className="h2ToCenter">6 to 7: High</h2>
        </div>

        A UV Index reading of 6 to 7 means HIGH RISK of harm from unprotected sun exposure.
        Protection against skin and eye damage is needed.
        <ul>
          <li>
            Reduce time in the sun between 10 a.m. and 4 p.m.
               </li>
          <li>
            If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
               </li>
          <li>
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.
               </li>
          <li>
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
               </li>
        </ul>
        <div className="sectionHeader">
          <h2 className="h2ToCenter">8 to 10: Very High</h2>
        </div>

        A UV Index reading of 8 to 10 means VERY HIGH RISK of harm from unprotected sun exposure.
        Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.
        <ul>
          <li>
            Minimize sun exposure between 10 a.m. and 4 p.m.
               </li>
          <li>
            If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
               </li>
          <li>
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.
               </li>
          <li>
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
               </li>
        </ul>
        <div className="sectionHeader">
          <h2 className="h2ToCenter">11 or more: EXTREME</h2>
        </div>

        A UV Index reading of 11 or more means EXTREME RISK of harm from unprotected sun exposure.
        Take all precautions because unprotected skin and eyes can burn in minutes.
        <ul>
          <li>
            Try to AVOID sun exposure between 10 a.m. and 4 p.m.
               </li>
          <li>
            If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.
               </li>
          <li>
            Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.
               </li>
          <li>
            Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
               </li>

        </ul>
        <h1>The Shadow Rule</h1>
        An easy way to tell how much UV exposure you are getting is to look for your shadow:
        <ul>
          <li>
            If your shadow is TALLER than you are (in the early morning and late afternoon), your UV exposure is likely to be lower.
               </li>
          <li>
            If your shadow is SHORTER than you are (around midday), you are being exposed to higher levels of UV radiation. Seek shade and protect your skin and eyes.
               </li>
        </ul>
        
        <button id="infoHome"><Link to="/user">Back to Home</Link></button>
        Information Provided by: <a href="https://www.epa.gov/sunsafety/uv-index-scale-1">epa.gov</a>
      </div>
    )
  }
};

export default InfoList;