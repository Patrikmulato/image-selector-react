import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pictures = ({
  ActivePicture,
  images,
  enLarge,
  active,
  category,
  activeCategory,
  pictureNumber,
  crop,
  onCropChange,
  saveJson,
  goBack
}) => {
  return (
    <Row>
      {active ? (
        images.map((image, i) => (
          <Col key={image} lg={6} className='picture-block'>
            <img
              className='main-pictures'
              alt={`car-${i}`}
              src={image}
              onClick={enLarge}
            />
          </Col>
        ))
      ) : (
        <ActivePicture
          images={images}
          activeCategory={activeCategory}
          pictureNumber={pictureNumber}
          crop={crop}
          onCropChange={onCropChange}
          saveJson={saveJson}
          goBack={goBack}
        />
      )}
    </Row>
  );
};

export default Pictures;
