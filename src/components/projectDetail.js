import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Grid, Cell,Card,CardText,CardActions,CardTitle,CardAction,Button,CardMenu,IconButton} from 'react-mdl';
import  Popup from './popup'
import TextTruncate from 'react-text-truncate';
class ProjectDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      showPopup: false
    };
    this.ProjectDetailTitle = props.title;
    this.ProjectDetailDescription = props.description;
    this.ProjectDetailGithub = props.github;
    this.ProjectDetailId = props.id;
    this.ReactUrl = props.reactUrl;

  }
  togglePopup() {
     this.setState({
       showPopup: !this.state.showPopup
     });
   }
  render(props){
    return(
      <div >
        <Card shadow={5} style={{minWidth: '450', margin: 'auto',height: '310px'}} >
          <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn2.slidemodel.com/wp-content/uploads/7243-01-low-poly-background-16x9-1.jpg) center / cover'}}  >{this.ProjectDetailTitle}</CardTitle>
          <CardText>
          <p className="ProjectDetailContent">

          <TextTruncate
              line={4}
              truncateText="…"
              text={this.ProjectDetailDescription}
              textTruncateChild={<span style={{color:"blue"}} onClick={this.togglePopup.bind(this)}>continue reading</span>}
          />
              </p>
          </CardText>
          <CardActions border>
          {this.ProjectDetailGithub ?
            <Button colored><a href={this.ProjectDetailGithub}>Github</a></Button>
:null}

          </CardActions>

        </Card>
        {this.state.showPopup ?
          <Popup
            closePopup={this.togglePopup.bind(this)}
            description= {this.ProjectDetailDescription}
            title= {this.ProjectDetailTitle}
          />
          : null
        }
      </div>

      )
    }
  }

ProjectDetail.propTypes = {
  ProjectDetailDescription: PropTypes.string,
  ProjectDetailTitle: PropTypes.string,
  ProjectDetailGithub: PropTypes.string,
  ReactUrl: PropTypes.string
}
export default ProjectDetail;
