export interface Todo {
    id: string;
    name: string;
    date: string;
    completed: boolean;
    collaborators?: Collaborator[];
}

export interface Collaborator {
    name: string;
    age: number;
    skills?: Skill[]
}

export interface Skill {
    name: string;
}