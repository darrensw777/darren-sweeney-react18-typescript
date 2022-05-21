import { useLocation } from "react-router-dom";

export const GetCurrentPage = () => {
    let location = useLocation();

    return location.pathname;
};

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const aboutGreeting = ({ copy }) => {
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
