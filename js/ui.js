//Category
const selectCategory=document.querySelectorAll('.selectCategory button');
const category = document.querySelector('.selectCategory')

//Option 
const option_list = document.querySelector(".option_list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

//Quiz Box
const quiz_box = document.querySelector('.quiz_box')
const time_text = document.querySelector(".time_text");
const time_second = document.querySelector(".time_second");
const time_line = document.querySelector('.time_line');
const card_footer = document.querySelector('.card-footer')
const question_text =document.querySelector('.question_text')
   
//Text
const selcetText = document.querySelector('.select');


//Score Box
const score_box = document.querySelector('.score_box')
const btn_quit = document.querySelector('.btn_quit')



//Question Display
function soruGoster (soru,id){
    //Soru Metnin
    question_text .innerHTML = `<span>${soru.soruMetni}</span>`;

    //Soru İndex && 
    card_footer.innerHTML = `
    <span id="index"></span>
    <button id="${id}" class="none">Sonraki Soru</button>`;
    const nextbtn = document.querySelector('.card-footer button')
    nextbtn.setAttribute("onclick","nextbtn(this)");

    //Cevap Şıkları
    let html ="";
    for(let cevap in soru.cevapSecenekleri){
        html +=  
    `<div class="option" id=${id}>
         <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
     </div>`

    
    }
    option_list.innerHTML =html;
    const option = document.querySelectorAll(".option");
    option.forEach(element => {
        element.setAttribute("onclick", "optionSelected(this)")
    });
    
    }


//Show Number Of Questions
function soruSayisiniGoster (soruSirasi, toplamSoru) {
        let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
        document.querySelector(".quiz_box #index ") .innerHTML = tag;
}

//Show Score
skoruGoster = function(toplamSoru, dogruCevap) {
    let tag = `Toplam ${toplamSoru} Sorudan ${dogruCevap} Doğru Cevap Verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}
