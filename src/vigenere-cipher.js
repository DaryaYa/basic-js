const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].join('');

// C[i] = (P[i] + K[j]) % 26;
// C[i] - letter of cipher text;
// P[i] - letter of plain text;
// K[j] - j-th letter of the key; 

class VigenereCipheringMachine {


    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
        }        
        let cipherText = '';
        
        message = message.toUpperCase();
        key = key.toUpperCase();
     
        for (let i = 0, j = 0; i < message.length; i++, j++) {
          if (LETTERS.includes(message[i])) {
                let index = (LETTERS.indexOf(message[i]) + LETTERS.indexOf(key.charAt(j % key.length))) % LETTERS.length;
                cipherText += LETTERS[index];
            } else {
                j-- ;
                cipherText += message[i];
            }
        }
        return (this.direct === false) ? cipherText.split('').reverse().join('') : cipherText;
    }

    decrypt(text, key) {
        if (!text || !key) {
      throw new Error();
        }
      let cipherText = '';
      
      text = text.toUpperCase();
      key = key.toUpperCase();
      
      for (let i = 0, j = 0; i < text.length; i++, j++) {
            if (LETTERS.includes(text[i])) {
                let index = ((LETTERS.indexOf(text[i]) + LETTERS.length) - LETTERS.indexOf(key.charAt(j % key.length))) % LETTERS.length;
                cipherText += LETTERS[index];
            } else {
                j--;
                cipherText += text[i];
            }
        }
        return (this.direct === false) ? cipherText.split('').reverse().join('') : cipherText;
    }
}

module.exports = VigenereCipheringMachine;
