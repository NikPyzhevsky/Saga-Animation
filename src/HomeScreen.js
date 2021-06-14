import React, { useEffect, useState } from "react"

  import styled, {ThemeProvider} from "styled-components"
import {useDispatch, useSelector} from "react-redux"
import {switchTheme} from "../src/store/themeActions"
import {lightTheme, darkTheme} from "../src/constants/Theme"
import Theme from "./constants/Theme"
import { StatusBar } from "react-native"
import Heart from "./components/heart"



export default HomeScreen = () => {
    // const ChacgeBackgroundColor = useRef(new Animated.Value(lightTheme.)).current
    const theme = useSelector(state => state.themeReducer.theme);
    const dispatch = useDispatch()
    const isLightTheme = useState(lightTheme)
    const [isChangeColor,setIsChange] = useState(lightTheme)

    useEffect(()=>{
        setIsChange(false)
    },[theme])

  return(

    <ThemeProvider theme={theme}>
        {isChangeColor?
            <Heart color={theme.mode=="light"? 
                        darkTheme.PRIMARY_BACKGROUND_COLOR
                        :
                        lightTheme.PRIMARY_BACKGROUND_COLOR} 
            backgroundChange/>
            :
            null
        }
        <Container>
            
            <StatusBar barStyle={theme.STATUS_BAR_STYLE}/>
            <TextContainer>
                <Text> Welcome to Demo Test App</Text>
            </TextContainer>
            {/* {
                isChangeColor?
                <Heart color={theme.PRIMARY_BACKGROUND_COLOR}/>
                :
                null
            } */}
            {theme.mode === "light" ?(
                <Button
                    onPress={() => {
                        setIsChange(true)  
                        dispatch(switchTheme(darkTheme))}}
                >
                    <ButtonText>Change To Dark Theme</ButtonText>
                </Button>
                )
                :
                (
                <Button
                    onPress={() => { 
                        setIsChange(true)  
                        dispatch(switchTheme(lightTheme))}}
                >
                    <ButtonText>Change To Light Theme</ButtonText>
                </Button>
                )
            }
        </Container>
    </ThemeProvider>
  )
 }

//  const Container = styled.View'
//   flex:1;
//  '

 const Container = styled.View` 
    flex:1;
    align-items: center;
    justify-content:center;
    background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}
`;

const TextContainer = styled.View` 
    border: 1px solid ${props => props.theme.PRIMARY_TEXT_COLOR};
    padding: 16px;
    border-radius: 6px;
`;

const Text = styled.Text` 
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
    font-size:24px;
    font-weight:600;
`;

const Button = styled.TouchableOpacity` 
    margin:32px 0;
    background-color: ${props => props.theme.PRIMARY_BUTTON_COLOR};
    padding:10px 32px;
    border-radius:6px;
`;

const ButtonText = styled.Text` 
    color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
    font-size: 15px;
    font-weight: 500;
`;