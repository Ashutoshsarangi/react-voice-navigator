import { ReactElement, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

// const grammar =
//   "#JSGF V1.0; grammar colors; public <routes> = blog | contact | about;";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-GB";
recognition.interimResults = false;

const App = (): ReactElement => {
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();

  recognition.onstart = () => {
    console.log("Voice is being recognized...");
  };
  recognition.onend = () => {
    console.log("Speech recognition service disconnected");
  };

  recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    const lastFewWords = transcript.split(" ").slice(-5).join(" "); // Only consider the last 5 words

    if (event.results[current][0].confidence > 0.85) {
      console.log(transcript, event.results[current][0].confidence);

      if (lastFewWords.includes("blog")) {
        navigate("/blog");
      } else if (lastFewWords.includes("about")) {
        navigate("/about");
      } else if (lastFewWords.includes("contact")) {
        navigate("/contact");
      } else if (lastFewWords.includes("home")) {
        navigate("/");
      } else if (lastFewWords.includes("stop")) {
        recognition.stop();
      } else {
        console.log("This is Not routable for now");
      }
    }
  };

  return (
    <>
      <h1>Here will Create an Voice Navigation Demo</h1>
      <button onClick={() => recognition.start()}>Start</button>
      <button onClick={() => recognition.stop()}>Stop</button>
      <Outlet />
    </>
  );
};

export default App;
