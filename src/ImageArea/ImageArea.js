import './Style.css';
import diabetes from '../assets/diabetes.png';

function ImageArea() {
    return (
      <div className='image'>
  <img src={diabetes} alt="My Image" className='image__img' />      </div>
    );
  }

export default ImageArea;

