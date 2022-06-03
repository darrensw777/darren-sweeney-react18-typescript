import { capitalizeFirstLetter, aboutGreeting } from 'utils/commonUtils';

describe('config util', () => {
    test('capitalises letter', () => {
        expect(capitalizeFirstLetter('test')).toBe('Test');
    });

    test('returns greeting', () => {
        const copy = {
            morning: 'morning',
            evening: 'evening',
            afternoon: 'afternoon',
        };
        expect(aboutGreeting({ copy, testTimeInHours: 6 })).toBe(copy.morning);
        expect(aboutGreeting({ copy, testTimeInHours: 20 })).toBe(copy.evening);
        expect(aboutGreeting({ copy, testTimeInHours: 14 })).toBe(copy.afternoon);
        expect(aboutGreeting({ copy, testTimeInHours: 12 })).toBe(copy.afternoon);
    });
});
