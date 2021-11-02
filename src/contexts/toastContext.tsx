import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { IToast, IToastContext } from '../interfaces/Toast';

export const ToastContext = createContext<IToastContext>({} as IToastContext);

export const ToastProvider: React.FC = ({ children }) => {
  const [toast, setToast] = useState<IToast>({
    message: '',
    type: '',
    visible: false,
  });
  const timeout = useRef();

  const show = useCallback(args => {
    setToast({ ...toast, visible: true, ...args });
  }, []);

  const hide = useCallback(() => {
    setToast({ ...toast, visible: false });
  }, [toast]);
  useEffect(() => {
    if (toast.visible) {
      setTimeout(hide, 1500);
      return () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
      };
    }
  }, [hide, toast]);

  return (
    <ToastContext.Provider
      value={{
        hide,
        show,
        toast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
