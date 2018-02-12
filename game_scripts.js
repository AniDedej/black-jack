let numberContainer = document.querySelector("#numberContainer");
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number;
let randomNumber = document.getElementById('random_number');
let user_input_number = document.getElementById('user_input_number').value;
let resultat = document.getElementById('resultat');
let userNumber = document.getElementById('user_number');
let danger = document.body;
danger.style.textColor = 'orange';
user_input_number = "";

for (let i = 0; i < numbersArray.length; i++) {
    number = document.createElement("button");
    number.classList.add("col-4","bttn");
    number.id = "number" + numbersArray[i];
    number.innerHTML = numbersArray[i];
    number.value = numbersArray[i];

    numberContainer.appendChild(number);
}
let n1 = document.getElementById("number1");
let n2 = document.getElementById("number2");
let n3 = document.getElementById("number3");
let n4 = document.getElementById("number4");
let n5 = document.getElementById("number5");
let n6 = document.getElementById("number6");
let n7 = document.getElementById("number7");
let n8 = document.getElementById("number8");
let n9 = document.getElementById("number9");

console.log(user_input_number);

n1.addEventListener("click", function () {
    user_input_number = n1.value;
});
n2.addEventListener("click", function () {
    user_input_number = n2.value;
});
n3.addEventListener("click", function () {
    user_input_number = n3.value;
});
n4.addEventListener("click", function () {
    user_input_number = n4.value;
});
n5.addEventListener("click", function () {
    user_input_number = n5.value;
});
n6.addEventListener("click", function () {
    user_input_number = n6.value;
});
n7.addEventListener("click", function () {
    user_input_number = n7.value;
});
n8.addEventListener("click", function () {
    user_input_number = n8.value;
});
n9.addEventListener("click", function () {
    user_input_number = n9.value;
});

function result() {
    let randomNumberMath = Math.floor(Math.random() * 9 + 1);
    if (user_input_number == "" | user_input_number < n1.value | user_input_number > n9.value) {
        resultat.color = danger;
        resultat.innerHTML = "Entrée un numéro valable de 1 à 9 !";
        userNumber.innerHTML = "";
        randomNumber.innerHTML = "";
        user_input_number = "";
    }else if (user_input_number > randomNumberMath) {
        resultat.innerHTML = "Vous avez gagner !";
        document.getElementById('user_input_number').value = "";
        userNumber.innerHTML = "Votre numéro est :" + " "+ user_input_number;
        randomNumber.innerHTML = "Le numéro de votre rival est :" +" " + randomNumberMath;
        user_input_number = "";
    }else {
        resultat.innerHTML = "Vous avez perdu !";
        document.getElementById('user_input_number').value = "";
        userNumber.innerHTML = "Votre numéro est :" + " "+ user_input_number;
        randomNumber.innerHTML = "Le numéro de votre rival est :" +" " + randomNumberMath;
        user_input_number = "";
    }

}
