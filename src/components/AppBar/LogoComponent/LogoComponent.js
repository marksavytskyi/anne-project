import { useState } from 'react';

import { Logo, LogoContainer } from '../AppBar.styled';

const LogoComponent = () => {
  const [isHeart, setIsHeart] = useState(false);

  const handleClick = () => {
    setIsHeart(!isHeart);
  };

  return (
    <LogoContainer
      onClick={handleClick}
      style={{ transform: `rotate(${isHeart ? '360deg' : '0deg'})` }}
    >
      <Logo src={require('../../../images/logo.jpg')} />
    </LogoContainer>
  );
};

export default LogoComponent;
