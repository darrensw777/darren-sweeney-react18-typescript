import { useLocation } from 'react-router-dom';
import { GreetingCopyProps } from 'utils/interfaces';

export const GetCurrentPage = () => {
    let location = useLocation();

    return location.pathname || null;
};

export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const aboutGreeting = ({ copy, testTimeInHours = null }: GreetingCopyProps) => {
    const d = new Date();
    const timeInHours = testTimeInHours || d.getHours();

    const { morning, evening, afternoon } = copy;

    if (timeInHours < 12) {
        return morning;
    }
    if (timeInHours > 18) {
        return evening;
    }
    if (timeInHours >= 12) {
        return afternoon;
    }
};
