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
export default class AnimatedDecay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decayValue: new Animated.ValueXY({ x: 0, y: 0 }),
        };
        this.decayAnimated = Animated.decay(this.state.decayValue, {
            velocity: 5,//起始速度，必填
            deceleration: 0.95,//速度衰减比例，默认为0.997
        }
        );
    }
    _startAnimated() {
        this.decayAnimated.start();
    }
    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={{
                        width: 150,
                        height: 150,
                        transform: [
                            { translateX: this.state.decayValue.x },//x轴移动
                            { translateY: this.state.decayValue.y },//y轴移动
                        ]
                    }}
                >
                    <Image ref="image" style={{ width: 150, height: 150 }}
                        source={require('./landscape.jpg')}
                    >
                    </Image>
                    <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                        <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
                        </TouchableOpacity>
                </Animated.View>
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
        width:'100%',
        height:'100%',
    },
    touchStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 36,
    },
});