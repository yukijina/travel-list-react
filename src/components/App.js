import React from 'react';
import { useState } from 'react';
import '../index.css';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList';

// const initialItems = [
//   {
//     id: 1,
//     description: 'Passports',
//     quantity: 2,
//     packed: false,
//   },
//   {
//     id: 2,
//     description: 'Socks',
//     quantity: 12,
//     packed: false,
//   },
//   {
//     id: 3,
//     description: 'T-shirts',
//     quantity: 5,
//     packed: true,
//   },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(item) {
    const confirmed = window.confirm(
      'Are you sure if you want to delete all items? 🤔'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
