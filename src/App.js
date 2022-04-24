import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Subreddits from './components/subReddits/SubReddits';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
