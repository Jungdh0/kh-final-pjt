import react, { useEffect } from 'react';

import { tags } from '../config';

const Filter = (/*{ setActiveTag, activeTag, setFiltered, movies }*/) => {
  //   useEffect(() => {
  //     if (activeTag === 0) {
  //       setFiltered(movies);
  //       return;
  //     }
  //     const filtered = movies.filter((movie) => movie.tagName.includes(activeTag));
  //     setFiltered(filtered);
  //   }, [activeTag]);
  return (
    <nav className="sausage-links">
      <ul>
        <ul style={{ flexWrap: 'Wrap' }}>
          {tags.map((v, i) => (
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
