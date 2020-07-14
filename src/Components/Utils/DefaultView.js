import React, { Component } from 'react';
import { View } from 'react-native';

export default class DefaultView extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.props.children}
            </View>
        );
    }
}