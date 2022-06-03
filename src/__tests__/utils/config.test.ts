import { companyInfo } from 'utils/config';

describe('config util', () => {
    test('finds company name', () => {
        expect(companyInfo.name).toBe('Darren Sweeney');
    });

    test('finds docTitlePrefix', () => {
        expect(companyInfo.docTitlePrefix).toBe('Darren Sweeney - ');
    });

    test('finds siteUrl', () => {
        expect(companyInfo.siteUrl).toBe('https://darrensweeney.co.uk/');
    });
});
