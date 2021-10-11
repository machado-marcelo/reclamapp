import {
  Animated,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, SIZES } from '../../constants';
import React, {useRef, useState} from 'react';

import { ScreenStyleSheet } from './styles';
import { StepFour } from './components/StepFour';
import { StepOne } from './components/StepOne';
import { StepThree } from './components/StepThree';
import { StepTwo } from './components/StepTwo';

const onBoardingSteps = [
  <StepOne key={0} />,
  <StepTwo key={1} />,
  <StepThree key={2} />,
  <StepFour key={3}/>
]


export function OnBoarding() {

  const [stepIndex, setStepIndex] = useState(0)
  const animationScrollSteps = new Animated.Value(0);
  const onBoardingStepIndex = Animated.divide(animationScrollSteps, SIZES.width);

  const scrollViewRef = useRef<any>(undefined)

  
  function renderContent() {
    return (
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          setStepIndex(Math.round(event.nativeEvent.contentOffset.x / SIZES.width))          
        }}
        onScroll={Animated.event([          
          {
            nativeEvent: {
              contentOffset: {
                x: animationScrollSteps
              }
            }
          },
        ], {
          useNativeDriver: false
        })}
      >
       {onBoardingSteps}
      </Animated.ScrollView>
    );
  }

  function renderDots() { 

    return (
      <View
          style={{
              width: '100%',
              position: 'absolute',
              bottom: 100,
              paddingHorizontal: 20
            }}>
          <View
              style={ScreenStyleSheet.dotsContainer}
            >
                  {onBoardingSteps.map((item, index) => {
                      const opacity = onBoardingStepIndex.interpolate({
                          inputRange: [index - 1, index, index + 1],
                          outputRange: [0.4, 1, 0.4],
                          extrapolate: "clamp"
                      });

                      const dotSize = onBoardingStepIndex.interpolate({
                          inputRange: [index - 1, index, index + 1],
                          outputRange: [SIZES.base, 17, SIZES.base],
                          extrapolate: "clamp"
                      });

                      return (
                        <Animated.View
                            key={`dot-${index}`}
                            style={
                              [ScreenStyleSheet.dot,
                                {
                                  width: dotSize, height: dotSize, opacity
                                }
                              ]}
                        />
                      );
                  })}
              </View>
        
          </View>
          
        );
  }

  function renderStepButtons() {

  const previousButtonOpacity = onBoardingStepIndex.interpolate({
    inputRange: [0 - 1, 0, 0 + 1],
    outputRange: [1, 0, 1],
    extrapolate: "clamp"
  });
    
  const nextButtonOpacity = onBoardingStepIndex.interpolate({
    inputRange: [(onBoardingSteps.length - 1) - 1, (onBoardingSteps.length - 1), (onBoardingSteps.length - 1) + 1],
    outputRange: [1, 0, 1],
    extrapolate: "clamp"
  }) ;
    
        return (
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 20,
          paddingHorizontal: 20
        }}
      >
        <View
          style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
              }}>
        <Animated.View style={{ opacity: previousButtonOpacity }} >
          <TouchableOpacity
          disabled={stepIndex < 1}
          style={{
            backgroundColor: COLORS.white,
            padding: 10,
            width: 140,
            height: 50,
            borderColor: COLORS.primary,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onPress={() => {
                scrollViewRef.current.scrollTo({ x: SIZES.width * (stepIndex - 1), y: 0, animated: true })
                setStepIndex(stepIndex + -1)

            }}
        >
          <Text style={{ fontSize: 18, color: COLORS.primary, fontWeight: 'bold' }}>
            {'Anterior'}
          </Text>
        </TouchableOpacity>
              </Animated.View>
        <Animated.View  style={{ opacity: nextButtonOpacity }} >      
                <TouchableOpacity
                   disabled={stepIndex >= onBoardingSteps.length - 1}
          style={{
            backgroundColor: COLORS.primary,
            padding: 10,
            width: 140,
            height: 50,
            alignItems: 'center',
            borderRadius: 10,
            justifyContent: 'center'
          }}
                onPress={() => {
                scrollViewRef.current.scrollTo({ x: SIZES.width * (stepIndex + 1), y: 0, animated: true })
                setStepIndex(stepIndex + 1)
            }}
        >
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
            {'Próximo'}
          </Text>
        </TouchableOpacity>
        </Animated.View>
      </View>
      </View>
    );

  }

    return (
        <SafeAreaView style={ScreenStyleSheet.container}>
          <View>
            {renderContent()}
          </View>
            {renderStepButtons()}
            {renderDots()}
        </SafeAreaView>
    );

}

