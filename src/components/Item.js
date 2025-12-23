import React from 'react';
import '../index.css';

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        name={item.description}
        id={item.description}
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        key={item.id}
      />
      <label
        htmlFor={item.description}
        style={item.packed ? { textDecoration: 'line-through' } : {}}
      >
        {item.quantity} {item.description}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
