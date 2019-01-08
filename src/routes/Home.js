import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject(state => ({
    num: state.test.num,
    text: state.test.text,
    addNum: state.test.addNum,
    cutNum: state.test.cutNum,
    getPersonalized: state.test.getPersonalized,
}))
@observer
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { getPersonalized } = this.props;
        console.log(this.props);
        getPersonalized();
    }

    btnClick = () => {
        console.log('123');
    };

    render() {
        const { num = 0, text = '', addNum, cutNum } = this.props;
        return (
            <View variable>
                <Text>Home</Text>
                <Text>{text}</Text>
                <Text>{num}</Text>
                <Button onPress={addNum} title="addNum" color="#841584" />
                <Button onPress={cutNum} title="cutNum" color="#841584" />
            </View>
        );
    }
}

export default Home;

// const styles = StyleSheet.create({
//   topBtn: {
//     backgroundColor: '#f00',
//     color: '#fff',
//   },
// });
