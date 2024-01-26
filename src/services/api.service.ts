import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function login(body: any) {
    try {
        const result = await api.post("/user/auth", body);

        return result.data.data;
    } catch (error: any) {
        alert(error.toString());
        return null;
    }
}

export async function listAllTweets(userId: string, token: string) {
    try {
        const result = await api.get(`/user/${userId}/tweet/feed`, {
            headers: {
                Authorization: token,
            },
        });

        return result.data.data;
    } catch (error: any) {
        alert(error.toString());
        return [];
    }
}

export async function listTweetsFromUser(userId: string, token: string) {
    try {
        const result = await api.get(`/user/${userId}/tweet`, {
            headers: {
                Authorization: token,
            },
        });

        return result.data.data;
    } catch (error: any) {
        alert(error.toString());
        return [];
    }
}
