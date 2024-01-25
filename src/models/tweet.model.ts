import { User } from "./user.model";

export interface Tweet {
    id: string;
    content: string;
    type: string;
    user: User;

    // Likes
    // Replies
}
