import './App.css';

function App() {
  const logourl = "https://3.bp.blogspot.com/-py5FbTZgvjo/YDi1bsQq16I/AAAAAAAACB0/BxejbJBcHA4AVfkB33WYC3YlVmxElM7BwCK4BGAYYCw/s1600/Varanasi%2BSoftware%2BJunction%2BPhone%2BLogo.png";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logourl} className="App-logo" alt="logo" />
        <p>
          Varanasi Software Junction.
        </p>
        <a
          className="App-link"
          href="https://github.com/Varanasi-Software-Junction/vsjawsreact"
          target="_blank"

        >
          Learn React in Varanasi Software Junction
        </a>
      </header>
    </div>
  );
}

export default App;
