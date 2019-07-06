import React, { PureComponent, Component } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Easing
} from 'react-native';
import { connect } from 'react-redux';
export default class Mixture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animatedValue: new Animated.Value(0),
        }
        this.rotateAnimated = Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.in,
            }
        );
    }
    _startAnimated() {
        this.state.animatedValue.setValue(0);
        this.rotateAnimated.start(() => this._startAnimated());
    }
    render() {
        const rotateZ = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        const opacity = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        });
        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        });
        const textSize = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        });
        const marginLeft = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 200, 0]
        });
        return (
            <View style={styles.container}>
                <Animated.View style={{
                    marginTop: 10,
                    width: 100,
                    height: 100,
                    transform: [{ rotateZ: rotateZ },]
                }}>
                    <Image style={{ width: 100, height: 100 }}
                        source={require('./stream.jpg')}
                    >
                    </Image>
                </Animated.View>
                <Animated.View
                    style={{
                        marginTop: 2,
                        width: 100,
                        height: 100,
                        opacity: opacity,
                        backgroundColor: 'red',
                    }}
                />
                <Animated.Text
                    style={{
                        mariginTop: 2,
                        width: 100,
                        fontSize:18,
                        color:'white',
                        backgroundColor:'red',
                        transform:[{rotateX:rotateX}]
                    }}
                >
                红酥手，黄藤酒，满城春色宫墙柳。
                </Animated.Text>
                <Animated.Text
                   style={{
                       marginTop:2,
                       height:100,
                       lineHeight:100,
                       fontSize:textSize,
                       color:'red'
                   }}
                >
                    春如旧，人空瘦，泪痕红浥鲛绡透。
                </Animated.Text>
                <Animated.View
                style={{
                    marginTop:2,
                    width:100,
                    height:100,
                    marginLeft:marginLeft,
                    backgroundColor:'red',
                }}
                />
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
        width:'100%',
        height:'100%',
    },
    touchStyle:{
        flex:1,
        marginTop:6,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        alignSelf:'center',
    },
});