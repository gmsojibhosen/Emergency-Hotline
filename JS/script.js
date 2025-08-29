    // heart count functionality
const heartBnt = document.querySelectorAll('.heart-bnt');
let heartCount = parseInt(document.getElementById('heart-count').innerText);

 for(const heart of heartBnt) {
    heart.addEventListener('click', function(){
        heartCount++
        document.getElementById('heart-count').innerText = heartCount
    })
     
 }

//  call functionality
const calls = document.querySelectorAll('.calls-btn');
let coinCount = parseInt(document.getElementById('coin-count').innerText);



 for(const call of calls) {
    call.addEventListener('click', function() {
// alert
const serviceCard = call.closest('.service-card');
const callTitles = serviceCard.querySelector('.call-title').innerText; 
const callNumbers = serviceCard.querySelector('.call-number').innerText;
const date = new Date().toLocaleTimeString();

// history data
const historyParent= document.getElementById('history-parent');
const div = document.createElement('div');
div.innerHTML = `
        <div  class="flex  items-center justify-between mt-[18px] bg-[#FAFAFA] p-4">
        <div class="">
        <p class="font-semibold text-lg inter">${callTitles}</p>
        <p class="text-[#5C5C5C] text-lg">${callNumbers }</p>
        </div>
        <p>${date}</p>       
        </div>`;

                
               

    if (coinCount >= 20) {
    alert(`📞...${callTitles } ${callNumbers}`)
    coinCount -= 20;
    document.getElementById('coin-count').innerText = coinCount;
    historyParent.append(div)
} 
else {
    alert(`❌ You don't have enough coins. It takes at least 20 coins to make a call.`);
}

document.getElementById('clear-btn').addEventListener('click', function() {
    div.innerHTML = '';
})
 

    })
    
 }


 const copyBtn = document.querySelectorAll('.copy-btn');
 let copyCount = parseInt(document.getElementById('copy-count').innerText)
 

 for(const copy of copyBtn) {
    copy.addEventListener('click', function() {
        copyCount++
        document.getElementById('copy-count').innerText = copyCount;

    const serviceCard = copy.closest('.service-card');
    const callNumbers = serviceCard.querySelector('.call-number').innerText;
        

    
    alert(`Number is copy ${callNumbers}`);
    
   
   



    const cerateNewInput = document.createElement('input');

      document.body.appendChild(cerateNewInput);

        cerateNewInput.value = callNumbers;
        
        console.log(cerateNewInput)

        cerateNewInput.select();
        cerateNewInput.setSelectionRange(0, 100);

        document.execCommand("copy");

        document.body.removeChild(cerateNewInput);
        
    })
 }
