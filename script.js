// function triggerAPI(event){
//     console.log("triggerAPI",event.target.value)
// };

// function debounce(fn,delay){
// let counter;
//     return function(){
//         let context = this;
//         let args = arguments;
//         clearTimeout(counter);
//         counter = setTimeout(()=> { fn.apply(context , args)},delay)    
//     };
// };

// const callDebounce = debounce(triggerAPI,500)


function triggersApi(context , args) {
    console.log("Debounce  delay is 1sec  :)")
}
const callDebounce = debounce(triggersApi, 1000);
// Triggered after the certain delay of the execution.
function debounce(fn, delay) {
    let counter;
    return function () {
        const args = arguments;
        const context = this;
        clearTimeout(counter);   //clear timeout will make timout from start so if already key pressed and there is timer already running ,it will make from start so api not triggered.
        counter = setTimeout(() => { fn.apply(context, args) }, delay);
    };
};


// Throttling - Triggered after certain time period no matter hom many strokes in between. 
const callThrottling = throtlling( actualMethod , 5000 );
window.addEventListener('resize', callThrottling);

function throtlling(func , delay){
let flag =  true;
    return function(){
        const context = this;
        const args = arguments ;
        if(flag){
            func.apply(context , args);
            flag = false;
            setTimeout(() => { flag = true } ,delay)
        };
    };
};

function actualMethod(conte , args){
console.log("Throttle limit set to 5 seconds :)")
};

