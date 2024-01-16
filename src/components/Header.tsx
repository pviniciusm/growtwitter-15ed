import styled from "styled-components";
import logo from "../assets/logo_growtweet.svg";

const HeaderStyled = styled.div`
    padding: 12px;
    background-color: #f5f5f5;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 8px;
`;

export function Header() {
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo Growtweet" />
        </HeaderStyled>
    );
}
