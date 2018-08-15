import  React, {Component} from 'react';
import pic from '../images/pic.jpg';
import '../style.css';
import Projects from './projects'
class LandingPage extends Component{
  render(){
    return(
      <div>
        <section class="home-section">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-6">
                <div class="me-image">
                  <img
                      src={pic}
                      alt="avatar"
                      style={{height: '650px'}}
                       />
                  </div>
                  <h2> Ranjan Bir Bajracharya (MSP 2017)</h2>
                </div>
              </div>
            </div>
         </section>

          <section class="section-space-padding" id="education">
            <div class="container">
             <div class="row">
                  <div class="col-sm-12">
                      <div class="section-title">
                          <h1>Education</h1>
                           <div class="divider dark">
                 <i class="icon-graduation"></i>
                          </div>
                    <p><h5>"Education is the most powerful weapon which you can use to change the world." -Nelson Mandela</h5></p>
                    </div>
                </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="experience">

                    <div class="experience-item">
                      <div class="experience-circle">
                        <i class="icon-book-open"></i>
                        <p>on going</p>
                      </div>
                      <div class="experience-content experience-color-blue">
                        <h4>Bachelors of Science in Computer Science and Information Technology (B.Sc.CSIT)</h4>
                        <h5>Tribhuvan University Board</h5>
                        <h6>Academia International College</h6>
                        <h6>Gwarko,Lalitpur</h6>
                      </div>
                    </div>

                    <div class="experience-item">
                     <div class="experience-circle">
                       <i class="icon-book-open"></i>
                       <p>2071</p>
                     </div>
                     <div class="experience-content experience-color-blue">
                       <h4>HSEB Board (+2)</h4>
                       <h6>D.A.V College</h6>
                       <h6>Jwalakhel,Lalitpur</h6>
                     </div>
                    </div>

                    <div class="experience-item">
                    <div class="experience-circle">
                      <i class="icon-book-open"></i>
                      <p>2068</p>
                    </div>
                    <div class="experience-content experience-color-blue">
                      <h4>SLC</h4>
                      <h6>Lalitpur Madhyamik Vidyalaya</h6>
                      <h6>Lagankhel,Lalitpur</h6>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                   <div class="col-sm-12">
                       <div class="section-title">
                           <h1>Achivements</h1>
                            <div class="divider dark">
                  <i class="icon-graduation"></i>
                           </div>
                     </div>
                 </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <div class="experience">
                    <div class="experience-item">
                      <div class="experience-circle experience-company pink-color-bg" style={{ top:"-15px"}}>
                        <p>Hackathon</p>
                      </div>
                      <div class="experience-content experience-color-blue">
                        <h4>Spirathon 2017 (Second Runner Up)</h4>
                      </div>
                    </div>

                    <div class="experience-item">
                      <div class="experience-circle experience-company pink-color-bg" style={{ top:"-15px"}}>
                        <p>Hackathon</p>
                      </div>
                      <div class="experience-content experience-color-blue">
                        <h4>NASA Space App Challenge 2017</h4>
                      </div>
                    </div>

                    <div class="experience-item">
                      <div class="experience-circle experience-company pink-color-bg" style={{ top:"-15px"}}>
                        <p>Hackathon</p>
                      </div>
                      <div class="experience-content experience-color-blue">
                        <h4>NOSKode(Open Coding Competition) 2016 winner</h4>
                      </div>
                    </div>

                  </div>
                  </div>
                </div>
              </div>
            </div>
         </section>
         <section class="section-space-padding" id="achivement">
          <div class="container">
            <div class="row">
               <div class="col-sm-12">
                   <div class="section-title">
                       <h1>Achivements</h1>
                        <div class="divider dark">
              <i class="icon-graduation"></i>
                       </div>
                 </div>
             </div>

             <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="experience">
                <div class="experience-item">
                  <div class="experience-circle experience-company pink-color-bg" style={{ top:"-15px"}}>
                    <p>Hackathon</p>
                  </div>
                  <div class="experience-content experience-color-blue">
                    <h4>Spirathon 2017 (Second Runner Up)</h4>
                  </div>
                </div>

                <div class="experience-item">
                  <div class="experience-circle experience-company pink-color-bg" style={{ top:"-15px"}}>
                    <p>Hackathon</p>
                  </div>
                  <div class="experience-content experience-color-blue">
                    <h4>NASA Space App Challenge 2017</h4>
                  </div>
                </div>

                <div class="experience-item">
                  <div class="experience-circle experience-company pink-color-bg" style={{ top:"-15px"}}>
                    <p>Hackathon</p>
                  </div>
                  <div class="experience-content experience-color-blue">
                    <h4>NOSKode(Open Coding Competition) 2016 winner</h4>
                  </div>
                </div>

              </div>
              </div>
            </div>
            </div>
          </div>
         </section>
          <section class="section-space-padding" id="project">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                    <div class="section-title">
                        <h1>Projects</h1>
                     </div>
                  </div>
                  <Projects />
              </div>
            </div>
          </section>
         <section class="section-space-padding" id="skill">
           <div class="container">
            <div class="row">
                 <div class="col-sm-12">
                     <div class="section-title">
                         <h1>Skills</h1>
                   </div>
               </div>
              <div class="graph-cont">
                <div class="bar bar1">Ruby on Rails</div>
                <div class="bar bar1">Java</div>
                <div class="bar bar1">React</div>
                <div class="bar bar1">SQL</div>
                <div class="bar bar1">Firebase</div>
                <div class="bar bar1">Html/Css</div>
                <div class="bar bar1">Git</div>
                <div class="bar bar1">Heroku</div>
              </div>
            </div>
          </div>
         </section>
         <footer class="page-footer font-small cyan darken-3" id="social-link">
            <div class="container">
            <div class="row">
              <div class="col-sm-12">
                  <div class="section-title">
                      <h1>Social Links</h1>
                </div>
            </div>
              <div class="col-md-12 py-5">
                <div class="social-link">
                  <a class="ic fb-pad">
                  <a href="https://www.facebook.com/ranjan.bajracharya" target="_blank" ><i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>


                  </a>
                  <a class="ic">
                  <a href="https://twitter.com/ran_bajra"  target="_blank" ><i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
</a>

                  </a>

                  <a class="ic">
                  <a href="www.linkedin.com/in/ranjan-bajracharya-3b22bb131"  target="_blank"><i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
</a>

                  </a>
                  <a class="ic">
                  <a href="https://medium.com/@ran_bajra"  target="_blank" ><i class="fa-medium fa white-text mr-md-5 mr-3 fa-2x"> </i>
</a>
                  </a>

                </div>
              </div>
            </div>
          </div>


        </footer>
      </div>
    )
  }
}

export default LandingPage;
