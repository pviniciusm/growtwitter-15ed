import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: auto;

    background-color: beige;
    max-width: 800px;

    #left {
        background-color: #fafafa;
        min-width: 180px;
    }

    #right {
        background-color: #fafafa;
        min-width: 180px;
    }
`;
