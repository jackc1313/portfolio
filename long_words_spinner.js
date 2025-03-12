//Write a function that takes in a string of one or more words, 
//and returns the same string, but with all words that
//have five or more letters reversed 

function spinWords(string) {
    const stringArr = string.split(" ");
    const newArray = [];
    for(let word of stringArr)
    {
        if(word.length < 5)
            newArray.push(word);
        else
        {
            const wordArray = word.split('');
            const reversedArray = [];
            for(let i = 0; i <= word.length; i++)
            {
                reversedArray.unshift(wordArray[i]);
            }
            let reversedWord = reversedArray.join('');
            newArray.push(reversedWord);
        }
    }
    let reverseString = newArray.join(' ');
    return reverseString;
}

console.log(spinWords("Idee verdi non sono senza colore"));