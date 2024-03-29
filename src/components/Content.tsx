import styled from "styled-components";
import { TweetCard } from "./TweetCard";
import { Tweet } from "../models/tweet.model";

const ContentStyled = styled.main`
    background-color: #fafafa;
    flex: 1;
    display: flex;
    flex-direction: column;

    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;

    #content-header {
        padding: 12px;
        font-weight: bold;
        border-bottom: 2px solid #333;
    }

    #content-main {
        overflow: auto;
        p {
            margin-bottom: 8px;
            margin-top: 8px;
        }
    }
`;

interface ContentProps {
    tweetList: Tweet[];
}

export function Content(props: ContentProps) {
    return (
        <ContentStyled id="content">
            <div id="content-header">
                <p>Página inicial</p>
            </div>

            <div id="content-main">
                {props.tweetList.map((item) => (
                    <TweetCard tweet={item} key={item.id} />
                ))}
            </div>
        </ContentStyled>
    );
}
