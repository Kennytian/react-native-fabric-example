/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Crashlytics} from 'react-native-fabric';

class testFabric extends Component {
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

    componentDidMount() {
        Crashlytics.setUserName('Kenny');

        Crashlytics.setUserEmail('kenny@email.com');

        Crashlytics.setUserIdentifier('1048576');

        Crashlytics.setBool('overtime', true);

         Crashlytics.setString('organization', 'zhulux');

        // Forces a native crash for testing
        //Crashlytics.crash();

        // Record a non-fatal JS error
        //Crashlytics.recordError('something went wrong!');

        // Due to differences in primitive types between iOS and Android I've exposed a setNumber function vs. setInt, setFloat, setDouble, setLong, etc
        Crashlytics.setNumber('post_count', 5);

        // Record a non-fatal JS error on Android
        Crashlytics.logException('Forces a native crash for testing');
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

AppRegistry.registerComponent('testFabric', () => testFabric);
