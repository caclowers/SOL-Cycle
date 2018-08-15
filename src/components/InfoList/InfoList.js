import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class InfoList extends Component {

   render() {
      return (
         <h3 >
            The UV Index scale used in the United States conforms with international guidelines<br/>
            for UVI reporting established by the World Health Organization (WHO).
            <br />
            <br />
            <h2 className="h2ToCenter">0 to 2: Low</h2>
            A UV Index reading of 0 to 2 means LOW RISK for the average person.
            < br />
            <br />
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
            <br />
            <br />
            <br />
            <h2 className="h2ToCenter">3 to 5: Moderate</h2>
            A UV Index reading of 3 to 5 means MODERATE RISK of harm from unprotected sun exposure.
            < br />
            < br />
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
            <br />
            <br />
            <br />
            <h2 className="h2ToCenter">6 to 7: High</h2>
            A UV Index reading of 6 to 7 means HIGH RISK of harm from unprotected sun exposure.< br />
            Protection against skin and eye damage is needed.< br />
            <br />
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
            <br />
            <br />
            <br />
            <h2 className="h2ToCenter">8 to 10: Very High</h2>
            A UV Index reading of 8 to 10 means VERY HIGH RISK of harm from unprotected sun exposure.< br />
            Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.< br />
            <br />
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
            <br />
            <br />
            <br />
            <h2 className="h2ToCenter">11 or more: EXTREME</h2>
            A UV Index reading of 11 or more means EXTREME RISK of harm from unprotected sun exposure.< br />
            Take all precautions because unprotected skin and eyes can burn in minutes.< br />
            <br />
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
            <br />
            <br />
            <br />
            <h1>The Shadow Rule</h1>
            <br />
            <br />
            An easy way to tell how much UV exposure you are getting is to look for your shadow:
            <br />
            <ul>
               <li>
                  If your shadow is taller than you are (in the early morning and late afternoon), your UV exposure is likely to be lower.
               </li>
               <li>
                  If your shadow is shorter than you are (around midday), you are being exposed to higher levels of UV radiation. Seek shade and protect your skin and eyes.
               </li>
            </ul>
            <br />
            <br />
            Information Provided by: <a href="https://www.epa.gov/sunsafety/uv-index-scale-1">epa.gov</a>
            <button id="infoHome"><Link to="/user">Back to Home</Link></button>
         </h3>
      )
   }
};

export default InfoList;