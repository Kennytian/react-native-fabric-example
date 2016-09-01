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

import {Answers} from 'react-native-fabric';

class testFabric extends Component {
    render() {
        console.debug('print-render',this);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }

    componentDidMount() {
        console.debug('print-componentDidMount',this);

        Answers.logCustom('Performed a custom event', { bigData: true });

        Answers.logContentView('To-Do Edit', 'To-Do', 'to-do-42', { userid: 93 });

        Answers.logAddToCart(24.50, 'USD', 'Air Jordans', 'shoes', '987654', {color: 'red'});

        Answers.logInvite('Facebook');

        Answers.logLogin('Twitter', true);

        Answers.logSearch('React Native');

        Answers.logShare('Twitter', 'Big news article', 'post', '1234');

        Answers.logSignUp('Twitter', true);

        Answers.logPurchase(24.99,'USD',true, 'Air Jordans', 'shoes', '987654');
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
