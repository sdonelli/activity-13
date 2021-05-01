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