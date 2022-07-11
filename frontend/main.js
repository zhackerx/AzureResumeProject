window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();    
})

const functionAPIUrl = 'https://getresumevisitcounter.azurewebsites.net/api/GetResumeCounter?code=37bSQxjG3TqXUoDO79006Ilk7xynPZE_ShMXTS4zQ-gWAzFuAQ3yUA==';
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