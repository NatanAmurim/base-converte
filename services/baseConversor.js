const Stack = require('../models/stack');

class BaseConversor{
    
    static convertDecimalToBinary(number){
        const BINARY_BASE = 2;
        return this.convertDecimalToABase(number, BINARY_BASE);
    }

    static convertDecimalToHexadecimal(number){
        const HEXADECIMAL_BASE = 16;
        return this.convertDecimalToABase(number, HEXADECIMAL_BASE);
    }

    static convertDecimalToABase(number, base){
        const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let numberToConvert = number;
        const BASE_TO_CONVERT = base;
        const queueBaseDigits = new Stack();
        
        if (base < 0 || base > 36)
            return 'This program only works with bases between 2 and 36.';
        
        while (numberToConvert > 0){
            let remain = Math.floor(numberToConvert % BASE_TO_CONVERT);
            queueBaseDigits.push(remain);
            numberToConvert = Math.floor(numberToConvert / BASE_TO_CONVERT);            
        }  

        let baseConverted = '';
        while (queueBaseDigits.size() > 0){
            baseConverted += digits[queueBaseDigits.pop()];
        }

        return baseConverted;
    }

    
}

module.exports = BaseConversor;