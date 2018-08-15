import React, { Component } from 'react';
import States from '../States/States.js';

class EditLocationModal extends Component {
   constructor(props) {
      super(props);

      this.state = {
         username: '',
         password: '',
         password2: '',
         city: '',
         State: '',
         message: '',
      };
   }

   handleInputChangeFor = propertyName => (event) => {
      this.setState({
         [propertyName]: event.target.value,
      });
   }

   editLocation = event => {
      console.log('yay');

   }
   render() {
      return (
         <form onSubmit={this.editLocation}>
            <div className="locationModal">
               <h3>Edit Location</h3>
               <div>
                  <label htmlFor="city">
                     City:
                     <input type="text" name="City" value={this.state.city}  />
                  </label>
               </div>
               <div>
                  <label htmlFor="State">
                     State:
                     <States />
                  </label>
               </div>
               <div>
                  <input type="submit" value="submit"  />
               </div><br />
               <div>
                  <label htmlFor="delete">
                     Delete Location:<br />
                     <select type="select" name="Locations"><option value="howdy">Howdy</option></select>
                  </label>
                  <div>
                     <input  type="submit" value="Delete" />
                  </div>
               </div>
            </div >
         </form>
      )
   }
}
export default EditLocationModal;