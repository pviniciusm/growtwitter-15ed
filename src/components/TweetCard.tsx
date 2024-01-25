import styled from "styled-components";
import { Tweet } from "../models/tweet.model";

const TweetCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    padding: 12px;

    .tweet-photo {
        width: 80px;
    }

    .tweet-content {
        flex: 1;

        .tweet-title {
            .tweet-user-name {
                font-weight: bold;
            }

            span {
                margin-right: 8px;
            }
        }

        .tweet-action {
            margin-top: 8px;
            display: flex;
            flex-direction: row;

            div {
                margin-right: 8px;
            }
        }
    }

    .tweet-photo {
        img {
            height: 60px;
            width: 60px;
            border-radius: 50%;
        }
    }
`;

const PhotoStyled = styled.div<{ $urlPhoto: string }>`
    height: 60px;
    width: 60px;
    border-radius: 50%;

    background-color: red;
    background-image: url(${(props) => props.$urlPhoto});
    background-size: cover;
    background-position: center;
`;

export interface TweetCardProps {
    tweet: Tweet;
}

export function TweetCard(props: TweetCardProps) {
    return (
        <TweetCardStyled>
            <div className="tweet-photo">
                {/* <img src={props.tweet.user.urlPhoto} alt="" /> */}
                <PhotoStyled $urlPhoto={props.tweet.user.urlPhoto}></PhotoStyled>
            </div>
            <div className="tweet-content">
                <div className="tweet-title">
                    <span className="tweet-user-name">{props.tweet.user.name}</span>
                    <span>@{props.tweet.user.username}</span>
                    <span>• 3h</span>
                </div>
                <div className="tweet-text">{props.tweet.content}</div>
                <div className="tweet-action">
                    <div>Bot1</div>
                    <div>Bot2</div>
                </div>
            </div>
        </TweetCardStyled>
    );
}
