import React from 'react';
import Col from 'react-bootstrap/Col';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';

const ActivePicture = ({
  images,
  activeCategory,
  pictureNumber,
  crop,
  onCropChange,
  saveJson,
  goBack
}) => {
  return (
    <Col className='active-picture'>
      <h3>category: {activeCategory}</h3>
      <button className='button' onClick={goBack}>
        Back
      </button>
      <ReactCrop
        alt={`car-${pictureNumber}`}
        crop={crop}
        src={images[pictureNumber]}
        onChange={onCropChange}
      />
      <button className='button' onClick={saveJson}>
        Save
      </button>
    </Col>
  );
};

export default ActivePicture;
