const smallCans = document.querySelectorAll('.can-small');
const liters = document.getElementById('liters');
const percent = document.getElementById('percent');
const remained = document.getElementById('remained');
const homer = document.getElementById('homer');

updateBigCan();

smallCans.forEach((can, index) => {
    can.addEventListener('click', () => highlightCans(index));
});

function highlightCans(index){
    if(smallCans[index].classList.contains('full') && 
    !smallCans[index].nextElementSibling.classList.contains('full')){
        index--;
    }
    smallCans.forEach((can, index2) => {
        if(index2 <= index){
            can.classList.add('full');
        }
        else{
            can.classList.remove('full');
        }
    });

    updateBigCan();
}

function updateBigCan(){
    const fullCans = document.querySelectorAll('.can-small.full').length;
    const totalCans = smallCans.length;

    if(fullCans === 0){
        percent.style.visibility = 'hidden';
        percent.style.height = 0;
    }
    else{
        percent.style.visibility = 'visible';
        percent.style.height = `${fullCans / totalCans * 330}px`;
        percent.innerText = `${fullCans / totalCans * 100}%`;
    }

    if(fullCans === totalCans){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
        homer.style.visibility = 'visible';
    }
    else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCans / 1000)}L`;
        homer.style.visibility = 'hidden';
    }
    
}