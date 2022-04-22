import { useState, useEffect } from 'react';
import { tags } from '../config';

const Filter = ({ filters, setFilters }) => {
  const tagList = tags.slice(1);

  const handleTags = (tag) => {
    const index = filters.indexOf(tag);
    index < 0 ? setFilters(filters.concat(tag)) : console.log('삭제를 어케하지? 생각 안 나는데 딴 거 하러 가야 됨');
  };

  return (
    <nav className="sausage-links">
      <ul>
        <ul style={{ flexWrap: 'Wrap' }}>
          {tagList.map((v, i) => (
            <li style={{ marginBottom: '10px' }} key={i}>
              <button
                onClick={(e) => {
                  handleTags(i + 1);
                }}
              >
                {v}
              </button>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
};
export default Filter;
