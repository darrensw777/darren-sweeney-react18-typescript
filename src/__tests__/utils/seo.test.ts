import meta from 'utils/seo';

describe('config util', () => {
    test('finds docTitle', () => {
        expect(meta.home.docTitle).toBe('Darren Sweeney');
    });
});
