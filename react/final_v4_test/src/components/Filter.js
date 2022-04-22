import { useState, useEffect } from 'react';
import { tags } from '../config';

const Filter = () => {
  const filter = tags.slice(1);
  return (
    <nav className="sausage-links">
      <ul>
        <ul style={{ flexWrap: 'Wrap' }}>
          {filter.map((v, i) => (
            <li style={{ marginBottom: '10px' }} key={i}>
              <button>{v}</button>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};
export default Filter;
