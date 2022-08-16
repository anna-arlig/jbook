import CodeCell from './components/code-cell';
import { createRoot } from 'react-dom/client';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

const App = () => {
  return (
    <div>
      <CodeCell />
      <CodeCell />
    </div>
  );
};
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
