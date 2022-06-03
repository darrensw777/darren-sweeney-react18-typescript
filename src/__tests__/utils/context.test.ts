import { i18n } from 'utils/context';

describe('config util', () => {
    test('finds company name', () => {
        expect(i18n.language).toBe('en');
    });

    test('finds docTitlePrefix', () => {
        expect(i18n.locale).toBe('en-GB');
    });
});
