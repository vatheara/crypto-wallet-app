import React from "react";
import {View ,StyleSheet } from 'react-native'
import { TextInput} from "react-native-gesture-handler";


const SearchBar = () => {


    return(
        <View style={styles.seacrbar} >
            <TextInput 
            style={styles.input} 
            placeholderTextColor="#3f4652"  
            placeholder="this is input"></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    seacrbar: {
        borderRadius:30,
        height:40,
        margin:15,
        paddingLeft:10,
        backgroundColor:'#2d333e',
    },
    input:{
        color:'#fff'
    }
});

export default SearchBar;