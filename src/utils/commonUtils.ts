import { useLocation } from "react-router-dom";

export const GetCurrentPage = () => {
    let location = useLocation();

    return location.pathname;
};

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

interface Copy {
    morning?: string;
    evening?: string;
    afternoon?: string;
}
interface CopyProps {
    copy: Copy;
}

export const aboutGreeting = ({ copy }: CopyProps) => {
    const d = new Date();
    const timeInHours = d.getHours();

    const { morning, evening, afternoon } = copy;

    if (timeInHours < 12) {
        return morning;
    }
    if (timeInHours > 18) {
        return evening;
    }
    if (timeInHours > 12) {
        return afternoon;
    }
};
