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
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    });
  });
});
