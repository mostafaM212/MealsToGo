import { StyleSheet, Text, View, StatusBar , TouchableNativeFeedback} from "react-native";
import React, { useState, useEffect, useRef , useContext} from "react";
import { Camera } from "expo-camera";
import styled from "styled-components";
import AsyncStorage from '@react-native-async-storage/async-storage'
import propTypes from "prop-types";
import { AuthenticationContext } from "../services/authentication/AuthenticationContext";

const CameraContainer = styled.View`
  flex: 1;
 
`;
const CameraView = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const CameraButton= styled(TouchableNativeFeedback)`
  flex: 1;
 
`;
const CameraScreen = (props) => {
  const [permission, setPermission] = useState(null);
  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext)  
  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setPermission(status === "granted");
  });
  if (permission === null) {
    return <View />;
  }
  if (permission === false) {
    return <Text>No access to camera</Text>;
    }
    
    const snap =async ()=>{
        const photo = await cameraRef.current.takePictureAsync()

        await AsyncStorage.setItem(`${user}-photo`, photo.uri)
        props.navigation.navigate('Settings')

    }
  return (
    <CameraContainer>
      <CameraView
        type={Camera.Constants.Type.front}
        ref={(camera) => (cameraRef.current = camera) }
          >
              <CameraButton onPress={snap} >
                <CameraContainer />
              </CameraButton>
          </CameraView>
    </CameraContainer>
  );
};

export default CameraScreen;
const styles = StyleSheet.create({});
