import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

const Pictures = ({
  images,
  enLarge,
  active,
  pictureNumber,
  category,
  activeCategory,
  crop,
  onCropChange,
  saveJson
}) => {
  return (
    <Row>
      {active ? (
        images.map((image, i) => (
          <Col key={image} lg={6}>
            <img alt={`car-${i}`} src={image} onClick={enLarge} />
          </Col>
        ))
      ) : (
        <Col>
          <h3>category: {activeCategory}</h3>
          <ReactCrop
            alt={`car-${pictureNumber}`}
            crop={crop}
            src={images[pictureNumber]}
            onChange={onCropChange}
          />
          <button type='button' onClick={saveJson}>
            Save
          </button>
        </Col>
      )}
    </Row>
  );
};

export default Pictures;
