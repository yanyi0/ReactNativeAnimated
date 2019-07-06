import React, { PureComponent, Component } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Easing,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;
import Opacity from './Opacity';
import Mixture from './Mixture';
import AnimatedSpring from './AnimatedSpring'
import AnimatedDecay from './AnimatedDecay'
import AnimatedParallel from './AnimatedParallel'
import AnimatedSequence from './AnimatedSequence'
import AnimatedStagger from './AnimatedStagger'
export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: '动画'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.paragraph}>{this.props.count}</Text> */}
            <AnimatedStagger/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#ffffff",
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:10,
    },
    paragraph: {
        margin: 24,
        alignSelf:'center',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
