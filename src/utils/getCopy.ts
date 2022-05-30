import { useI18n } from "contexts/I18n";

const getCopy = ({ copyKey, copyPath }: { copyKey: string, copyPath: string }) => {
    const { i18n } = useI18n();
    const { language } = i18n;
    const { [copyKey]: copy } = require(`constants/${language}/${copyPath}`);
    return copy;
};

export default getCopy;
