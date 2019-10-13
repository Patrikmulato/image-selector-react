import React, { Fragment, useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Pictures from './components/Pictures';
import Categories from './components/Categories';
import LastViewed from './components/LastViewed';
import ActivePicture from './components/ActivePicture';
import Header from './components/Header';
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
  const [lastCrop, setLastCrop] = useState('');

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

  // Go back to pictures
  const goBack = e => {
    document.getElementById('hiddenCategories').style.visibility = 'hidden';
    setActive(true);
  };

  // Crop value change ./Pictures
  const onCropChange = crop => {
    setCrop(crop);
    const cropBorder = document.getElementsByClassName(
      'ReactCrop__crop-selection'
    );
    if (crop.height > 0 && crop.width > 0) {
      cropBorder[0].style.border = `2px solid ${category}`;
    }
  };
  // Making readable JSON file
  const saveJson = () => {
    if (activeCategory && crop) {
      setActive(true);
      doneSelection = [];
      let image = images[pictureNumber];
      doneSelection.push({
        cords: crop,
        images: { name: image, alt: `car-${pictureNumber}` },
        category_name: activeCategory,
        category_color: category
      });
      setCrop('');
      setActiveCategory('');
      console.log('Json file after save: ');
      console.log(JSON.stringify(doneSelection));
      setLastCrop(doneSelection);
    } else {
      alert(`Please finish the process`);
    }
  };

  return (
    <Fragment>
      <Container>
        <Header active={active} />
        <Pictures
          ActivePicture={ActivePicture}
          enLarge={enLarge}
          active={active}
          category={category}
          images={images}
          activeCategory={activeCategory}
          pictureNumber={pictureNumber}
          crop={crop}
          onCropChange={onCropChange}
          saveJson={saveJson}
          goBack={goBack}
        />
        <LastViewed lastCrop={lastCrop} />
      </Container>
      <Categories pickCategory={pickCategory} categories={categories} />
    </Fragment>
  );
}

export default App;
