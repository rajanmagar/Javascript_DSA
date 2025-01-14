// Mobile phone keypads are laid out something like this:

// -------------------------
// |       |  ABC  |  DEF  |
// |   1   |   2   |   3   |
// -------------------------
// |  GHI  |  JKL  |  MNO  |
// |   4   |   5   |   6   |
// -------------------------
// | PQRS  |  TUV  | WXYZ  |
// |   7   |   8   |   9   |
// -------------------------
// |       |       |       |
// |   *   |   0   |   #   |
// -------------------------

// Almost every digit is associated with some letters in the alphabet, and this allows certain phone numbers to spell out actual words. For example, the phone number
// 846-474-7328 can be written as tim-isg-reat, or timisgreat. Similarly, the phone number 2686463 can write out antoine, or ant6463.

// It's important to note that a phone number does not represent a single sequence of letters, but rather multiple possible combinations of letters. For example,
// the number 2 can represent three possible letters: a, b, or c.

// A mnemonic is defined as a pattern of letters, ideas, or associations which assist in remembering something. Companines often use a mnemonic for their phone number
// to make it easier to remember.

// Given a stringified phone number of any non-zero length, write a function which returns all possible mnemonics for this phone number, in any order.

// For this problem, a valid mnemonic may only contain letters and the digits 0 and 1. In other words, if a digit is able to be represented by a letter, then it must be.
// Digits 0 and 1 are the only two digits which do not have letter representations on the keypad.

// The ASCII keypad above may be referenced for digit-letter associations.

// Sample Input:
// phoneNumber = "1905"

// Sample Output:
// ["1w0j", "1w0k", "1w0l", "1x0j", "1x0k", "1x0l", "1y0j", "1y0k", "1y0l", "1z0j", "1z0k", "1z0l",] These may be ordered differently

// Solution 1:

// recursive solution building out all possible mnemonic combinations via provided phoneNumber, referencing JS object number:letters key:value pairings.

// O(4^n * n) time due to at most 4 operations per n digit in phone number, and where n is length of given phoneNumber
// O(4^n * n) space due to storing at most 4 operations per n digit in phone number within new array, and where n is length of given phoneNumber

const DIGIT_LETTERS = {
    0: ['0'],
    1: ['1'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

function phoneNumberMnemonics(phoneNumber) {
    let currentMnemonic = new Array(phoneNumber.length).fill('0');
    let mnemonicsFound = [];

    phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound);
    return mnemonicsFound;
}

function phoneNumberMnemonicsHelper(idx, phoneNumber, currentMnemonic, mnemonicsFound) {
    // base case
    if (idx === phoneNumber.length) {
        let mnemonic = currentMnemonic.join('');
        mnemonicsFound.push(mnemonic);
    // recursive case
    } else {
        let digit = phoneNumber[idx];
        let letters = DIGIT_LETTERS[digit];

        for (let letter of letters) {
            currentMnemonic[idx] = letter;
            phoneNumberMnemonicsHelper(idx + 1, phoneNumber, currentMnemonic, mnemonicsFound);
        }
    }
}