import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, FlatList, StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';
import ColorForm from './ColorForm';
// import colornames from '../assets/utils/colornames';

export default class ColorList extends Component {
    static navigationOptions = {
        title: 'Available Colors',
        headerTitleStyle: {
            fontSize: 20,
        },
        headerRight: (<View />)
    };
    
    constructor(props) {
        super(props);
        this.state = {
            availableColors: []
        };
        this.addNewColor = this.addNewColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }
    
    componentDidMount() {
        AsyncStorage.getItem(
            '@ColorStorage:colors',
            (error, colors) => {
                if (error) return console.error('Error loading colors:', error);
                if (colors) return this.setState({ availableColors: JSON.parse(colors) });
                return console.warn('Nothing in color storage');
            }
        );
    }
    
    addNewColor(color) {
        const availableColors = [color, ...this.state.availableColors];
        this.setState({ availableColors });
        this.persistColors(availableColors);
    }
    
    removeColor(color) {
        const availableColors = this.state.availableColors.filter(c => c !== color);
        this.setState({ availableColors });
        this.persistColors(availableColors);
    }
    
    persistColors(colors) {
        AsyncStorage.setItem(
            '@ColorStorage:colors',
            JSON.stringify(colors)
        );
    }
    
    render() {
        const { availableColors } = this.state;
        const { navigate } = this.props.navigation;
        const colorButtons = availableColors.map((color, key) => ({ color, key: `${key}` }));
        return (
            <View style={styles.container}>
                <FlatList
                    data={colorButtons}
                    renderItem={({ item }) => (
                        <ColorButton
                            color={item.color}
                            onSelect={() => navigate('Details', { color: item.color })}
                            onRemove={this.removeColor}
                        />
                    )}
                    ListHeaderComponent={<ColorForm addNewColor={this.addNewColor} navigate={navigate} />}
                />
            </View>
        );
    }
}

ColorList.defaultProps = {
    onColorSelected: f => f
};

ColorList.propTypes = {
    onColorSelected: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
});
