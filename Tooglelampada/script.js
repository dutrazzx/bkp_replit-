// IDENTIFICAR OS ELEMENTOS DOM (ÁRVORE HTML)
const bntTrocar = document.getElementById('btn-trocar')
const lampada = document.getElementById('lampada')
let baseURL = "https://7e27bee3-3591-4a9c-a191-25955293ee05-00-1e8qya14qjwxz.picard.replit.dev/"

bntTrocar.addEventListener('click', function() {
  //alert(lampada.src == baseURL + "Lampada0.png")
  if (lampada.src == baseURL + "Lampada0.png") {
    lampada.src = "Lampada2.png"
  } else {
    lampada.src = "Lampada0.png"
  }
})



alert(lampada.src)
