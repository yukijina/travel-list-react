import React from 'react';
import '../index.css';

export default function Item({ item }) {
  return (
    <li key={item.id}>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
