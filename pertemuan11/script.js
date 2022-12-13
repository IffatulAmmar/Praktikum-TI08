let kertas = document.querySelector("#kertas");
let gunting = document.querySelector("#gunting");
let batu = document.querySelector("#batu");
let computerChoice = document.querySelector("#computerChoice");

// function untuk computer choice
const selectChoice = () => { //arrow function
    const option = ["kertas","gunting","batu"];
    const result = option[Math.floor(Math.random()*3)];
    
    return result;
}

batu.addEventListener('click', () => {
    let choice = selectChoice();
    computerChoice.innerHTML = choice;

    setTimeout(() => {
        switch (choice) {
            case "batu":
                alert ("seri");
                break;
        
            case "gunting":
                alert ("kamu menang");
                break;
        
            default:
                alert ("computer Menang");
                break;
        }
    }, 300);
});

gunting.addEventListener('click', () => {
    let choice = selectChoice();
    computerChoice.innerHTML = choice;

    setTimeout(() => {
        switch (choice) {
            case "batu":
                alert ("computer menang");
                break;
        
            case "gunting":
                alert ("seri");
                break;
        
            default:
                alert ("kamu menang");
                break;
        }
    }, 300);
});

kertas.addEventListener('click', () => {
    let choice = selectChoice();
    computerChoice.innerHTML = choice;

    setTimeout(() => {
        switch (choice) {
            case "batu":
                alert ("kamu menang");
                break;
        
            case "gunting":
                alert ("computer menang");
                break;
        
            default:
                alert ("serii");
                break;
        }
    }, 300);
});

    