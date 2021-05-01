import 'jest';
import * as complexOperations from '../source/complexOperations';
import * as basicOperations from '../source/basicOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {

    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('when email is not an string', () => {
      const isStringMock = jest.spyOn(basicOperations, 'isString');
      isStringMock.mockReturnValue(false);

      expect(complexOperations.checkEmail(3)).toStrictEqual('The email should be an string');
      expect(isStringMock).toHaveBeenCalled();
    });

    it('when email is undefined', () => {
      expect(complexOperations.checkEmail(undefined)).toStrictEqual('The email should be an string');
    });

    it('when email has invalid format', () => {
      const isStringMock = jest.spyOn(basicOperations, 'isString');
      isStringMock.mockReturnValue(true);

      const validateEmailMock = jest.spyOn(basicOperations, 'validateEmail');
      validateEmailMock.mockReturnValue(false);

      expect(complexOperations.checkEmail('abc')).toStrictEqual('The email is invalid');
      expect(isStringMock).toHaveBeenCalled();
      expect(validateEmailMock).toHaveBeenCalled();
    });

    it('when email has valid format', () => {
      const isStringMock = jest.spyOn(basicOperations, 'isString');
      isStringMock.mockReturnValue(true);

      const validateEmailMock = jest.spyOn(basicOperations, 'validateEmail');
      validateEmailMock.mockReturnValue(true);

      expect(complexOperations.checkEmail('abc@gmail.com')).toStrictEqual('The email is valid');
      expect(isStringMock).toHaveBeenCalled();
      expect(validateEmailMock).toHaveBeenCalled();
    });
  });

  describe('calculateArea', () => {
    it('first test for calculateArea', () => {

    });
  });

  describe('sumGratherThan', () => {

    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('when (1, 1, 3) should return "2 is less than 3"', () => {
      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');
      isNumberMock.mockReturnValue(true);

      const sumMock = jest.spyOn(basicOperations, 'sum');
      sumMock.mockReturnValue(2);

      expect(complexOperations.sumGratherThan(1, 1, 3)).toStrictEqual('2 is less than 3');
      expect(isNumberMock).toHaveBeenCalledTimes(3);  
      expect(sumMock).toHaveBeenCalledTimes(1); 
    });

    it('when (1, 2, undefined) should return "The params should be numbers"', () => {
      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');
      isNumberMock.mockReturnValueOnce(true)
                  .mockReturnValueOnce(true)
                  .mockReturnValueOnce(false);

      expect(complexOperations.sumGratherThan(1, 2, undefined)).toStrictEqual('The params should be numbers');
      expect(isNumberMock).toHaveBeenCalledTimes(3);  
    });

    it('when (9, -1, 3) should return "8 is grather than 3"', () => {
      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');
      isNumberMock.mockReturnValue(true);

      const sumMock = jest.spyOn(basicOperations, 'sum');
      sumMock.mockReturnValue(8);

      expect(complexOperations.sumGratherThan(9, -1, 3)).toStrictEqual('8 is grather than 3');
      expect(isNumberMock).toHaveBeenCalledTimes(3);  
      expect(sumMock).toHaveBeenCalledTimes(1); 
    });

    it('when ([], 2, 3) should return "The params should be numbers"', () => {
      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');
      isNumberMock.mockReturnValue(false);

      expect(complexOperations.sumGratherThan([], 2, 3)).toStrictEqual('The params should be numbers');
      expect(isNumberMock).toHaveBeenCalledTimes(1);  
    });
  });

  describe('intersectionBetweenArrays', () => {

    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('when ([], "abc") should return "The params should be arrays"', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValue(false);

      expect(complexOperations.intersectionBetweenArrays([], 'abc')).toStrictEqual('The params should be arrays');
      expect(isArrayMock).toHaveBeenCalledTimes(1);
    });

    it('when (undefined, []) should return "The params should be arrays"', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValueOnce(true)
                 .mockReturnValueOnce(false);

      expect(complexOperations.intersectionBetweenArrays(undefined, [])).toStrictEqual('The params should be arrays');
      expect(isArrayMock).toHaveBeenCalledTimes(2);
    });

    it('when ([1,2,3], []) should return "There are not matching elements"', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValueOnce(true)
                 .mockReturnValueOnce(true);

      const arrayIntersectionMock = jest.spyOn(basicOperations, 'arrayIntersection');
      arrayIntersectionMock.mockReturnValue([]);

      expect(complexOperations.intersectionBetweenArrays([1,2,3], [])).toStrictEqual('There are not matching elements');
      expect(isArrayMock).toHaveBeenCalledTimes(2);
      expect(arrayIntersectionMock).toHaveBeenCalledTimes(1);
    });

    it('when ([1,4,5], [5,4,9]) should return [4,5]', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValueOnce(true)
                 .mockReturnValueOnce(true);

      const arrayIntersectionMock = jest.spyOn(basicOperations, 'arrayIntersection');
      arrayIntersectionMock.mockReturnValue([4,5]);

      expect(complexOperations.intersectionBetweenArrays([1,4,5], [5,4,9])).toEqual([4,5]);
      expect(isArrayMock).toHaveBeenCalledTimes(2);
      expect(arrayIntersectionMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('when ([1,2,3]) should return odd=2 and even=1', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValue(true);

      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');
      isNumberMock.mockReturnValue(true);

      const getOddNumbersFromArrayMock = jest.spyOn(basicOperations, 'getOddNumbersFromArray');
      getOddNumbersFromArrayMock.mockReturnValue([1,3]);

      const getEvenNumbersFromArrayMock = jest.spyOn(basicOperations, 'getEvenNumbersFromArray');
      getEvenNumbersFromArrayMock.mockReturnValue([2]);

      let matchObject = { 
          odd: 2, 
          even: 1
      };  

      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3])).toMatchObject(matchObject);
      expect(isArrayMock).toHaveBeenCalledTimes(1);
      expect(isNumberMock).toHaveBeenCalledTimes(3);
      expect(getOddNumbersFromArrayMock).toHaveBeenCalledTimes(1);
      expect(getEvenNumbersFromArrayMock).toHaveBeenCalledTimes(1);
    });

    it('when (["a",2]) should return "The array should have only numbers"', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValue(true);

      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');
      isNumberMock.mockReturnValue(false);

      expect(complexOperations.numberOfOddAndEvenNumbers(['a',2])).toStrictEqual('The array should have only numbers');
      expect(isArrayMock).toHaveBeenCalledTimes(1);
      expect(isNumberMock).toHaveBeenCalledTimes(1);
    });

    it('when ([]) should return odd=0 and even=0', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValue(true);

      const isNumberMock = jest.spyOn(basicOperations, 'isNumber');

      const getOddNumbersFromArrayMock = jest.spyOn(basicOperations, 'getOddNumbersFromArray');
      getOddNumbersFromArrayMock.mockReturnValue([]);

      const getEvenNumbersFromArrayMock = jest.spyOn(basicOperations, 'getEvenNumbersFromArray');
      getEvenNumbersFromArrayMock.mockReturnValue([]);

      let matchObject = { 
          odd: 0, 
          even: 0
      }; 

      expect(complexOperations.numberOfOddAndEvenNumbers([])).toMatchObject(matchObject);
      expect(isArrayMock).toHaveBeenCalledTimes(1);
      expect(isNumberMock).toHaveBeenCalledTimes(0);
      expect(getOddNumbersFromArrayMock).toHaveBeenCalledTimes(1);
      expect(getEvenNumbersFromArrayMock).toHaveBeenCalledTimes(1);
    });

    it('when (undefined) should return "The param should be an array"', () => {
      const isArrayMock = jest.spyOn(basicOperations, 'isArray');
      isArrayMock.mockReturnValue(false);

      expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toStrictEqual('The param should be an array');
      expect(isArrayMock).toHaveBeenCalledTimes(1);
    });
  });
});
