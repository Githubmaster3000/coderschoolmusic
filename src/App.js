import "./App.css";
import { useState, useRef, useEffect } from "react";
import Player from "./components/Player";
import songsData from "./components/audios";

function App({}) {
  const audioElem = useRef();
  const [dymUrl, setDymUrl] = useState(0);
  const [dymStatus, setDymStatus] = useState("Playing");

  return (
    <>
      <audio  src={songsData[dymUrl].url} ref={audioElem} />
      <Player audioElem={audioElem} setDymUrl={setDymUrl} dymUrl={dymUrl} />
    </>
  );
}

export default App;
