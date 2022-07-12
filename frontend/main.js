window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();    
})

const functionAPIUrl = 'https://getvisit.azurewebsites.net/api/GetVisit?code=mlyVDTRTvix2uXkGcDb7qh8qtVKfdEUnZkr1dt0_76LRAzFuunsd3A==';
const localfunctionapi='http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 1;
    fetch(functionAPIUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called FunctionAPI...!!");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}