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
  console.log(images[pictureNumber]);
  return (
    <Col>
      <h3>category: {activeCategory}</h3>
      <button type='button' onClick={goBack}>
        Back
      </button>
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
  );
};

export default ActivePicture;
