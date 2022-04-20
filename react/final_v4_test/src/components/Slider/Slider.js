import './Slider.css';
import './SliderItem.css';
import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import SlideButton from './SlideButton';
import axios from 'axios';
import { BASE_URL } from '../../config';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Slider() {
  const [windowWidth, windowHeight] = useWindowSize();
  const itemSize = 3; //슬라이드 수
  const sliderPadding = 40;
  const sliderPaddingStyle = `0 ${sliderPadding}px`;
  const newItemWidth = getNewItemWidth();
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const bothData = 2;
  const [currentIndex, setCurrentIndex] = useState(bothData);
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [isSwiping, setIsSwiping] = useState(false);
  const [slideX, setSlideX] = useState(null);
  const [prevSlideX, setPrevSlideX] = useState(false);
  let isResizing = useRef(false);

  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/movies?page=0&size=3&sort=detailsViewCount,desc`);
        const posters = res.data.content.map((v) => v.contentImgHor);
        setItems(posters);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  let slides = setSlides();
  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < bothData) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  function getNewItemWidth() {
    let itemWidth = windowWidth * 0.9 - sliderPadding * 2;
    itemWidth = itemWidth > 1060 ? 1060 : itemWidth;
    return itemWidth;
  }

  useEffect(() => {
    isResizing.current = true;
    setIsSwiping(true);
    setTransition('');
    setTimeout(() => {
      isResizing.current = false;
      if (!isResizing.current) setIsSwiping(false);
    }, 1000);
  }, [windowWidth]);

  useInterval(
    () => {
      handleSlide(currentIndex + 1);
    },
    !isSwiping && !prevSlideX ? 2000 : null
  );

  function replaceSlide(index) {
    setTimeout(() => {
      setTransition('');
      setCurrentIndex(index);
    }, transitionTime);
  }

  function handleSlide(index) {
    setCurrentIndex(index);
    if (index - bothData < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - bothData >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }
    setTransition(transitionStyle);
  }

  function handleSwipe(direction) {
    setIsSwiping(true);
    handleSlide(currentIndex + direction);
  }

  function getItemIndex(index) {
    index -= bothData;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  function getClientX(event) {
    return event._reactName == 'onTouchStart' ? event.touches[0].clientX : event._reactName == 'onTouchMove' || event._reactName == 'onTouchEnd' ? event.changedTouches[0].clientX : event.clientX;
  }

  function handleTouchStart(e) {
    setPrevSlideX((prevSlideX) => getClientX(e));
  }

  function handleTouchMove(e) {
    if (prevSlideX) {
      setSlideX((slideX) => getClientX(e) - prevSlideX);
    }
  }

  function handleMouseSwipe(e) {
    if (slideX) {
      const currentTouchX = getClientX(e);
      if (prevSlideX > currentTouchX + 100) {
        handleSlide(currentIndex + 1);
      } else if (prevSlideX < currentTouchX - 100) {
        handleSlide(currentIndex - 1);
      }
      setSlideX((slideX) => null);
    }
    setPrevSlideX((prevSlideX) => null);
  }

  return (
    <div className="slider-area">
      <div className="slider">
        <SlideButton direction="prev" onClick={() => handleSwipe(-1)} />
        <SlideButton direction="next" onClick={() => handleSwipe(1)} />
        <div className="slider-list" style={{ padding: sliderPaddingStyle }}>
          <div
            className="slider-track"
            onMouseOver={() => setIsSwiping(true)}
            onMouseOut={() => setIsSwiping(false)}
            style={{
              transform: `translateX(calc(${(-100 / slides.length) * (0.5 + currentIndex)}% + ${slideX || 0}px))`,
              transition: slideTransition,
            }}
          >
            {slides.map((slide, slideIndex) => {
              const itemIndex = getItemIndex(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={`slider-item ${currentIndex === slideIndex ? 'current-slide' : ''}`}
                  style={{ width: newItemWidth || 'auto' }}
                  onMouseDown={handleTouchStart}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onMouseMove={handleTouchMove}
                  onMouseUp={handleMouseSwipe}
                  onTouchEnd={handleMouseSwipe}
                  onMouseLeave={handleMouseSwipe}
                >
                  <a>
                    <img src={items[itemIndex]} alt={`banner${itemIndex}`} style={{ maxWidth: '100%', objectFit: 'cover' }} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
