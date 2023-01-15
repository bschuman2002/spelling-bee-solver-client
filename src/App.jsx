import NavBar from "./components/NavBar";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { solveSpellingBee } from "./services/solver";

// Main app
function App() {
  const [goldLetter, setGoldLetter] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");
  const [letter5, setLetter5] = useState("");
  const [letter6, setLetter6] = useState("");
  const [letter7, setLetter7] = useState("");

  const [wordsResult, setWordsResult] = useState([]);

  const handleSubmit = async () => {
    const letters = (
      goldLetter +
      letter2 +
      letter3 +
      letter4 +
      letter5 +
      letter6 +
      letter7
    ).toLowerCase();
    if (letters.length < 7) {
      toast.error("Please input a letter in every box");
    } else {
      const words = solveSpellingBee(goldLetter.toLowerCase(), letters);
      // toast.promise(solvePromise, {
      //   loading: "Fetching solutions (this might take some time)",
      //   success: "Success",
      //   error: "Ran into some issue, please try again later",
      // });

      setWordsResult(words);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Toaster />

      <div className="rounded-md bg-white flex flex-col mx-auto w-[20rem] lg:w-[40rem] mt-10 border border-gray-200 p-5">
        <h1 className="text-center text-xl text-gray-800 font-semibold">
          Input Today's NYT Spelling Bee Letters:
        </h1>
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-10 mx-auto mt-5">
          <div className="bg-white h-10 w-10 rounded-lg border-2 border-yellow-400 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={goldLetter}
              onChange={(e) => setGoldLetter(e.target.value)}
            />
          </div>
          <div className="bg-white h-10 w-10 rounded-lg border border-gray-700 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={letter2}
              onChange={(e) => setLetter2(e.target.value)}
            />
          </div>
          <div className="bg-white h-10 w-10 rounded-lg border border-gray-700 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={letter3}
              onChange={(e) => setLetter3(e.target.value)}
            />
          </div>
          <div className="bg-white h-10 w-10 rounded-lg border border-gray-700 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={letter4}
              onChange={(e) => setLetter4(e.target.value)}
            />
          </div>
          <div className="bg-white h-10 w-10 rounded-lg border border-gray-700 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={letter5}
              onChange={(e) => setLetter5(e.target.value)}
            />
          </div>
          <div className="bg-white h-10 w-10 rounded-lg border border-gray-700 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={letter6}
              onChange={(e) => setLetter6(e.target.value)}
            />
          </div>
          <div className="bg-white h-10 w-10 rounded-lg border border-gray-700 flex p-2">
            <input
              className="w-3 mx-auto border-none focus:outline-none"
              type="text"
              maxLength={1}
              value={letter7}
              onChange={(e) => setLetter7(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-5 mx-auto w-16 h-8 border border-purple-500 rounded-full text-lg text-gray-800 transition duration-100 hover:text-white hover:bg-purple-500"
        >
          Solve
        </button>
      </div>

      {wordsResult?.length > 0 && 
        <div className="rounded-md bg-white flex flex-col mx-auto w-[20rem] lg:w-[40rem] mb-5 mt-10 border border-gray-200 p-5 max-h-80">
          <h1 className="mb-3 text-gray-800 text-xl font-semibold">Spelling Bee Words:</h1>
          <div className="flex flex-col h-full overflow-scroll scrollbar-hide">{wordsResult.map((word) => <div key={word} className="odd:bg-gray-200 p-1">{word}</div>)}</div>
        </div>}
    </div>
  );
}

export default App;
