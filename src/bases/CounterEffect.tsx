import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT: number = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (counter > MAX_COUNT) return;
    setCounter((state) => Math.min(state + 1, MAX_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log(
      '%c Se llego al valor maximo',
      'color: red; background-color: black;'
    );
    const tl = gsap.timeline();
    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out',
    }).to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
