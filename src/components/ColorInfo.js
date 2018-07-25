import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorTools from 'color';

const ColorInfo = ({ navigation }) => {
    const color = ColorTools(navigation.state.params.color);
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={[styles.text, { color: color.negate() }]}>{color.hex()}</Text>
            <Text style={[styles.text, { color: color.negate() }]}>{color.rgb().string()}</Text>
            <Text style={[styles.text, { color: color.negate() }]}>{color.hsl().string()}</Text>
        </View>
    );
};

ColorInfo.navigationOptions = ({ navigation }) => ({
    title: `Details of ${navigation.state.params.color}`,
    headerTitleStyle: {
        fontSize: 18,
    },
    headerRight: (<View />)
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        textAlign: 'center',
        margin: 10,
        fontSize: 18,
    },
});

export default ColorInfo;
