import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Content } from "../components/Content";
import { LeftMenu } from "../components/LeftMenu";
import { RightMenu } from "../components/RightMenu";
import { User } from "../models/user.model";
import { useNavigate } from "react-router-dom";
import { listAllTweets } from "../services/api.service";
import { Tweet } from "../models/tweet.model";

export function Home() {
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
        listAllTweets(user.id, user.token!).then((result) => {
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
