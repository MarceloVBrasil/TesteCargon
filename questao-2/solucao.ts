// por definição temos que:
// ransom_note length >= 1
// magazine length <= 105
// as letras são sempre minúsculas

function canConstruct(ransomNote: string, magazine: string): boolean {
    // se magazine for vazia, automaticamente o resultado é falso, pois ransom_note não é vazio por definição
    if (isStringEmpty(magazine)) return false

    const magazineLetters = getWordLetters(magazine)
    // para cada letra de ransom_note, checar se ela existe nas letras de magazine.
    // se não existir, retornar resultado falso
    // caso contrário, remover a letra de magazine
    for (let character of ransomNote) {
        const letterIndex = magazineLetters.findIndex(letter => letter == character)
        if (!doesLetterBelongToWord(character, magazineLetters)) return false
        else removeLetterFromWordAtIndex(letterIndex, magazineLetters)
    }
    // após não sobrar mais nenhuma letra em ramson_note, temos que o resultado é verdadeiro
    return true;
};

function isStringEmpty(string: string): boolean {
    return string == ''
}

function getWordLetters(word: string): string[] {
    return word.split('')
}

function doesLetterBelongToWord(letter: string, wordLetters: string[]): boolean {
    // Não é necessário checar se a letra é maiúscula ou minúscula
    // visto que na definição do problema diz que as letras são sempre minúsculas
    return wordLetters.includes(letter)
}

function removeLetterFromWordAtIndex(letterIndex: number, wordLetters: string[]): void {
    wordLetters.splice(letterIndex, 1)
}

console.log(canConstruct("a", "b"))    // devee retornar: false
console.log(canConstruct("aa", "ab"))  // deve retornar: false
console.log(canConstruct("aa", "aab")) // deve retornar: true