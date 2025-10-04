import { getImageUrl } from './utils.js';
import './App.css';

export function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={100}
      height={100}
    />
  );
}

export default Avatar;