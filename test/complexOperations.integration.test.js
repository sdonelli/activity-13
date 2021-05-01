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
      it('when ([], "abc") should return "The params should be arrays"', () => {
          expect(complexOperations.intersectionBetweenArrays([], 'abc')).toStrictEqual('The params should be arrays');
      });

      it('when (123, []) should return "The params should be arrays"', () => {
        expect(complexOperations.intersectionBetweenArrays(123, [])).toStrictEqual('The params should be arrays');
      });

      it('when ([], []) should return "There are not matching elements"', () => {
        expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual('There are not matching elements');
      });

      it('when ([1,4,5], [5,7,9]) should return [5]', () => {
        expect(complexOperations.intersectionBetweenArrays([1,4,5], [5,7,9])).toEqual([5]);
      });
    });
  
    describe('sortArrayOfObjectsByKey', () => {
      it('when sort by age', () => {
        let expectedArray = [ 
          { age: 6, name: 'Leite' }, 
          { age: 10, name: 'Tom' } 
        ];

        let paramArray = [
          { age: 10, name: 'Tom'},
          { age: 6, name: 'Leite'}
        ];
        
        expect(complexOperations.sortArrayOfObjectsByKey(paramArray, 'age')).toEqual(expectedArray);  
      });

      it('when sort by name', () => {
        let expectedArray = [ 
          { name: 'Leite' }, 
          { name: 'Leite' }, 
          { name: 'Tom' }, 
          { name: 'Zoe' }
        ];

        let paramArray = [
          { name: 'Leite' },
          { name: 'Tom'},
          { name: 'Zoe'},
          { name: 'Leite'}
        ];
        
        expect(complexOperations.sortArrayOfObjectsByKey(paramArray, 'name')).toEqual(expectedArray);  
      });

      it('when first element is not an array', () => {
        expect(complexOperations.sortArrayOfObjectsByKey('abc', 'age')).toStrictEqual('The first param should be an array');  
      });

      it('when key is undefined', () => {
        let paramArray = [
          { age: 10, name: 'Tom'},
          { age: 6, name: 'Leite'}
        ];
        
        expect(complexOperations.sortArrayOfObjectsByKey(paramArray, undefined)).toStrictEqual('The second param should be an string');  
      });

      it('when key is not an string', () => {
        let paramArray = [
          { age: 10, name: 'Tom'},
          { age: 6, name: 'Leite'}
        ];
        
        expect(complexOperations.sortArrayOfObjectsByKey(paramArray, 123)).toStrictEqual('The second param should be an string');  
      });

      it('when one element on the array does not have the key property', () => {
        let paramArray = [
          { age: 10, name: 'Tom'},
          { age: 6 }
        ];
        
        expect(complexOperations.sortArrayOfObjectsByKey(paramArray, 'name')).toStrictEqual('Some elements in the array does not have the name property');  
      });
    });
  
    describe('numberOfOddAndEvenNumbers', () => {
      it('when ([1,2,3,4]) should return odd=2 and even=2', () => {
        let matchObject = { 
            odd: 2, 
            even: 2
        };  

        expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,4])).toMatchObject(matchObject);
      });

      it('when (["a",2]) should return "The array should have only numbers"', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers(['a',2])).toStrictEqual('The array should have only numbers');
      });

      it('when ([]) should return odd=0 and even=0', () => {
        let matchObject = { 
            odd: 0, 
            even: 0
        }; 

        expect(complexOperations.numberOfOddAndEvenNumbers([])).toMatchObject(matchObject);
      });

      it('when (undefined) should return "The param should be an array"', () => {
        expect(complexOperations.numberOfOddAndEvenNumbers(undefined)).toStrictEqual('The param should be an array');
      });
    });
  });