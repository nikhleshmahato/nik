/*fetch('data.json')
  .then(a => a.json())
  .then(data => {
    console.log(data.num);
  })
  .catch(error => {
    console.log('file not fetched', error);
  });

let inputValue = document.getElementById("myInput").value;

function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN"; // Set language
  speech.rate = 0.8;  // Speed (default is 1, range: 0.1 to 10)
  speech.pitch =1; // Pitch (default is 1, range: 0 to 2)
  speech.volume = 1; // Volume (default is 1, range: 0 to 1)
  
  window.speechSynthesis.speak(speech);
}

function readJson(a){
  fetch('data.json')
  .then(a => a.json())
  .then(data => {
    speakText(data.a);
  })
  .catch(error => {
    console.log('file not fetched', error);
  });
}

*/
function speakText(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  speech.rate = 0.8;
  speech.pitch = 1;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
}

function readJson() {
  const inputValue = document.getElementById("myInput").value;

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const text = data[inputValue]; // Access using dynamic key
      if (text !== undefined) {
        speakText(text);
      } else {
        console.log("Key not found in JSON");
        speakText("Key not found");
      }
    })
    .catch(error => {
      console.log('file not fetched', error);
      speakText("Failed to fetch the file");
    });
}
