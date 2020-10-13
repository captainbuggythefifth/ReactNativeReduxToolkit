import { getEquivalentHeight } from 'helpers/screen';

describe('screen getEquivalentHeight', () => {
    
    it('should receive return a value of number', () => {
        const value = getEquivalentHeight(2);
        expect(typeof value).toBe('number')
    })
})