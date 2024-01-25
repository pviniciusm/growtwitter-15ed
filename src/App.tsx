import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { LeftMenu } from "./components/LeftMenu";
import { RightMenu } from "./components/RightMenu";

function App() {
    return (
        <>
            <Container>
                <LeftMenu />
                <Content />
                <RightMenu />
            </Container>
        </>
    );
}

export default App;
