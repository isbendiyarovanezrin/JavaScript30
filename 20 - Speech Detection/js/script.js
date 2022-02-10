const recognition = new webkitSpeechRecognition();
recognition.interimResults = "true";
recognition.lang = "en-EN";

let p = document.createElement("p");
const div = document.querySelector(".texts");
div.appendChild(p);

function writeText(e) {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  const regex = /hello|hi|heart|poop|poo|/gi;
  const emojiScript = transcript.replace(regex, function (match) {
    return match == "hello" || match == "hi"
      ? "👋🏻"
      : "" || match == "poop" || match == "poo"
      ? "💩"
      : "" || match == "heart"
      ? "🧡"
      : "";
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  p.textContent = emojiScript.match(regex)
    ? emojiScript
    : capitalizeFirstLetter(emojiScript);

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    div.appendChild(p);
  }
}

recognition.addEventListener("result", writeText);
recognition.addEventListener("end", recognition.start);
recognition.start();
