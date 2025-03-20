document.getElementById("camelButton").addEventListener("click", function() {
    const inputString = document.getElementById("stringToConvertToCamelC").value;
    const camelCaseString = toCamelCase(inputString);
    document.getElementById("camelOutput").textContent = camelCaseString;
})

document.getElementById("spinButton").addEventListener("click", function() {
    const inputString = document.getElementById("wordsToSpin").value;
    const spinnedSentence = spinWords(inputString);
    document.getElementById("spinOutput").textContent = spinnedSentence;
})


function toCamelCase(str){
    let arr = [];
    for(let i = 0; i< str.length; i++)
      {
        if(str[i]==="-" || str[i]==="_")
          {
            arr.push(str[i+1].toUpperCase());
          }
        arr.push(str[i]);
      }
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i]==="-" || arr[i]==="_")
        arr.splice(i, 2);
    }
    let newStr = arr.join("");
    return newStr;
  }

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

  // Script to toggle sidebar on mobile
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});
