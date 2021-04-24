//localStorage.setItem(); armazenar
//localStorage.getItem(); pegar o item armazenado
//localStorage.removeItem(); remover o item armazenado


function raffle(){
    let inputValue = document.getElementById("number").value 
    let raffleOne = Math.ceil(Math.random() * inputValue)
    let modal = document.getElementById("modal")

    if (modal.className === "modalOpen"){
        showResult(raffleOne)
    }
    else{
        openModal()
        showResult(raffleOne)
    }
}

function openModal(){
    let modal = document.getElementById("modal")
    modal.className = "modalOpen"
}

function showResult(result){
    let resultElement = document.getElementById("result")
    resultElement.innerText = "..."
    setTimeout(()=>{
        resultElement.innerText = result
    }, 300)
}

function closeModal(){
    let modal = document.getElementById("modal")
    modal.className = "modalClosed"
}







