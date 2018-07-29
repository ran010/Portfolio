import  React, {Component} from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <spam onClick={this.props.closePopup} type="button" class="close-popup"  aria-hidden="true"></spam>
          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

export default Popup;
