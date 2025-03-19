document.getElementById("camelButton").addEventListener("click", function() {
    const inputString = document.getElementById("stringToConvertToCamelC").value;
    const camelCaseString = toCamelCase(inputString);
    document.getElementById("output").textContent = camelCaseString;
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

  // Script to toggle sidebar on mobile
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});
