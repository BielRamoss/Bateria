//DETECTA O BOTAO QUE FOI PRESSIONADO

var numberOfDrumButtons = document.querySelectorAll(".drum").length; //cria uma variável que é igual ao comprimento de elementos html com a classe drum

for (var i = 0; i < numberOfDrumButtons; i++) { //cria uma função que conta de 0 até o tamanho da variável numberOfDrumButtons, nesse caso 6 (0 a 6)

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { //vai "escutar" todos os elementos com a classe drum e executar a função ao "ouvir" um click

        var buttonInnerHTML = this.innerHTML; //armazena o valor da tag html que foi clicado 

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

//DETECTA A TECLA PRESSIONADA

document.addEventListener("keypress", function (event) { /*Todo o documento tera um eventListener: 
                                                            Quando alguma tecla for pressionada, ele chama
                                                            a função (event), que por sua vez chamara
                                                            a função makeSound*/
    makeSound(event.key);

    buttonAnimation(event.key);

});

function makeSound(key) { //Função makeSound com parametro da tecla pressionada
    
    switch (key) { // realiza o "case" que foi armazenado no parametro key
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey); //Armazena a tecla que foi pressionada com um . antes (class do botao)

    activeButton.classList.add("pressed"); //Adiciona a class pressed (css) no html do botao pressionado.

    setTimeout(function() { //Adiciona uma animação que REMOVE a class "pressed" do botao pressionado. 
        activeButton.classList.remove("pressed");
    }, 100);

}