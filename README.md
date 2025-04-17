<!DOCTYPE html>
<html>
<body>
  <button onclick="speak()">Speak</button>

  <script>
    function speak() {
      const utterance = new SpeechSynthesisUtterance('Hello, this is text to speech');
      window.speechSynthesis.speak(utterance);
    }
  </script>
</body>
</html>