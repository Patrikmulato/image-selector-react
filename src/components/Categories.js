import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Categories = ({ pickCategory, categories }) => {
  return (
    <div className='categoryHider' id='hiddenCategories'>
      <Row>
        <Col>
          <h3>Choose a category</h3>
        </Col>
      </Row>
      <Row>
        {Object.entries(categories).map(([key, value]) => (
          <Col key={key} style={{ textAlign: 'center' }}>
            <span
              key={key}
              id={key}
              className='categories'
              style={{ color: `${value}` }}
              onClick={pickCategory}
            >
              {key}
            </span>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
