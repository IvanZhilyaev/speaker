const textAr = document.getElementById('text');
const speakBtn = document.getElementById('btn');

speakBtn.addEventListener('click', function () {
    window.speechSynthesis.cancel();

    const text = textAr.value;
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance);
});

