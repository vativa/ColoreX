import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class ColorForm extends Component {
    state = {
        color: ''
    };
    
    submit() {
        this.setState({ color: '' });
        this.props.addNewColor(this.state.color.trim().toLowerCase());
    }
    
    render() {
        const { navigate, addNewColor } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter a color...'}
                    value={this.state.color}
                    onChangeText={color => this.setState({ color })}
                    onBlur={() => this.submit()}
                />
                <Text style={styles.button}>Add</Text>
                <Text style={styles.button} onPress={() => navigate('ApiColors', { addNewColor })}>Api</Text>
                <Text style={styles.button} onPress={() => navigate('WebColors')}>Web</Text>
            </View>
        );
    }
}

ColorForm.propTypes = {
    addNewColor: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        margin: 5,
        borderRadius: 5,
    },
    input: {
        flex: 4,
        height: 50,
        padding: 8,
        fontSize: 16,
    },
    button: {
        flex: 1,
        textAlign: 'center',
        height: 50,
        fontSize: 14,
        marginLeft: 5,
        paddingTop: 15,
        borderRadius: 5,
        backgroundColor: 'whitesmoke',
    },
});
