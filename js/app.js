const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
let courentActive= 1;
next.addEventListener('click', ()=>{
    courentActive ++;
    if(courentActive > circles.length){
        courentActive = circles.length;
    }
    
    updateProgress();
});
prev.addEventListener('click', ()=>{
    courentActive --;
    if(courentActive <1){
        courentActive = 1;
    }
    updateProgress();
});


// update Progress
const updateProgress = () =>{
    circles.forEach((circle, indx)=>{
        if(indx < courentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    });
    // update procress bar
    const activeClass = document.querySelectorAll('.active');
    let progressBar = 0;
    for(let i = 1; i < activeClass.length; i++){
        progressBar = progressBar + 25;
    }
    progress.style.width= `${progressBar}%`
    // next btn status
    if(courentActive === 5){
        next.setAttribute('disabled', true);
    }
    else{
        next.removeAttribute('disabled');
    }
    // prev btn status
    if(courentActive > 1){
        prev.removeAttribute('disabled');
    }
    else{
        prev.setAttribute('disabled', true);
    }
}


// 5 min