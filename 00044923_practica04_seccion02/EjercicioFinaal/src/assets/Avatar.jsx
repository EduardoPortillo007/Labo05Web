
import {getImageUrl} from './util.js';
import './App.css';

function Avatar({person, size}){
  return(
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;