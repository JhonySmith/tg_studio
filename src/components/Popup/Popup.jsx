import { useEffect } from 'react';
import * as S from './Popup.styles.js';

export const Popup = (props) => {
  const { closeHandler, children } = props;

  const closePopup = () => {
    closeHandler();
  };

  useEffect(() => {
    document.addEventListener('click', closePopup);

    return () => {
      document.removeEventListener('click', closePopup);
    };
  });

  return <S.PopupWraper>{children}</S.PopupWraper>;
};
