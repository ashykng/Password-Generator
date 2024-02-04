function copy() {
    let copyText = document.getElementById("result");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}

function generate(){
    const length = document.getElementById("length").value;
    const lowercaseIncluded = document.getElementById("lowercase").checked;
    const uppercaseIncluded = document.getElementById("uppercase").checked;
    const numbersIncluded = document.getElementById("numbers").checked;
    const symbolsIncluded = document.getElementById("symbols").checked;
    const result = document.getElementById("result");

    let password = "";
    let allowedChars = "";

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-={}[];'|`~/?,.:;<>";

    if(lowercaseIncluded)
        allowedChars += lowercaseIncluded ? lowercase: "";

    if(uppercaseIncluded)
        allowedChars += uppercaseIncluded ? uppercase: "";

    if(numbersIncluded)
        allowedChars += numbersIncluded ? numbers: "";

    if(symbolsIncluded)
        allowedChars += symbolsIncluded ? symbols: "";

    if(allowedChars.length === 0)
        window.alert("Choose at least one of the options!!!");

    for(let i = length; i > 0; i--){
        password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }

    result.value = password;
}