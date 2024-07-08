// por definição temos que:
// ransom_note length >= 1
// magazine length <= 105
// as letras são sempre minúsculas
function canConstruct(ransomNote, magazine) {
    // se magazine for vazia, automaticamente o resultado é falso, pois ransom_note não é vazio por definição
    if (isStringEmpty(magazine))
        return false;
    var magazineLetters = getWordLetters(magazine);
    var _loop_1 = function (character) {
        var letterIndex = magazineLetters.findIndex(function (letter) { return letter == character; });
        if (!doesLetterBelongToWord(character, magazineLetters))
            return { value: false };
        else
            removeLetterFromWordAtIndex(letterIndex, magazineLetters);
    };
    // para cada letra de ransom_note, checar se ela existe nas letras de magazine.
    // se não existir, retornar resultado falso
    // caso contrário, remover a letra de magazine
    for (var _i = 0, ransomNote_1 = ransomNote; _i < ransomNote_1.length; _i++) {
        var character = ransomNote_1[_i];
        var state_1 = _loop_1(character);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    // após não sobrar mais nenhuma letra em ramson_note, temos que o resultado é verdadeiro
    return true;
}
;
function isStringEmpty(string) {
    return string == '';
}
function getWordLetters(word) {
    return word.split('');
}
function doesLetterBelongToWord(letter, wordLetters) {
    // Não é necessário checar se a letra é maiúscula ou minúscula
    // visto que na definição do problema diz que as letras são sempre minúsculas
    return wordLetters.includes(letter);
}
function removeLetterFromWordAtIndex(letterIndex, wordLetters) {
    wordLetters.splice(letterIndex, 1);
}
console.log(canConstruct("a", "b")); // devee retornar: false
console.log(canConstruct("aa", "ab")); // deve retornar: false
console.log(canConstruct("aa", "aab")); // deve retornar: true
