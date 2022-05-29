export interface AboutGreetingTypes {
    morning: number;
    evening: string;
    afternoon: number;
}

interface Interest {
    question: string;
    answers: string[];
}
export interface InterestsProps {
    interests: Interest[];
}

interface CopyProps {
    general: string[];
    greetings: object;
    interests: Interest[];
}

export interface CopyPropsParent {
    copy: CopyProps;
}
