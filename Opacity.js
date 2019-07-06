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
export default class Opacity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fadeOutOpacity: new Animated.Value(1),
        };
        this.fadeOutAnimated = Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue: 0,//透明度动画最终值
                duration: 3000,//动画时长3000毫秒
                easing: Easing.linear,
            }
        );
    }
    _startAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
    }

    render() {
        return (
        <View style={styles.container}>
                <Animated.View style={{ width: 360, height: 300, opacity: this.state.fadeOutOpacity }}>
                    <Image ref="iamge" style={{ width: 360, height: 300 }} source={require('./beauty.png')}>
                    </Image>
                </Animated.View>
                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        width:screenW,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    touchStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf:'center',
    },
});