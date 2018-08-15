import  React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell,Card,CardText,CardActions,CardTitle,CardAction,Button,CardMenu,IconButton} from 'react-mdl';
import ProjectDetail from './projectDetail'
import {DB_CONFIG } from '../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0, notes: [], react: [], ror: []};
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');
    this.react = this.app.database().ref().child('react');
    this.ror = this.app.database().ref().child('ror');
    this.reactUrl= "https://laracasts.com/images/series/circles/do-you-react.png";

    //react state of Component

  }
  componentWillMount(){
    const previousNotes = this.state.notes;
    const previousReact = this.state.react;
    const previousRor = this.state.ror;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })
      this.setState({
        notes: previousNotes
      })
    })
    this.react.on('child_added', snap => {
      previousReact.push({
        id: snap.key,
        title: snap.val().title,
        description: snap.val().description,
        github: snap.val().github,

      })
      this.setState({
        react: previousReact
      })
    })
    this.ror.on('child_added', snap => {
      previousRor.push({
        id: snap.key,
        title: snap.val().title,
        description: snap.val().description,
        github: snap.val().github,

      })
      this.setState({
        ror: previousRor
      })
    })
  }


  toggleCategories(){

    if(this.state.activeTab === 1){
      return(
          <div className="projects-grid">
            <Grid>
            {
              this.state.react.map((r) =>{
                return(
                  <Cell col={6} >
                  < ProjectDetail  title={r.title} id={r.id} key={r.id} description={r.description} image={this.reactUrl} github={r.github} />
                  </Cell>
                )
              })
            }
            </Grid>
          </div>
            )
    } else if(this.state.activeTab === 0){
      console.log(this.state.activeTab +"  " )
      return(
        <div className="projects-grid">
        <Grid>
        {
          this.state.ror.map((re) =>{
            return(
              <Cell col={6} >
                < ProjectDetail title={re.title} id={re.id} key={re.id} description={re.description} github={re.github} />
              </Cell>
            )
          })
        }
        </Grid>
      </div>
      )
    } else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
        {
          this.state.notes.map((note) =>{
            return(
              < ProjectDetail noteContent={note.noteContent} noteId={note.id} key={note.id} github={note.github} />
            )
          })
        }
      </div>
      )
    }
  }
  render(){

    return(
    <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                 <Tab>Ruby On Rails</Tab>
                 <Tab>React</Tab>
             </Tabs>
             <section >
                <Grid>
                    <Cell col={12} >
                      <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                <div className="noteBody">

                      </div>
             </section>

      </div>
    )
  }
}

export default Projects;
