console.log('Index page is loaded!')



const btnSearch = document.querySelector('form');
const search = document.querySelector('input');
let messageOne = document.querySelector('#message-1');
let messageTwo = document.querySelector('#message-2');
let messageThree = document.querySelector('#message-3');

btnSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchValue = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    messageThree.textContent = '';
    
    if(!searchValue){
        messageOne.textContent = "Enter location or address!"
        console.log('Enter location or address!')
    } else{
        fetch(`http://localhost:3000/weather?address=${searchValue}`).then((response) => {
            response.json().then((data) => {
                console.log(data);
                messageOne.textContent = `Forecast: ${data.forecast}`;
                messageTwo.textContent = `Temperature(°C): ${data.temperature}`;
                messageThree.textContent = `Location: ${data.location}`;
            }).catch(e => {
                messageOne.textContent = 'Unable to find any result, Please try again.'
                console.log('Unable to find any result, Please try again.');
            })
        })
    }
  
})