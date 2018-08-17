import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
   State: state.State
});

class States extends Component {
   constructor(props) {
      super(props);

      this.state = {
         newState: '',
      };
   }

   handleInputChangeFor = propertyName => (event) => {
      this.setState({
         [propertyName]: event.target.value,
      });
      this.props.dispatch({
         type: 'EDIT_STATE',
         payload: this.state.newState
      })
      console.log(this.state.newState);
      
   }

  render(){
     return (
      <select type="select"
      name="State"
      // value={this.state.State}
      onChange={this.handleInputChangeFor('newState')}>
      <option value="Alabama">AL</option>
      <option value="Alaska">AK</option>
      <option value="Arizona">AZ</option>
      <option value="Arkansas">AR</option>
      <option value="California">CA</option>
      <option value="Colorado">CO</option>
      <option value="Connecticut">CT</option>
      <option value="Delaware">DE</option>
      <option value="District of Columbia">DC</option>
      <option value="Florida">FL</option>
      <option value="Georgia">GA</option>
      <option value="Hawai'i">HI</option>
      <option value="Idaho">ID</option>
      <option value="Illinois">IL</option>
      <option value="Indiana">IN</option>
      <option value="Iowa">IA</option>
      <option value="Kansas">KS</option>
      <option value="Kentucky">KY</option>
      <option value="Louisiana">LA</option>
      <option value="Maine">ME</option>
      <option value="Maryland">MD</option>
      <option value="Massachussetts">MA</option>
      <option value="Michigan">MI</option>
      <option value="Minnesota">MN</option>
      <option value="Mississippi">MS</option>
      <option value="Missouri">MO</option>
      <option value="Montana">MT</option>
      <option value="Nebraska">NE</option>
      <option value="Nevada">NV</option>
      <option value="New Hampshire">NH</option>
      <option value="New Jersey">NJ</option>
      <option value="New Mexico">NM</option>
      <option value="New York">NY</option>
      <option value="North Carolina">NC</option>
      <option value="North Dakota">ND</option>
      <option value="Ohio">OH</option>
      <option value="Oklahoma">OK</option>
      <option value="Oregon">OR</option>
      <option value="Pennsylvania">PA</option>
      <option value="Rhode Island">RI</option>
      <option value="South Carolina">SC</option>
      <option value="South Dakota">SD</option>
      <option value="Tennessee">TN</option>
      <option value="Texas">TX</option>
      <option value="Utah">UT</option>
      <option value="Vermont">VT</option>
      <option value="Virginia">VA</option>
      <option value="Washington">WA</option>
      <option value="West Virginia">WV</option>
      <option value="Wisconsin">WI</option>
      <option value="Wyoming">WY</option>
      <option value="American Samoa">AS</option>
      <option value="Guam">GU</option>
      <option value="Northern Mariana Islands">MP</option>
      <option value="Puerto Rico">PR</option>
      <option value="U.S. Virgin Islands">VI</option>
   </select>
     )
   }
}

export default connect(mapStateToProps)(States);