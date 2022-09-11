export function App() {
  return (
    <>
      <div id="drum-machine">
        <div id="display">
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="Q-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="Q"
              className="clip"
            ></audio>
            Q
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="W-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="W"
              className="clip"
            ></audio>
            W
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="E-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="E"
              className="clip"
            ></audio>
            E
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="A-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="A"
              className="clip"
            ></audio>
            A
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="S-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="S"
              className="clip"
            ></audio>
            S
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="D-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="D"
              className="clip"
            ></audio>
            D
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="Z-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="Z"
              className="clip"
            ></audio>
            Z
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="X-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="X"
              className="clip"
            ></audio>
            X
          </button>
          <button
            className="drum-pad p-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            id="C-button"
          >
            <audio
              src="horse.ogg"
              type="audio/ogg"
              id="C"
              className="clip"
            ></audio>
            C
          </button>
        </div>
      </div>
    </>
  );
}
