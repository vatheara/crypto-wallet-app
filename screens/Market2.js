import React from 'react';

import SearchBar from '../components/SearchBar';
import {View, StyleSheet} from 'react-native';



const Market2 = () => {
    return (
        <View style={styles.contianer}>
            <SearchBar/>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        contianer:{
            flex:1,
            backgroundColor:"#1c232a"
        }
    }
)

export default Market2;