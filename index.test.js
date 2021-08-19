const {myPushFunction} = require('./index')

describe('myPushFunction()', ()=>{
    test('does not use the push method', ()=>{
        const array = ['module', 'one', 'is', 'finally', 'over'];
        const element = 'yas';  
        const funcString = myPushFunction(array, element).toString();
        expect(funcString.includes(".push")).toBe(false)
    })
    test('returns the new length of the array', ()=>{
        const array = ['module', 'one', 'is', 'finally', 'over'];
        const element = 'yas';
        expect(myPushFunction(array, element)).toEqual(6);
    });
    
    test('mutates the original array', ()=> {
        const array = ['module', 'one', 'is', 'finally', 'over'];
        const element = 'yas';
        myPushFunction(array,element);
        expect(array.length).toEqual(6);
    })

    test('adds an element to the end of the array', ()=> {
        const array = ['module', 'one', 'is', 'finally', 'over'];
        const element = 'yas';
        myPushFunction(array,element);
        expect(array[array.length-1]).toEqual('yas');
    })

    test('adds multiple elements to the end of the array', ()=>{
        expect(myPushFunction([1,2,3,4,5],6,7,8)).toBe(8);
    })
})