import './FloatingButton.css';

export const FloatingButton = ({ text }) => {

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <button onClick={scrollToTop} class="btn btn-dark floating">{ text }</button>
  );
};