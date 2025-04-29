import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  FlingGestureHandler,
  PinchGestureHandler,
  Directions,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

export default function GestureTarget({ score, progress, setProgress }) {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scale = useSharedValue(1);

  // === STYLE ===
  const animStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: scale.value },
    ],
  }));

  // === GESTURE HANDLERS ===

  const singleTapHandler = () => {
    score(1);
    setProgress(p => ({ ...p, tap: p.tap + 1 }));
  };

  const doubleTapHandler = () => {
    score(2);
    setProgress(p => ({ ...p, doubleTap: p.doubleTap + 1 }));
  };

  const longPressHandler = () => {
    score(5);
    setProgress(p => ({ ...p, hold: true }));
  };

  const panHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    },
    onEnd: () => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
    },
  });

  const flingLeftHandler = () => {
    score(Math.floor(Math.random() * 5 + 1));
    setProgress(p => ({ ...p, flingLeft: true }));
  };

  const flingRightHandler = () => {
    score(Math.floor(Math.random() * 5 + 1));
    setProgress(p => ({ ...p, flingRight: true }));
  };

  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale;
    },
    onEnd: () => {
      scale.value = withSpring(1);
    },
  });

  const pinchEnd = () => {
    score(3);
    setProgress(p => ({ ...p, zoom: true }));
  };

  // === RETURN VIEW ===
  return (
    <FlingGestureHandler direction={Directions.RIGHT} onHandlerStateChange={flingRightHandler}>
      <FlingGestureHandler direction={Directions.LEFT} onHandlerStateChange={flingLeftHandler}>
        <PinchGestureHandler onGestureEvent={pinchHandler} onEnded={pinchEnd}>
          <PanGestureHandler onGestureEvent={panHandler}>
            <LongPressGestureHandler minDurationMs={3000} onActivated={longPressHandler}>
              <TapGestureHandler numberOfTaps={2} onActivated={doubleTapHandler}>
                <TapGestureHandler onActivated={singleTapHandler}>
                  <Animated.View style={[styles.bubble, animStyle]}>
                    <Text style={styles.icon}>🔥</Text>
                  </Animated.View>
                </TapGestureHandler>
              </TapGestureHandler>
            </LongPressGestureHandler>
          </PanGestureHandler>
        </PinchGestureHandler>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  bubble: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fcd34d',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
  },
  icon: {
    fontSize: 50,
  },
});
