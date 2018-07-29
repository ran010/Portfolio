import  React, {Component} from 'react';
import { Grid, Cell,List,ListItem,ListItemContent, Textfield,Button,Card } from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Ranjan Bir Bajracharya</h2>
          <img
          src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
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
            <Card shadow={0} style={{width: '500px', height: '600px', margin: 'auto',padding: '10px'}}>

              <div>
                <Textfield
                  onChange={() => {}}
                  label="Your Name"
                  floatingLabel
                  style={{width: '500px'}}
                  />
              </div>
              <div>
                <Textfield
                  onChange={() => {}}
                  label="Email"
                  floatingLabel
                  style={{width: '500px'}}
                  />
              </div>
              <div>
                <Textfield
                  onChange={() => {}}
                  label="Message"
                  floatingLabel
                  rows={3}
                  style={{width: '500px'}}
                  />
              </div>
              <Button raised>Button</Button>
                </Card>
           </Cell>
        </Grid>
        <h1> hfsdlkfjs;a j asjdf</h1>
      </div>
    )
  }
}

export default Contact;
