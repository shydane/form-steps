import { useState } from "react";

const stepItems = ["Dream", "Believe", "Achieve"];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function clickNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  function clickPrev() {
    if (step > 1) setStep((step) => step - 1);
  }

  return (
    <>
      <button
        className="bg-slate-700 text-cyan-400 rounded-xl text-2xl absolute top-4 right-4 px-2 pb-1 border-solid border-cyan-400 border-2"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="bg-slate-800 max-w-72 m-auto text-center">
          <div className="flex p-4 justify-around m-4">
            <div
              className={`text-cyan-400 px-3 py-1 rounded-2xl ${
                step >= 1 ? "text-slate-700 bg-cyan-500" : "bg-slate-700"
              }`}
            >
              1
            </div>
            <div
              className={`text-cyan-400 px-3 py-1 rounded-2xl ${
                step >= 2 ? "text-slate-700 bg-cyan-500" : "bg-slate-700"
              }`}
            >
              2
            </div>
            <div
              className={`text-cyan-400 px-3 py-1 rounded-2xl ${
                step >= 3 ? "bg-cyan-500 text-slate-700" : "bg-slate-700"
              }`}
            >
              3
            </div>
          </div>
          <p className="text-cyan-400 p-4">
            {/* {console.log(step)} */}
            Step {step}: {stepItems[step - 1]}
          </p>
          <div className=" p-5 flex justify-between">
            <button
              className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-2xl hover:bg-cyan-400 hover:text-slate-700"
              onClick={clickPrev}
              // onMouseEnter={buttonHov}
            >
              Prev
            </button>
            <button
              className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-2xl hover:bg-cyan-400 hover:text-slate-700"
              onClick={clickNext}
              // onMouseEnter={buttonHov}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
