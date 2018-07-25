import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// Make onSelect optional with ES6 default arguments
export default ({ color, onSelect = null, onRemove = null, onAddNew = null }) => (
    <View style={styles.container}>
        <TouchableHighlight
            style={[{ flex: 7 }, styles.touchable]}
            onPress={() => onSelect ? onSelect(color) : null}
            underlayColor={'#bcd'}
        >
            <View style={styles.wrapper}>
                <View style={[styles.sample, { backgroundColor: color }]} />
                <Text style={styles.text}>{color}</Text>
            </View>
        </TouchableHighlight>
        {onAddNew &&
        <TouchableHighlight
            style={[styles.touchable, styles.button, { backgroundColor: 'whitesmoke' }]}
            onPress={() => onAddNew(color)}
        >
            <Text style={[styles.buttonTxt, { color: 'black' }]}>Add</Text>
        </TouchableHighlight>
        }
        {onRemove &&
        <TouchableHighlight
            style={[styles.touchable, styles.button]}
            onPress={() => onRemove(color)}
        >
            <Text style={styles.buttonTxt}>X</Text>
        </TouchableHighlight>
        }
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
    },
    touchable: {
        backgroundColor: 'whitesmoke',
        borderRadius: 5,
        margin: 5,
        height: 50,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 20,
    },
    sample: {
        alignSelf: 'center',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: StyleSheet.hairlineWidth
    },
    text: {
        alignSelf: 'center',
        fontSize: 14,
        lineHeight: 15,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 0,
        // paddingTop: 4,
        backgroundColor: 'red',
        height: 50,
    },
    buttonTxt: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 15,
        color: 'white',
    }
});
