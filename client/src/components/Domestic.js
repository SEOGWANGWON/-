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

const Domestic = () => {
  const [activeTab, setActiveTab] = useState('domestic');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="여행지나 숙소를 검색해보세요"
              aria-label="여행지나 숙소를 검색해보세요"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              검색
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Domestic;