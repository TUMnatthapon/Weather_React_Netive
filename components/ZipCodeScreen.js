import React from 'react';
import { ImageBackground, StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
        <View>
            <Text style={styles.txt1}>{place}</Text>
            <Text style={styles.txt}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class ZipCodeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <ImageBackground source={require('./bg.jpeg')} style={styles.backdrop}>
                    <FlatList
                        data={availableZipItems}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                    />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backdrop: { width: '100%', height: '100%' },
    txt: { textAlign: 'center', color: 'white', fontSize: 20 },
    txt1 : {textAlign: 'center', color: 'white', fontSize: 20,paddingTop:15}
});