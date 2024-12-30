import { useEffect, useRef } from "react";
import { Animated, TextProps, View } from "react-native";

type Props = TextProps & {
  text: string;
};

export const TextWave = (props: Props) => {
  const { text, ...rest } = props;
  // Create an array of Animated.Value objects, one for each letter
  const animatedValues = useRef(
    Array.from({ length: text.length }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    // Create an animation for each letter
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: -10, // Move up by 10 pixels
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0, // Move back to the original position
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
        { iterations: -1 } // Infinite looping
      );
    });

    // Start animations with staggered delays
    Animated.stagger(100, animations).start();

    return () => {
      animations.forEach((animation) => animation.stop()); // Cleanup animations
    };
  }, [animatedValues]);

  return (
    <View className="flex flex-row">
      {text.split("").map((char, index) => (
        <Animated.Text
          key={index}
          style={[
            {
              transform: [{ translateY: animatedValues[index] }],
            },
          ]}
          {...rest}
        >
          {char}
        </Animated.Text>
      ))}
    </View>
  );
};
