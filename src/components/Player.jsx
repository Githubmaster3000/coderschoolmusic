import { useState, useEffect } from "react";
import songsData from "./audios";

function Player({ audioElem, setDymUrl, dymUrl, dymStatus }) {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (!toggle) audioElem.current.play();
    else {
      audioElem.current.pause();
    }
  }, [dymUrl]);

  function handleToggle() {
    setToggle(!toggle);

    if (toggle) audioElem.current.play();
    else {
      audioElem.current.pause();
    }
  }

  return (
    <div>
      {songsData.map((child, idx) => (
        <p className="songList">
          {dymStatus}

          {child.title}
          {dymUrl === idx && !toggle && " playing..."}
        </p>
      ))}
      <button onClick={() => setDymUrl((dymUrl - 1 + 3) % 3)}> ⏮️</button>
      <button onClick={() => handleToggle()}>
        {toggle ? "play" : "pause"}
      </button>
      <button onClick={() => setDymUrl((dymUrl + 1) % 3)}> ⏩</button>
    </div>
  );
}

export default Player;
