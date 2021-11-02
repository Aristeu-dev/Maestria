import React, { useEffect, useRef, useContext } from 'react';
import { Container } from './styles';
import { Animated, Easing } from 'react-native';
import { fadeIn } from '../../../../animation/slide';
import Toast from '../index';
import { ToastContext } from '../../../../contexts/toastContext';
export const ToastContainer: React.FC = () => {
  const { toast, hide } = useContext(ToastContext);
  const translateYRef = useRef(new Animated.Value(-100));

  useEffect(() => {
    if (toast.visible) {
      fadeIn({
        duration: 300,
        direction: translateYRef.current,
        easing: Easing.ease,
        toValue: 20,
        useNativeDriver: true,
      });
    } else {
      fadeIn({
        duration: 450,
        direction: translateYRef.current,
        easing: Easing.ease,
        toValue: -100,
        useNativeDriver: true,
      });
    }
  }, [toast]);
  return (
    <Container style={{ transform: [{ translateY: translateYRef.current }] }}>
      <Toast type={toast.type} hide={hide} message={toast.message}></Toast>
    </Container>
  );
};
