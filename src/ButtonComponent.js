import {Button} from 'react-bootstrap';
import './Style.css';

function ButtonComponent() {
  return (
    <div className="maindiv">
      <h2 Style="text-Align:center">Button and its types in Bootstrap</h2>
      <h2>Basic Buttons</h2>
      <br/>
      <button variant="primary">Primary</button>{' '}
      <button variant="secondary">Secondary</button>
      <br/>

    <h2>Button varient</h2>
    <br/>
    <Button variant="primary">Primary</Button>{' '}
    <Button variant="secondary">Secondary</Button>{' '}
    <Button variant="success">Success</Button>{' '}
    <Button variant="warning">Warning</Button>{' '}
    <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
    <Button variant="link">Link</Button>
    

    <h2>Button variant with outline</h2>
    <br/>
    <Button variant="outline-primary">Primary</Button>{' '}
    <Button variant="outline-secondary">Secondary</Button>{' '}
    <Button variant="outline-success">Success</Button>{' '}
    <Button variant="outline-warning">Warning</Button>{' '}
    <Button variant="outline-danger">Danger</Button>{' '}
    <Button variant="outline-info">Info</Button>{' '}
    <Button variant="outline-light">Light</Button>{' '}
    <Button variant="outline-dark">Dark</Button>{' '}
    <Button variant="outline-link">Link</Button>
    </div>
  );
}

export default ButtonComponent;