import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  console.log(isShowing);
  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;