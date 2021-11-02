import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { Container, Ball } from './styles';

const Loader: React.FC = () => {
  const animations = {
    one: new Animated.Value(0),
    two: new Animated.Value(0),
    three: new Animated.Value(0),
  };

  function onAnimate(animation, nextAnimation) {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -10,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(nextAnimation, 200);
  }

  function onStartAnimate() {
    function onThreeAnimation() {
      onAnimate(animations.three, () => {
        setTimeout(onStartAnimate, 200);
      });
    }

    function onTwoAnimation() {
      onAnimate(animations.two, onThreeAnimation);
    }

    onAnimate(animations.one, onTwoAnimation);
  }

  useEffect(() => {
    onStartAnimate();
  }, []);
  return (
    <Container>
      <Ball
        color="#07E092"
        style={{ transform: [{ translateY: animations.one }] }}
      />
      <Ball
        color="#9B51E0"
        style={{ transform: [{ translateY: animations.two }] }}
      />
      <Ball
        color="#FFA656"
        style={{ transform: [{ translateY: animations.three }] }}
      />
    </Container>
  );
};

export default Loader;
