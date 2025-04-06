
function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  speech.rate = 0.8;
  speech.pitch = 1;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}

function readJson() {
  const inputValue = document.getElementById("myInput").value.toLowerCase();

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const text = data[inputValue]; // Access using dynamic key
      if (text !== undefined) {
        speakText(text);
      } else {
        console.log("sorry ! reponse of this against our policy");
        speakText("sorry ! reponse of this against our policy");
      }
    })
    .catch(error => {
      console.log('file not fetched from server', error);
      speakText("reload the page , data is not fetched");
    });
}
