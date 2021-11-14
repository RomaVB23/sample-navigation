import * as React from 'react';
import { Text, View, Button } from 'react-native';
import getDoubleArray, {getArrayCoppy, getArrayLenth} from '../utills/arrayHelper'

export default class Counter extends React.Component {

    state = {
      count: 0,
      title: 'No title'
    }

    constructor(props) {
      super (props);
      this.state = {
        count: 0, 
        title: props.title
      }
    }

    componentDidMount () {
      console.log('componentDidMount')
    }

    componentDidUpdate () {
      console.log('componentDidUpdate')
    }
    // 
    // Аналог UseEfecta с какимито зависимостями 
    // 1.10.20    10 урок 
    // В данном случае независим от того что изменилось 

    componentWillUnmount () {
      console.log('componentWillUnmount')
    }

    // state = {
    //   count: 0,
    //   
    // }
  
    increaseCounter = () => {
      this.setState({ count: this.state.count + 1 });
    }

    changeText = () => {
      this.setState({title:'А вот и новый текст'});
    }

    render() {
      console.log('render Counter', this.props);
      const t = () => {}
      const {title, count} = this.state
      return (
        <View>
          <Text>{title}</Text>
          <Text>Нажали на кнопку 5 раз {count}</Text>
          <View style={{margin: 10}}/>
          <Text>{this.state.title}</Text>
          <Text>Нажали на кнопку 5 раз {this.state.count}</Text>
          <Button title="Поменяй счетчик" onPress={this.increaseCounter}/>
          <Button title="Поменяй текст" onPress={this.changeText}/>
        </View>
      );
    }
  }