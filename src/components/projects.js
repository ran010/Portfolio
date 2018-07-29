import  React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell,Card,CardText,CardActions,CardTitle,CardAction,Button,CardMenu,IconButton} from 'react-mdl';
import  Popup from './popup'
class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, showPopup: false};
  }
  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }
  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div  className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle onClick={this.togglePopup.bind(this)} style={{color: '#fff', height: '176px', background:'url(https://laracasts.com/images/series/circles/do-you-react.png) center / cover'}}>React Project #1 </CardTitle>
          <CardText>
          In contrast a presentational component is merely used for displaying the desired markup. Presentational components are usually plain arrow functions and receive data from the container component as props.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>COdePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:'url(https://laracasts.com/images/series/circles/do-you-react.png) center / cover'}}>React Project #1 </CardTitle>
          <CardText>
          In contrast a presentational component is merely used for displaying the desired markup. Presentational components are usually plain arrow functions and receive data from the container component as props.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>COdePen</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color:'#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

      )
    } else if(this.state.activeTab === 1){
      return(
        <div><h1> Ruby On Rails</h1></div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div><h1> Java</h1></div>
      )
    }
  }
  render(){
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                 <Tab>React</Tab>
                 <Tab>Ruby On Rails</Tab>
                 <Tab>Java</Tab>
             </Tabs>
             <section >
                <Grid>
                    <Cell col={12} >
                      <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

             </section>
             {this.state.
             d ?
          <Popup
            text=
            "Close MeClose Me sdaf asdf asdf asdf a
                  sd f
                  asdf asdf asf asdf asd
                  f asd asdf as
                  f asdf asdfasdfas as
                  dfas asdf asdf
                   asdf asdf asdf
                  as sadfsafsdfsadf d
                   asdfsadf asdf asdf
                   asdfsadfa asdf as
                   asdf asdfa sdfa sasdf
                   asdfsadfsfsdfsdfsdaf sa
                   asdf sf af
                  sadfs df
                  sfsdf sdf sdf
                  sf saf sdf sfsdf
                  sfsdfdsfasdfasdf
                  asdfasdf
                   asdfasdf
                   asdf
                   asdfasdf f saf asf asf sad
                  f sadf sadf sa f
                  ass
                  df sf sdf sf sdfa
                  f asdfasdfasdf a
                   sfsaf asdf sd"
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}

export default Projects;
