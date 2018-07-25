import React, { Component } from 'react';
import axios from 'axios';
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';

class ApiColors extends Component {
    state = {
        webColors: [],
        fetching: false
    };
    
    componentDidMount() {
        this.setState({ fetching: true });
        const url = 'https://gist.githubusercontent.com/raineorshine/10394189/raw/9b8b43edda19d7fa317a18018b0fa619b53c1e8f/webcolors.json';
        axios.get(url).then(response => {
            return response.data.map(color => color.name.toLowerCase());
        }).then(webColors => {
            return this.setState({ webColors, fetching: false });
        }).catch(console.error);
    }
    
    handleSelect(color) {
        this.props.navigation.state.params.addNewColor(color);
        this.props.navigation.navigate('Home');
    }
    
    render() {
        const { webColors } = this.state;
        const { navigate } = this.props.navigation;
        // Prepare array of objects for FlatList
        const colorButtons = webColors.map((color, key) => ({ color, key: `${key}` }));
        // console.log(colorButtons);
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.spinner} animating={this.state.fetching} size={'large'} />
                <FlatList
                    data={colorButtons}
                    renderItem={({ item }) => (
                        <ColorButton
                            color={item.color}
                            onSelect={() => navigate('Details', { color: item.color })}
                            onAddNew={() => this.handleSelect(item.color)}
                        />
                    )}
                />
            </View>
        );
    }
}

ApiColors.navigationOptions = {
    title: 'Api Colors',
    headerTitleStyle: {
        fontSize: 18
    },
    headerRight: (<View />)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
    },
    spinner: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default ApiColors;
