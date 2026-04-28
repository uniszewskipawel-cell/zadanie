const GUZIK1 = document.querySelector('.guzik1')
const GUZIK2 = document.querySelector('.guzik2')
const GUZIK3 = document.querySelector('.guzik3')
const RESTART = document.querySelector('.guzikRestart')
const PYTANIE1 = document.querySelector('#DivPytanie1')
const PYTANIE2 = document.querySelector('#DivPytanie2')
const PYTANIE3 = document.querySelector('#DivPytanie3')
const WYNIK = document.querySelector('#DivWynik')
const PWYNIK = document.querySelector('#Pwynik')

let odpowiedzi = ''

document.querySelectorAll('.guzik1').forEach(button => {
  button.addEventListener('click', function(e) {
    odpowiedzi += e.target.value
    console.log(odpowiedzi)
    PYTANIE1.style.display = 'none'
    PYTANIE2.style.display = 'block'
  })
})

document.querySelectorAll('.guzik2').forEach(button => {
  button.addEventListener('click', function(e) {
    odpowiedzi += e.target.value
    console.log(odpowiedzi)
    PYTANIE2.style.display = 'none'
    PYTANIE3.style.display = 'block'
  })
})

document.querySelectorAll('.guzik3').forEach(button => {
  button.addEventListener('click', function(e) {
    odpowiedzi += e.target.value
    console.log(odpowiedzi)
    PYTANIE3.style.display = 'none'
    WYNIK.style.display = 'block'
    if(odpowiedzi == 'NieSprzedazLokalnie'){
          PWYNIK.innerHTML = 'Sklep internetowy'
        }else if(odpowiedzi == 'NieSprzedazOgolnopolski'){
          PWYNIK.innerHTML = 'Sklep internetowy'
        }else if(odpowiedzi == 'NiePozyskiwanieLokalnie'){
            PWYNIK.innerHTML = 'Strona firmowa + WIzytówka GOOGLE'
        }else if(odpowiedzi == 'NiePozyskiwanieOgolnopolski'){
            PWYNIK.innerHTML = 'Strona firmowa + Pozycjonowanie(SEO)'
        }else if(odpowiedzi == 'NieBudowaOgolnopolski'){
            PWYNIK.innerHTML = 'Strona firmowa + Facebook (Social Media)'
        }else if(odpowiedzi == 'NieBudowaLokalnie'){
            PWYNIK.innerHTML = 'Strona firmowa + Facebook (Social Media)'
        }else if(odpowiedzi == 'TakSprzedazLokalnie'){
            PWYNIK.innerHTML = 'Pozycjonowanie (SEO) / Audyt sklepu'
        }else if(odpowiedzi == 'TakSprzedazOgolnopolski'){
            PWYNIK.innerHTML = 'Pozycjonowanie (SEO) / Audyt sklepu'
        }else if(odpowiedzi == 'TakPozyskiwanieLokalnie'){
            PWYNIK.innerHTML = 'Wizytówka GOOGLE + Promocja wizytówki (Ads)'
        }else if(odpowiedzi == 'TakPozyskiwanieOgolnopolski'){
            PWYNIK.innerHTML = 'Pozycjonowanie (SEO)'
        }else if(odpowiedzi == 'TakBudowaLokalnie'){
            PWYNIK.innerHTML = 'Facebook (Prowadzenie + Ads)'
        }else if(odpowiedzi == 'TakBudowaOgolnopolski'){
            PWYNIK.innerHTML = 'Facebook (Prowadzenie + Ads)'
        }
  })
})

RESTART.addEventListener('click', function(e){
  odpowiedzi = ''
  PYTANIE1.style.display ='block'
  WYNIK.style.display = 'none'
})