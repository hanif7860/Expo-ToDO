
import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";

const CustomButton = (Props) => {
  if(Props.disabled)
  var btnColor = '#8566aa'
  else
  var btnColor = Props.color != undefined ? Props.color : 'blue';
return(
    <TouchableOpacity
     activeOpacity={0.5}
     onPress={Props.onPressEvent}
     disabled={Props.disabled}
     >
  <View 
     style={{...styles.ButtonContainer,backgroundColor: btnColor}}>
    <Text style={{
      fontSize: Props.textSize,
      color: Props.textColor,
    }}>
      {Props.text}</Text>
  </View>
</TouchableOpacity>
);
}


const styles = StyleSheet.create({
ButtonContainer: {
 paddingHorizontal:20,
 padding:10,
 borderRadius:50,
},
ButtonText: {
    color:'white',
     fontSize:20
}
})

export default CustomButton;