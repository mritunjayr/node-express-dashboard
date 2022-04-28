const connection = new WebSocket('ws://localhost:3000');

const logWindow = document.querySelector('#log-window');
const filePath = document.getElementById('logFilePath').value 

connection.onopen = () =>{
    // connection.send('Hello from the client!');
    if(filePath){
        connection.send(filePath)
    }
}

connection.onmessage = (event) =>{
    const logs = event.data.split('\n').join('<hr>');
    logWindow.innerHTML = logs;
}