import React, { Fragment } from "react";
import { Container, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { AppNavbar, AppFooter, AppSection } from "../containers";
import "@ui/assets/css/about.css";
import { Icon, Divider } from "../components/atoms";

const About = () => {
  return (
    <Fragment>
      <AppNavbar showBand={false} />
      <Container className="p-0">
        <Card className='resume-page'>
          <AppSection className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0 text-upper">
                Ezeugwa
                <span className="text-primary"> Gerrard</span>
              </h1>
              <div className="subheading mb-5">
                Gbagada · Lagos · (+234) 813-751-9688 ·
                <a href="mailto:ezeugwagerrard@gmail.com">
                  {" "}
                  ezeugwagerrard@gmail.com
                </a>
              </div>
              <p className="lead mb-5">
                I use technology for the good of mankind. My experience spans
                IT, Banking and Finance, Oil and Gas, Telecommunications and
                Federal Ministries. I have a solid grasp of modern Frontend and
                Dev Process Automation technologies. 
              </p>

              <div className="social-icons">
                <Link href className="social-icon">
                  <Icon className="fab fa-linkedin-in" />
                </Link>
                <Link href className="social-icon">
                  <Icon className="fab fa-github" />
                </Link>
                <Link href className="social-icon">
                  <Icon className="fab fa-twitter" />
                </Link>
              </div>
            </div>
          </AppSection>
          <Divider className="m-0" />

          <AppSection className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Software and DevOps Engineer</h3>
                  <div className="subheading mb-3">UBA Group</div>
                  <p>
                    Build mobile applications that scale well across all
                    platforms. Execute company wide solutions in view to achieve
                    100 percent automation of development processes.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">December 2019 - Present</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Software Engineer</h3>
                  <div className="subheading mb-3">Andela</div>
                  <p>
                    Work with distributed Engineering team members to build
                    world class software solutions by delivering features,
                    fixes, chores and releasing updates.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">May 2019 - Sept 2019</span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Software Engineering Trainee</h3>
                  <div className="subheading mb-3">Andela</div>
                  <p>
                    Build expertise in software engineering life cycle through
                    accelerated bootcamp technical and soft skill coaching by
                    world class Engineering teams.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    February 2019 - April 2019
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Web Master</h3>
                  <div className="subheading mb-3">Ocean Pride MultiLinks</div>
                  <p>
                    Build company official website, generate and revise web
                    pages and examine web traffic. Ensure web servers and
                    software operate properly.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    January 2018 - January 2019
                  </span>
                </div>
              </div>
            </div>
          </AppSection>
          <Divider className="m-0" />

          <AppSection className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Education</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">University of Port Harcourt</h3>
                  <div className="subheading mb-3">Bachelor of Engineering</div>
                  <div>Oil &amp; Gas - Gas Engineering</div>
                  <p>GPA: 3.83</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    October 2010 - October 2015
                  </span>
                </div>
              </div>
            </div>
          </AppSection>
          <Divider className="m-0" />

          <AppSection className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">
                Programming Languages &amp; Tools
              </div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <Icon className="fab fa-html5" />
                </li>
                <li className="list-inline-item">
                  <Icon className="fab fa-css3-alt" />
                </li>
                <li className="list-inline-item">
                  <Icon className="fab fa-js-square" />
                </li>
                <li className="list-inline-item">
                  <Icon className="fab fa-react" />
                </li>
                <li className="list-inline-item">
                  <Icon className="fab fa-node-js" />
                </li>
                <li className="list-inline-item">
                  <Icon className="fab fa-python" />
                </li>
                <li className="list-inline-item">
                  <Icon className="fab fa-npm" />
                </li>
              </ul>
            </div>
          </AppSection>
          <Divider className="m-0" />

          <AppSection className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Interests</h2>
              <p>
                I love soccer and my favorite team is Liverpool FC. You will
                also find that I like video games.
                <br />
                Good food changes the way we feel and perceive things, so I love
                to make and eat good food.
              </p>
              <p className="mb-0">
                I play ping-pong and I love to swim too. Many times you will
                find me seeing the latest movies and spending time with my loved
                ones. 
              </p>
            </div>
          </AppSection>
          <Divider className="m-0" />

          <AppSection className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <Icon className="fas fa-trophy text-warning" />
                  </span>
                  FrontEnd Web Development - Nanodegree, Udacity School Of
                  Programming
                </li>
                <li>
                  <span className="fa-li">
                    <Icon className="fas fa-trophy text-warning" />
                  </span>
                  FullStack Web Development - Nanodegree, Udacity School Of
                  Programming
                </li>
                <li>
                  <span className="fa-li">
                    <Icon className="fas fa-trophy text-warning" />
                  </span>
                  Google / Andela Scholarship - 2018
                </li>
              </ul>
            </div>
          </AppSection>
        </Card>
      </Container>
      <AppFooter />
    </Fragment>
  );
};

export default About;
