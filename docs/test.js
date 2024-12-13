const buttons = document.querySelectorAll('.circle')
const body = document.querySelector('.container')
buttons.forEach((circle)=>{
    console.log(circle);
    circle.addEventListener('click', function (e){
        console.log(e.target)
        if(e.target.id=='green'){
            body.style.backgroundColor= '#66785F'
        }
        if(e.target.id=='brown'){
            body.style.backgroundColor= '#997C70'
        }
        if(e.target.id=='purple'){
            body.style.backgroundColor= '#A888B5'
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor= '#89A8B2'
        }
    })
});
const refreshbutton = document.querySelector('.refresh')
refreshbutton.addEventListener('click', () => {
    body.style.backgroundColor = '#E5E1DA';
});
