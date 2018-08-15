import  React, {Component} from 'react';
import { Grid, Cell,List,ListItem,ListItemContent, Textfield,Button,Card } from 'react-mdl';
import RANJAN from '../images/Ranjan.JPG';
class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Ranjan Bir Bajracharya</h2>
          <img
          src={RANJAN}
          alt="avatar"
          style={{height: '250px'}}
           />
          <List>
           <ListItem>
             <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
               <i className="fa fa-fax" aria-hidden="true"/>
               (977) 9818209862
             </ListItemContent>
           </ListItem>
           <ListItem>
             <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
               <i className="fa fa-envelope" aria-hidden="true"/>
               ranjanbajra@gmail.com
             </ListItemContent>
           </ListItem>

         </List>

           </Cell>
          <Cell col={6}>
            <h1> Contact Me </h1>
            <a href="https://www.facebook.com/ranjan.bajracharya" target="_blank" class="fa fa-facebook"></a><br/>
            <a href="https://twitter.com/ran_bajra"  target="_blank" class="fa fa-linkedin"></a><br/>
            <a href="www.linkedin.com/in/ranjan-bajracharya-3b22bb131"  target="_blank" class="fa fa-twitter"></a><br/>
            <a href="https://medium.com/@ran_bajra"  target="_blank" class="fa-medium fa"></a>


           </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
