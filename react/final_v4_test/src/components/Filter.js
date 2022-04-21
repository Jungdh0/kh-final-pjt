import react, { useEffect } from 'react';

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
        <li>
          <button>#맛깔나는</button>
        </li>
        <li>
          <button>#퀸카가되고싶어?</button>
        </li>
        <li>
          <button>#방구석여행</button>
        </li>
        <li>
          <button>#미친상상력의비밀</button>
        </li>
        <li>
          <button>#냠냠쩝쩝</button>
        </li>
        <li>
          <button>#잔혹한</button>
        </li>
        <li>
          <button>#심장마비오는</button>
        </li>
        <li>
          <button>#브금맛집</button>
        </li>
        <li>
          <button>#빨간맛궁금해허니</button>
        </li>
        <li>
          <button>#감정을파고드는</button>
        </li>
        <li>
          <button>#폰할머니집</button>
        </li>
        <li>
          <button>#당신의기숙사는?</button>
        </li>
        <li>
          <button>#흥미진진한</button>
        </li>
        <li>
          <button>#아이들과보기좋은</button>
        </li>
      </ul>
    </nav>
  );
};
export default Filter;
