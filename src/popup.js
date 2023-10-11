
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === 'updateRemainingCount') {
        document.getElementById('remaining').textContent = 'Remaining count: ' + request.count;
    }
});

document.getElementById('start').addEventListener('click', () => {
    const count = document.getElementById('count').value;
    chrome.runtime.sendMessage({command: 'start', count: count});
});

document.getElementById('stop').addEventListener('click', () => {
    chrome.runtime.sendMessage({command: 'stop'});
});
