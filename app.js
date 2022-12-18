const reRoll = document.querySelector("button");

reRoll.addEventListener('click', () => {
    getAdvice();
})

// Calls and displays data on initial window load 
window.onload = () => {
  getAdvice();
};

const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then((res) => {
    // API call successful
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res);
        }
    }).then((data) => {
        // JSON response
        console.log(data.slip);
        displayAdvice(data.slip)

    }).catch(function (err) {
    // There was an error
        console.warn('Something went wrong', err)
    })
}
    
const displayAdvice = (adviceObject) => {
    const adviceID = document.getElementById("adviceID");
    const adviceText = document.getElementById("adviceText");
    adviceID.textContent = adviceObject.id;
    adviceText.textContent = adviceObject.advice;
}
