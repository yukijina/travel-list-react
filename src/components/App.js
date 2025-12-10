import '../index.css';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList';

const initialItems = [
  {
    id: 1,
    description: 'Passports',
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: 'Socks',
    quantity: 12,
    packed: false,
  },
  {
    id: 2,
    description: 'T-shirts',
    quantity: 5,
    packed: true,
  },
];

function App() {
  return (
    <div className='App'>
      <Logo />
      <Form />
      <PackingList items={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
