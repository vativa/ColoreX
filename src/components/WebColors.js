import React from 'react';
import { StyleSheet, View, WebView } from 'react-native';

const WebColors = () => (
    <WebView
        style={styles.container}
        source={{ uri: 'https://www.w3schools.com/colors/colors_names.asp' }}
        contentInset={{ top: -650 }}
    />
);

WebColors.navigationOptions = {
    title: 'Web Colors',
    headerTitleStyle: {
        fontSize: 18,
    },
    headerRight: (<View />)
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WebColors;
