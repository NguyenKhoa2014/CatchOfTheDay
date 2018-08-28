import React from 'react';
class StorePicker extends React.Component {
  render(){
    return(
      <form className="store-selector">
        <p>Please Enter A Store</p>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;