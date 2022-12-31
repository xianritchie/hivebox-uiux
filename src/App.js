import logo from './logo.svg';
import './App.css';

const theme = {
  color: {
    primary: '#222',
    secondary: '#333',
    tertiary: '#444',
    highlight: '#0077c9',
    text: '#fff'
  },
  font: {
    size: 16,
    family: '"Helvetica Neue", sans-serif'
  }
}

const Header = () => {
  return (
    <header style={{
      backgroundColor: theme.color.primary,
      color: theme.color.text,
      fontSize: theme.font.size,
      fontFamily: theme.font.family
    }}>
      <h1>My App</h1>
      <Navigation />
    </header>
  )
}

const Body = () => {
  return (
    <main style={{
      backgroundColor: theme.color.secondary,
      color: theme.color.text,
      fontSize: theme.font.size,
      fontFamily: theme.font.family
    }}>
      <h2>Welcome to My App</h2>
      <p>This is the body of the app</p>
    </main>
  )
}

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: theme.color.tertiary,
      color: theme.color.text,
      fontSize: theme.font.size,
      fontFamily: theme.font.family
    }}>
      <p>Copyright 2021 My App</p>
    </footer>
  )
}

function App() {
  <Header />
  <Body />
  <Footer />
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
}

export default App;
