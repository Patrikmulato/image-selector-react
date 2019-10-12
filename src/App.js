import React, { Fragment, useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Pictures from './components/Pictures';
import Categories from './components/Categories';
// Importing all Images
const importAll = r => r.keys().map(r);

const images = importAll(
  require.context('./Images', false, /\.(png|jpe?g|svg)$/)
);

// Categories you can use
const categories = {
  car: 'red',
  person: 'yellow',
  light: 'green',
  crosswalk: 'blue'
};
// Done selection
let doneSelection = [];

function App() {
  // States
  const [category, setCategory] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [active, setActive] = useState(true);
  const [pictureNumber, setPictureNumber] = useState('');
  const [crop, setCrop] = useState('');

  // Pick category ./Categories
  const pickCategory = e => {
    setCategory(e.target.style.color);
    setActiveCategory(e.target.id);
    document.getElementById('hiddenCategories').style.visibility = 'hidden';
  };

  // Enlarge image ./Pictures
  const enLarge = e => {
    setActive(false);
    let number = e.target.alt.split('car-')[1];
    setPictureNumber(number);
    document.getElementById('hiddenCategories').style.visibility = 'visible';
  };

  // Crop value change ./Pictures
  const onCropChange = crop => {
    console.log(crop);
    setCrop(crop);
    let cropBorder = document.getElementsByClassName(
      'ReactCrop__crop-selection'
    );
    if (crop.height > 0 && crop.width > 0) {
      cropBorder[0].style.border = `2px solid ${category}`;
    }
  };
  // Making readable JSON file
  const saveJson = () => {
    setActive(true);
    doneSelection = [];
    let image = images[pictureNumber];
    setCrop('');
    doneSelection.push({
      cords: crop,
      images: image,
      category_name: activeCategory,
      category_color: category
    });

    console.log(JSON.stringify(doneSelection));
    console.log(doneSelection.cords);
  };

  console.log(category);
  return (
    <Fragment>
      <Container>
        <h1>Image Selector</h1>
        <Pictures
          images={images}
          enLarge={enLarge}
          active={active}
          pictureNumber={pictureNumber}
          category={category}
          activeCategory={activeCategory}
          crop={crop}
          onCropChange={onCropChange}
          saveJson={saveJson}
        />
      </Container>
      <Categories pickCategory={pickCategory} categories={categories} />
    </Fragment>
  );
}

export default App;
