
export type User = {
    id: number;
    name: string;
    avatar_url: string;
    url: string;
    type: string;
}

export type Repository = {
    id: number;
    url: string;
    name: string;
    description: string;
    language?: string;
    forks_count: number;
    stargazers_count: number;
    owner: User;
}

export type Issue = {
    id: number;
    title: string;
    url: string;
    description: string;
    state?: string;
    owner: User;
}