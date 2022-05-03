import './ScrollButton.css';

export const ScrollButton = () => {

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <button onClick={scrollToTop} class="btn btn-dark floating">Scroll To Top ⬆️</button>
  );
};