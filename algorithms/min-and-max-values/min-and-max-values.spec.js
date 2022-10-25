import { ExtractMinAndMaxValuesFromArray } from "./min-and-max-values"

describe('ExtractMinAndMaxValues', () => {
    it('should return minimum and maximum values of a given array', () => {
        expect(ExtractMinAndMaxValuesFromArray([5897, 2784, 738, 16, 738, 783, 78, 13])).toEqual({min: 13, max: 5897})
    })
})