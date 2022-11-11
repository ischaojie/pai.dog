import './App.css';

function App() {
  return (
    <div className="app w-full min-h-screen bg-cover bg-center bg-scroll bg-no-repeat bg-clip-border"
      style={{ backgroundImage: "url(/assets/img/pi.png)" }}>
         <div class="flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="drop-shadow-md font-mono text-white text-4xl">Hi, I'm <span class="text-6xl text-gray-900">π</span></h1>
            </div>
        </div>
    </div>
  );
}

export default App;
