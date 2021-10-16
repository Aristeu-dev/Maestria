import React, { useRef, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import { Container } from './styles';
import Svg, { G, Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const Donut: React.FC = ({
  percentage = 45,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = '#7012CE',
  delay = 0,
  textColor,
  max = 100,
}) => {
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const circleRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };
  useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      const maxPerc = (100 * v.value) / max;
      const strokeDashoffset =
        circleCircumference - (circleCircumference * maxPerc) / 100;
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  });

  return (
    <Container>
      <Icon
          name="book"
          size={25}
          color="#7012CE"
          style={{position : 'absolute'}}
        />
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G
          rotation="-90"
          origin={`${halfCircle}, ${halfCircle}`}
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </Container>
  );
};
export default Donut;
