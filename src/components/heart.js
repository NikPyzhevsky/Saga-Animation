import { delay } from "@redux-saga/core/effects"
import React, { useEffect, useRef } from "react"
import { View, Animated, Dimensions }
from "react-native"

export default Heart = ({color, backgroundChange}) =>{
    const SizeAnimation = useRef(new Animated.Value(100)).current

    const AnimationStyle = {
        height: SizeAnimation,
        width: SizeAnimation,
        // borderRadius: SizeAnimation,
    }

    useEffect(()=>{
        delay(100)
        Animated.timing(SizeAnimation, {
            toValue: Dimensions.get('window').height*1.5,
            duration:500,
            useNativeDriver:false
          }).start();
    },[])
    return(
        <Animated.View
            style={[
                {
                    // height:100,
                    // width:100,
                    borderRadius:200,
                    borderTopLeftRadius:backgroundChange?0:500,
                    backgroundColor:color,
                    position:"absolute",
                     zIndex:backgroundChange?1:0,    
                },
                AnimationStyle
            
                ]
            }
        >

        </Animated.View>
    )
}