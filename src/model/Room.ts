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

interface Answer {
    answer: string;
    isCorrect: boolean;
}