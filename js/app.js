
//Creating a Quiz
const artQuiz = new Quiz(art);
const sportQuiz = new Quiz(sport);
const scienceQuiz = new Quiz(science);


//Start Quiz
for(let button of selectCategory){


    button.addEventListener("click",function(){
        starTimer(10)
        startTimerLine()
       
     
     wiewController();
        switch(button.id){
            case 'art':
                soruGoster(artQuiz.soruGetir(),button.id);
                soruSayisiniGoster(artQuiz.soruIndex + 1, artQuiz.sorular.length);
                break;
            case 'sport':
                soruGoster(sportQuiz.soruGetir(),button.id);
                soruSayisiniGoster(artQuiz.soruIndex + 1, artQuiz.sorular.length);
            break;
            default:soruGoster(scienceQuiz.soruGetir(),button.id);
            soruSayisiniGoster(artQuiz.soruIndex + 1, artQuiz.sorular.length);

        }
   
      
    })
}


//Progress Putton
function nextbtn(element){
  
    element.classList.add('none')
  switch(element.id){
    
    case 'art':    
      if(artQuiz.sorular.length != artQuiz.soruIndex+1){
        soruGoster(artQuiz.soruGetir(artQuiz.soruIndex++),"art")
        soruSayisiniGoster(artQuiz.soruIndex + 1, artQuiz.sorular.length);
       
    }
    else{
        quiz_box.classList.add('none')
        score_box.classList.remove('none');
        skoruGoster(artQuiz.sorular.length, artQuiz.dogruCevapSayisi);
    }
    break;
    case 'sport':
        if(sportQuiz.sorular.length != sportQuiz.soruIndex+1){
            soruGoster(sportQuiz.soruGetir(sportQuiz.soruIndex++),"sport")
            soruSayisiniGoster(sportQuiz.soruIndex + 1, sportQuiz.sorular.length);
           
        }
        else{
            quiz_box.classList.add('none')
            score_box.classList.remove('none');
            skoruGoster(sportQuiz.sorular.length, sportQuiz.dogruCevapSayisi);
        }
        break;
    default:
        if(scienceQuiz.sorular.length != scienceQuiz.soruIndex+1){
            soruGoster(scienceQuiz.soruGetir(scienceQuiz.soruIndex++),"science")
            soruSayisiniGoster(scienceQuiz.soruIndex + 1, scienceQuiz.sorular.length);
          
           
        }
        else{
            quiz_box.classList.add('none')
            score_box.classList.remove('none');
            skoruGoster(scienceQuiz.sorular.length, scienceQuiz.dogruCevapSayisi);
        }
        break;
  
       
  }
  clearInterval(counter);
  clearInterval(counterLine)
  starTimer(10)
  startTimerLine();
}




// Option Control
function optionSelected(option){
    correctAnswerShow()
    clearInterval(counter);
    clearInterval(counterLine)
    switch(option.id){
        case 'art':
            let artCevap = option.querySelector("span b").textContent;
            let artSoru = artQuiz.soruGetir();
    
            if(artSoru.cevabiKontrolEt(artCevap)){
                artQuiz.dogruCevapSayisi +=1;
                option.classList.add("correct");
          
               
            }
            else{
                option.classList.add("incorrect");
                option.insertAdjacentHTML("beforeend", incorrectIcon);
              

            }
            break;
        case 'sport':
             let sportCevap = option.querySelector("span b").textContent;
             let sportSoru = sportQuiz.soruGetir();
                if(sportSoru.cevabiKontrolEt(sportCevap)){
                    sportQuiz.dogruCevapSayisi +=1;
                    option.classList.add("correct");
                   
    
                }
                else{
                    option.classList.add("incorrect");
                    option.insertAdjacentHTML("beforeend", incorrectIcon);
    
                }
            break;
        default:
            let sciencetCevap = option.querySelector("span b").textContent;
            let scienceSoru = scienceQuiz.soruGetir();
               if(scienceSoru.cevabiKontrolEt(sciencetCevap)){
                   scienceQuiz.dogruCevapSayisi +=1;
                   option.classList.add("correct");
               
   
               }
               else{
                   option.classList.add("incorrect");
                   option.insertAdjacentHTML("beforeend", incorrectIcon);
   
               }
        
              
    }
    for(let i=0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }

const nextBtn = document.querySelector('.card-footer button')
   nextBtn.classList.remove('none')
  
}


//Timer
let counter;
function starTimer(time){

    counter = setInterval(timer,1000)

    function timer(){
        time_second.textContent = time;
        time--;
        time_text.textContent= "Kalan Süre"
        if(time<0){
            clearInterval(counter);
            time_second.textContent=""
            let cevap = artQuiz.soruGetir().dogruCevap;
            let cevap2 = sportQuiz.soruGetir().dogruCevap;
            let cevap3= scienceQuiz.soruGetir().dogruCevap;
            time_text.textContent= "Süre Bitti"
            for(let option of option_list.children) {
                switch(option.id){
                    case 'art':
                        if(option.querySelector("span b").textContent == cevap) {
                            option.classList.add("correct");
                            option.insertAdjacentHTML("beforeend", correctIcon);
                            
                        }
                        break;
                    case 'sport':
                        if(option.querySelector("span b").textContent == cevap2) {
                        option.classList.add("correct");
                        option.insertAdjacentHTML("beforeend", correctIcon);
                        }
                       break;
                    default:
                      if(option.querySelector("span b").textContent == cevap3) {
                        option.classList.add("correct");
                        option.insertAdjacentHTML("beforeend", correctIcon);
                      }
                      break;

                       
                }
                const nextBtn = document.querySelector('.card-footer button')
                      nextBtn.classList.remove('none')

          

               
                
                option.classList.add("disabled");
            }
                
        }
       
    }

}

let counterLine;
 function startTimerLine() {
        let line_width = 0;
    
        counterLine = setInterval(timer, 20);
    
        function timer() {
            line_width += 1;
            time_line.style.width = line_width + "px";
    
            if(line_width > 552) {
                clearInterval(counterLine);
            }
        }
    }
    


//Quit Quiz
btn_quit.addEventListener("click", function() {
    window.location.reload();
});


//Wiew
function wiewController (){
    quiz_box.classList.remove('none')
    category.classList.add('none');
    selcetText.classList.add('none');
  
}


function  correctAnswerShow(){
 
    let cevap = artQuiz.soruGetir().dogruCevap;
    let cevap2 = sportQuiz.soruGetir().dogruCevap;
    let cevap3= scienceQuiz.soruGetir().dogruCevap;
    for(let option of option_list.children) {
        switch(option.id){
            case 'art':
                if(option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", correctIcon);
                    
                }
                break;
            case 'sport':
                if(option.querySelector("span b").textContent == cevap2) {
                option.classList.add("correct");
                option.insertAdjacentHTML("beforeend", correctIcon);
                }
               break;
            default:
              if(option.querySelector("span b").textContent == cevap3) {
                option.classList.add("correct");
                option.insertAdjacentHTML("beforeend", correctIcon);
              }
              break;


    }

}}