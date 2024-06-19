let button = document.getElementById('openBtn')

let span = document.getElementById('close')

let modal = document.getElementById('adres') 

button.onclick = function(){
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

let adresButton = document.getElementById('adresBtn') 
adresButton.addEventListener('click', function(){
    let a = document.getElementById('text').value;
    let b = document.getElementById('text')
    let a1 = document.getElementById('text1').value;
    let b1 = document.getElementById('text1')
    let a2 = document.getElementById('text2').value;
    let b2 = document.getElementById('text2')

    if (a === '') {
        b.style.borderColor = 'red'
    }else if (a1 === '') {
        b1.style.borderColor = 'red'
    }else if (a2 === '') {
        b2.style.borderColor = 'red'
    }
    else{
        window.location.href = 'address.html'
    }
})