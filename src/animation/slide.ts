import { Animated, Easing, EasingFunction } from 'react-native';
import { AnimatedValue } from 'react-navigation';



const fadeIn = ({
  duration,
  direction,
  toValue,
  useNativeDriver,
  easing,
}: AnimatedValue): void => {
  return Animated.timing(direction, {
    toValue,
    duration,
    useNativeDriver,
    easing,
  }).start();
};

export { fadeIn };
