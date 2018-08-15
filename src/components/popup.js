import  React, {Component} from 'react';
import PropTypes from 'prop-types';

class Popup extends React.Component {
  constructor(props){
    super(props)
      this.ProjectDetailDescription = props.description;
      this.ProjectDetailTitle = props.title;
  }
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <span onClick={this.props.closePopup} class="close-popup"> </span><br/>
        <div className="popUpBody">
          <h3 className="title">{this.ProjectDetailTitle}</h3>
          <p className="description">{this.ProjectDetailDescription}</p>
        </div>
        </div>
      </div>
    );
  }
}
Popup.propTypes = {
    ProjectDetailDescription: PropTypes.string,
    ProjectDetailTitle: PropTypes.string
}

export default Popup;
