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
export default class AnimatedSpring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            springValue: new Animated.Value(1),
        };
        this.springAnimated = Animated.spring(
            this.state.springValue,
            {
                toValue: 1,
                friction: 2,//弹跳系数
                tension: 10,//控制速度
            }
        );
    };
    _startAnimated() {
        this.state.springValue.setValue(0.1);
        this.springAnimated.start();
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        width: 282,
                        height: 152,
                        transform: [{ scale: this.state.springValue }]
                    }}
                >
                    <Image ref='image' style={{ width: 282, height: 152 }}
                        source={require('./scenery.jpg')}
                    >
                    </Image>
                </Animated.View>
                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
       container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#ecf0f1',
          padding:8,
          width:'100%',
          height:'100%',
       },
       touchStyle:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          alignSelf:'center',
          marginTop:6,
       },
});