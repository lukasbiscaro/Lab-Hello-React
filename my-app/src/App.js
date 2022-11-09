import logo from '../src/images/ironhack-logo-xs.png';
import menu from '../src/images/menu-top-xs.png';
import declarative from '../src/images/icon1.png';
import components from '../src/images/icon2.png';
import singleWay from '../src/images/icon3.png';
import jsx from '../src/images/icon4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className='navbar'>
          <img src={logo} className="iron-logo" alt="logo ironhack" />
          <img src={menu} className="menu-icon" alt="icon" />
        </nav>
        <div className="briefing">
          <div className="briefing-text">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja Developer.</p>
          </div>
          <button>Awesome!</button>
        </div>
      </header>
      <div className="content">
        <div className="declarative">
          <img src={declarative} className="content-img" alt="declarative-logo"></img>
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="components">
          <img src={components} className="content-img" alt="components-logo"></img>
          <h1>Components</h1>
          <p>Build encapsuled components that manage their state.</p>
        </div>
        <div className="singleWay">
          <img src={singleWay} className="content-img" alt="singleWay-logo"></img>
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="jsx">
          <img src={jsx} className="content-img" alt="jsx-logo"></img>
          <h1>JSX</h1>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>

  );
}

export default App;