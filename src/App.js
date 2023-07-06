import './App.css';
import Left from './layout/Left';
import Right from './layout/Right';
import styled from 'styled-components';
import { grayColor } from './utils/GlobalSytle';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
function App() {
    return (
        <AppStyle>
            <Header />
            <Main>
                <Left />
                <Right />
            </Main>
            <Footer />
        </AppStyle>
    );
}

export default App;
const AppStyle = styled.div``;
const Main = styled.main`
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 100px;
    > div {
        padding: 30px 15px;
        //[ ]최종에 height 제거
        /* height: 100vh; */
        width: 50%;
        min-width: 350px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }
`;

// height 는 자식값에 의존해서 나오는 경향이 있기때문에 %에 의지할 수 있는게 없다 (feat 혜경님)
