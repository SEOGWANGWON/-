import React, { useState } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Nav,
} from 'react-bootstrap';
import Domestic from '../component/Domestic';
import Overseas from '../component/Overseas';

const Home = () => {
  const [activeTab, setActiveTab] = useState('domestic');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Row className='mt-3'>
        <Col>
          <Nav variant='tabs'>
            <Nav.Item>
              <Nav.Link
                href='#domestic'
                active={activeTab === 'domestic'}
                onClick={() => handleTabClick('domestic')}
              >
                국내 숙소
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#overseas'
                active={activeTab === 'overseas'}
                onClick={() => handleTabClick('overseas')}
              >
                해외 숙소
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      {activeTab === 'domestic' && <Domestic />}
      {activeTab === 'overseas' && <Overseas />}
    </Container>
  );
};

export default Home;