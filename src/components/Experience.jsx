
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Experience = () => {

    const education = [
        {
          university: 'Department Of Computer Science, University of Delhi.',
          degree: 'Master of Computer Applications',
          duration: '2021 - 2024',
        },
        {
          university: 'Bhaskaracharya College of Applied Sciences, University Of Delhi.',
          degree: 'B.Sc.(H) Electronics',
          duration: '2018 - 2021',
          
        },
      ];

    const experiences = [
        {
          company: 'Prophase Academy',
          position: 'Web Designer',
          duration: 'Aug 2020 - Dec 2020',
          description: 'Responsible for Designing Website UI & illustrations.',
        },
        {
          company: 'Hostcode LAB',
          position: 'Graphic Designer',
          duration: 'Jan 2021 - Mar 2021',
          description: 'Responsible for Designing all the Designs & Creatives. Design all Infographic, Social media posts & promotional material.',
        },
        {
          company: 'Let The Data Confess Pvt Ltd',
          position: 'Graphic Designer',
          duration: 'Jun 2021 - Mar 2022',
          description: 'Responsible for Designing & Approving all the Designs & Creatives. Design website UI components & all Infographic, Social media posts',
        },
      ];
    
      return (


<section className="experience" id="experience" data-aos='fadeup'>
      <Container>
        <Row>
          <Col size={12}>
              <div >
                <Tab.Container id="experience-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <br></br>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        <div className="exp-wrap">
                        {experiences.map((experience, index) => (
                            <div key={index} className="exp-bx" >
                            <div className="exp-minbox">
                            <h3>{experience.company}</h3>
                            
                            <p>
                                <strong>{experience.position}</strong>
                            </p>
                            <p>{experience.duration}</p>
                            <p>{experience.description}</p>
                            </div>
                            </div>
                         
                        ))}
                        </div>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <div className="exp-wrap">
                        {education.map((education, index) => (
                            <div key={index} className="exp-bx">
                            <div className="exp-minbox">
                            <h3>{education.degree}</h3>
                            
                            <p>
                                <strong>{education.university}</strong>
                            </p>
                            <p>{education.duration}</p>
                            <p>{education.description}</p>
                            </div>
                            </div>
                        ))}
                        </div>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src="" alt="bgimg"></img> */}
    </section>
                  );
};
