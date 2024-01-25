import styled from "styled-components";

const LeftMenuStyled = styled.nav`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-between;

    #bottom-side-left-menu {
        padding-bottom: 16px;
    }
`;

export function LeftMenu() {
    return (
        <LeftMenuStyled id="left">
            {/* Top side do left menu */}
            <div id="top-side-left-menu">
                <p>Logo</p>
                <ul>
                    <li>Pagina Inicial</li>
                    <li>Explorar</li>
                    <li>Perfil</li>
                </ul>
                <button>Tweetar</button>
            </div>

            {/* Bottom side do left menu */}
            <div id="bottom-side-left-menu">
                <div>card da daphne</div>
                <button>Sair</button>
            </div>
        </LeftMenuStyled>
    );
}
