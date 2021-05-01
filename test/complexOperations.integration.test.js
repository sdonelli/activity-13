import 'jest';
import * as complexOperations from '../source/complexOperations';

describe('complexOperation - Integration Tests', () => {
    describe('checkEmail', () => {
  
      it('when email is not an string', () => {
        expect(complexOperations.checkEmail(3)).toStrictEqual('The email should be an string');
      });
  
      it('when email is undefined', () => {
        expect(complexOperations.checkEmail(undefined)).toStrictEqual('The email should be an string');
      });
  
      it('when email has invalid format', () => {
        expect(complexOperations.checkEmail('abc@')).toStrictEqual('The email is invalid');
      }); 
  
      it('when email has valid format', () => {
        expect(complexOperations.checkEmail('abc@gmail.com')).toStrictEqual('The email is valid');
      });
    });
  
    describe('calculateArea', () => {
      it('first test for calculateArea', () => {
  
      });
    });
  
    describe('sumGratherThan', () => {

      it('when (1, 2, 3) should return "3 is less than 3"', () => {
        expect(complexOperations.sumGratherThan(1, 2, 3)).toBe('3 is less than 3');  
      });

      it('when (1, 2, undefined) should return "The params should be numbers"', () => {
        expect(complexOperations.sumGratherThan(1, 2, undefined)).toStrictEqual('The params should be numbers'); 
      });

      it('when (9, -1, 3) should return "8 is grather than 3"', () => {
        expect(complexOperations.sumGratherThan(9, -1, 3)).toBe('8 is grather than 3');
      });

      it('when ([], 2, 3) should return "The params should be numbers"', () => {
        expect(complexOperations.sumGratherThan([], 2, 3)).toStrictEqual('The params should be numbers');
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