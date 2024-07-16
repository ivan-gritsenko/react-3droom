import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

const ScrollableContainer = ({ children }) => {
  return (
    <Scrollbars
      style={{ width: '100%', height: '520px' }}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
    >
      {children}
    </Scrollbars>
  );
};

export default ScrollableContainer;
