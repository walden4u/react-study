import './App.css';
import ScrollBox from '../Component/ScrollBox';

const App = () => {
  return (
    <div>
      <ScrollBox ref={(ref) => (scrollBox = ref)} />
      <button onClick={() => scrollBox.scrollToBottom()}>맨 밑으로</button>
    </div>
  );
};

export default App;
