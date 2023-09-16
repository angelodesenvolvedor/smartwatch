// Elementos HTML
const statusElement = document.getElementById('status');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const sleepList = document.getElementById('sleepList');

// Variável para rastrear o status do sono
let isSleeping = false;

// Função para iniciar o monitoramento do sono
function startSleepMonitoring() {
    isSleeping = true;
    statusElement.textContent = 'Dormindo';
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Função para parar o monitoramento do sono
function stopSleepMonitoring() {
    isSleeping = false;
    statusElement.textContent = 'Acordado';
    startButton.disabled = false;
    stopButton.disabled = true;

    // Adiciona uma entrada no histórico de sono
    const sleepEntry = document.createElement('li');
    sleepEntry.textContent = `Tipo: ${isSleeping ? 'Dormindo' : 'Acordado'}, Data: ${getCurrentDate()}`;
    sleepList.appendChild(sleepEntry);
}

// Função auxiliar para obter a data atual em formato legível
function getCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}

// Event listeners para os botões
startButton.addEventListener('click', startSleepMonitoring);
stopButton.addEventListener('click', stopSleepMonitoring);
