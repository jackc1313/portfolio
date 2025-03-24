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

document.getElementById("romanToArabButton").addEventListener("click", function() {
  const inputString = document.getElementById("romanToConvert").value;
  const arabNumber = romanToArab(inputString);
  document.getElementById("romanToArabOutput").textContent = arabNumber;
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

function romanToArab (roman) {
  const numArr = [];
  for(let i = 0; i < roman.length; i++)
  {
      switch(roman[i])
      {
          case 'M': if(roman.charAt(i - 1) == 'C'){
              numArr.push(900);
          } else {
              numArr.push(1000);
          }
          break;
          case 'D': if(roman.charAt(i - 1) == 'C'){
              numArr.push(400);
          } else {
              numArr.push(500);
          }
          break;
          case 'C': if(roman.charAt(i + 1) == 'M' || roman.charAt(i + 1) == 'D') {
              continue;
          } else if(roman.charAt(i - 1) == 'X') {
              numArr.push(90);
          }else{
              numArr.push(100);
          }
          break;
          case 'L': if(roman.charAt(i - 1) == 'X'){
              numArr.push(40);
          } else {
              numArr.push(50);
          }
          break;
          case 'X': if(roman.charAt(i + 1) == 'C' || roman.charAt(i + 1) == 'L') {
              continue;
          } else if(roman.charAt(i - 1) == 'I') {
              numArr.push(9);
          }else{
              numArr.push(10);
          }
          break;
          case 'V': if(roman.charAt(i - 1) == 'I'){
              numArr.push(4);
          } else {
              numArr.push(5);
          }
          break;
          case 'I': if(roman.charAt(i + 1) == 'X' || roman.charAt(i + 1) == 'V') {
              continue;
          }else{
              numArr.push(1);
          }
          break;
      }
  }
  let number = numArr.reduce((accum, current) => {
      return accum + current;
  }, 0);
  return number;
}

  // Script to toggle sidebar on mobile
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});
