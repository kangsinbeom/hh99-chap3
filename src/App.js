import './App.css';
import Left from './layout/Left';
import Right from './layout/Right';
import styled from 'styled-components';

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
    border: 1px solid tomato;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > div {
        padding: 30px 15px;
        //[ ]최종에 height 제거
        height: 600vh;
        width: 50%;
        min-width: 250px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }
`;

// height 는 자식값에 의존해서 나오는 경향이 있기때문에 %에 의지할 수 있는게 없다 (feat 혜경님)
