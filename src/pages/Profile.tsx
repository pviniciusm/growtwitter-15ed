import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { LeftMenu } from "../components/LeftMenu";
import { Content } from "../components/Content";
import { RightMenu } from "../components/RightMenu";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user.model";
import { Tweet } from "../models/tweet.model";
import { listTweetsFromUser } from "../services/api.service";

export function Profile() {
    const [user, setUser] = useState<User>();
    const [tweets, setTweets] = useState<Tweet[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const userStorage = localStorage.getItem("user");

        if (!userStorage) {
            alert("Sessão expirada, faça o login novamente!");
            navigate("/login");
            return;
        }

        setUser(JSON.parse(userStorage));
    }, []);

    useEffect(() => {
        if (!user) {
            return;
        }

        // listar os tweets
        listTweetsFromUser(user.id, user.token!).then((result) => {
            setTweets(result);

            console.log(result);
        });
    }, [user]);

    return (
        <>
            <Container>
                <LeftMenu />
                <Content tweetList={tweets} />
                <RightMenu />
            </Container>
        </>
    );
}
