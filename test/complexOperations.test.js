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
    it('first test for sumGratherThan', () => {

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
