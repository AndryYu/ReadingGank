import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

 class GankData extends React.Component {

     static navigationOptions = ({ navigation }) => ({
         title: '干货',
         tabBarIcon: ({tintColor}) =>
             //<Icon name="md-thumbs-up" size={25} color={tintColor}/>
             <Image source={require('../../img/tabIcon/ic_home_tab_girl.png')} style={[{tintColor: tintColor}]}/>
     });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default GankData;