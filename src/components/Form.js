import React from 'react';
import { useState } from 'react';
import '../index.css';

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const formattedDescription = (string) => {
    const trimmed = string.trim();
    const formatted = trimmed.charAt(0).toUpperCase().concat(trimmed.slice(1));
    return formatted;
  };

  function handleSubmit(e) {
    e.preventDefault();

    // nothing happen if description was empty
    if (!description) return;

    const newItem = {
      description: formattedDescription(description),
      quantity,
      packed: false,
      id: Date.now(),
    };

    // crate a new object
    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    // onSbmit in <form>, not onClick <button>. If onClick is added to the button instead, it
    // won't trigger when a user pressed enter for submit

    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
