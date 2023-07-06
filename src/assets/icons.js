import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCaretRight, faCaretDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Github } from './github.svg';
const Heart = () => {
    return <FontAwesomeIcon icon={faHeart} />;
};
const CaretRight = () => {
    return <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: '1.1rem' }} />;
};
const CaretDown = () => {
    return <FontAwesomeIcon icon={faCaretDown} style={{ fontSize: '1.1rem' }} />;
};
const Git = ({ color }) => {
    return <Github style={{ height: `20px`, fill: color }} />;
};

const Star = () => {
    return <FontAwesomeIcon icon={faStar} />;
};

const Icon = { Heart, CaretRight, CaretDown, Git, Star };

export default Icon;
