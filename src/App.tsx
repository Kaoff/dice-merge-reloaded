import './App.css';
import { Dice } from './components/Dice';
import { colorLevels } from './game/color';

function App() {
  return (
    <div className="grid w-fit grid-cols-6 gap-2">
      {[1, 2, 3, 4, 5, 6].map((value) =>
        colorLevels.map((color, index) => (
          <Dice key={index} dice={{ color, value }} />
        ))
      )}
    </div>
  );
}

export default App;
