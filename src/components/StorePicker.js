import React from 'react';
import {getFunName} from '../helpers';
class StorePicker extends React.Component {
  goToStore(event){
    event.preventDefault(); 
    //first grab the text from input box
    const storeId = this.storeInput.value;
    console.log(`going to ${storeId}`)
    //transition to /store/:storeid
    this.context.router.transitionTo(`/store/${storeId}`)
  }
  render(){
    return(
      <form className="store-selector" onSubmit={ (e) => this.goToStore(e)}>
        <p>Please Enter A Store</p>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => this.storeInput = input}/>
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;