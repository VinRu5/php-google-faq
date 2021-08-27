//Seleziono tutti le frecce
const arrowButtons = document.getElementsByClassName('arrow');

//Ciclo nelle frecce per selezionare ogni singola freccia
for (let x = 0; x < arrowButtons.length; x++) {
    
    //Ad ogni freccia collego un evento click
    arrowButtons[x].addEventListener('click', function () {
        
        //prendo il div con il contenuto del testo che segue la freccia 
        let paragraph = this.nextElementSibling;

        //verifico se visualizzare o non visualizzare il contenuto
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
        } else {

            paragraph.style.display = 'none';
        }

    })
}