import React, { useState, Fragment } from 'react';
import json from '../json/data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

const Existing = ({ lastCrop }) => {
  const [crop, setCrop] = useState('');
  console.log(lastCrop);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Last image that got saved</h3>

      {lastCrop && (
        <Fragment>
          <p>category: {lastCrop[0].category_name}</p>
          <Row>
            <Col>
              <ReactCrop
                src={lastCrop[0].images.name}
                alt={lastCrop[0].images.alt}
                crop={lastCrop[0].cords}
                onChange={newCrop => setCrop(newCrop)}
              />
            </Col>
          </Row>
        </Fragment>
      )}
    </div>
  );
};

export default Existing;
