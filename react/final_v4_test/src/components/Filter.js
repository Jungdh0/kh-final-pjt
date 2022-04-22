import { useState, useEffect } from 'react';
import { tags } from '../config';

const Filter = ({ filters, setFilters }) => {
  const tagList = tags.slice(1);
  //인덱스값 맞추느라 배열 인덱스 0에 null값을 넣었기 때문에, 삭제하고 표시

  const handleTags = (tag) => {
    const index = filters.indexOf(tag);
    index < 0 ? setFilters(filters.concat(tag)) : setFilters(filters.filter((v, i) => i !== index));
    //클릭한 태그의 값이 filters 배열에 이미 존재하지 않으면, 배열에 tag를 추가하고, 존재하면 해당 인덱스 값을 삭제한 값 반환
    //push나 slice 안 쓰는 이유: setState로 값을 바꾸어 제랜더링 해야 함..
  };
  // 중복 체크 될 수 있게 해야 해서 이런식으로 구현했는데 버튼 말고 체크 박스로 해서 스타일을 변경하는 게 나을듯

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
                className={{ handleTags } ? 'active' : ''}
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
