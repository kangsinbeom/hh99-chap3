import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faCaretRight,
    faCaretDown,
    faXmark,
    faStar,
    faBomb,
} from '@fortawesome/free-solid-svg-icons';
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

const Xmark = () => {
    return <FontAwesomeIcon icon={faXmark} />;
};

const Star = () => {
    return <FontAwesomeIcon icon={faStar} />;
};

const Bomb = () => {
    return <FontAwesomeIcon icon={faBomb} />;
};

const Icon = { Heart, CaretRight, CaretDown, Git, Xmark, Star, Bomb };
// 담아서 내보내는 방식이 이렇게 내보내는구나
export default Icon;