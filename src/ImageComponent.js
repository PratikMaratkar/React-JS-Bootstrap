import {Image} from 'react-bootstrap';
import logo1 from './p9.jpg';
import './Style.css';

function ImageComponent() {
    return (
      <div>
          <h2 Style="text-align:center"> Types of images with Bootstrap</h2>
          <h3>Basic Image</h3>
          <Image className="image" src={logo1} />
          
          <h3>Rounded Image</h3>
          <Image className="image" src={logo1} rounded />
          
          <h3>Circle Image</h3>
          <Image className="image" src={logo1} roundedCircle />
          
          <h3>Thumbnail Image</h3>
          <Image className="image" src={logo1} thumbnail />
          <hr/>

      </div >
    );
}
export default ImageComponent;