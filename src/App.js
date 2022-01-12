import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import UseStateObject from './components/UseStateObject';
import IntervalCounter from './components/IntervalCounter';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <HookCounter /> */}
      {/* <UseStateObject /> */}
      {/* <IntervalCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
