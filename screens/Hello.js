import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image,
    Platform
} from 'react-native';



const Hello = () => {
    return (
        <View style={styles.contianer}>
            <Text style={styles.baseText}>Hello World 1</Text>
            <Text style={styles.baseText}>Hello World 2</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    baseText: {
        fontSize:24,
        color:'lightgreen'
    }
    ,
    contianer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    }
});


export default Hello;