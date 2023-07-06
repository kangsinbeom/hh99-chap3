import './App.css';
import Left from './layout/Left';
import Right from './layout/Right';
import styled from "styled-components"
import {grayColor} from './utils/GlobalSytle';
function App() {
  return (
    <StyledApp>
      <Left />
      <Right />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: ${grayColor[2]};
  width: 50%;
  height: 100vh;
  margin: 0 auto;
`;

// height 는 자식값에 의존해서 나오는 경향이 있기때문에 %에 의지할 수 있는게 없다 (feat 혜경님)