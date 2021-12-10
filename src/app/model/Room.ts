export interface Room {
    id: string;
    name: string;
    time: number;
    pinCode: string;
    isOpen: boolean;
    isStart: boolean;
    quizs: Quiz[];
}

interface Quiz {
    content: string;
    alist: Answer[];
}

export interface Answer {
    id: string;
    answer: string;
    isCorrect: boolean;
}

export interface Score {
    name: string,
    score: number;
}