function App() {
  return (
    <>
      <div className="bg-slate-800 max-w-72 m-auto text-center">
        <div className="flex justify-around m-4">
          <div className="bg-green-400 px-3 py-1 rounded-2xl active:bg-green-700">
            1
          </div>
          <div className="bg-green-400 px-3 py-1 rounded-2xl active:bg-green-700">
            2
          </div>
          <div className="bg-green-400 px-3 py-1 rounded-2xl active:bg-green-700">
            3
          </div>
        </div>
        <p className=" p-4">Step: dream</p>
        <div className=" p-5 flex justify-between">
          <button className="bg-green-400 px-3 py-1 rounded-2xl">Prev</button>
          <button className="bg-green-400 px-3 py-1 rounded-2xl">Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
