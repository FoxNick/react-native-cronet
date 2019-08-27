/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  state = {
    google: 0,
    facebook: 0,
    github: 0,
    apiResponse: "test"
  };

  componentDidMount() {
    fetch("https://www.google.com").then(response => {
      this.setState({google: response.status})
    }).catch(e => {
      console.log(e)
    })

    fetch("https://www.facebook.com").then(response => {
      this.setState({facebook: response.status})
    }).catch(e => {
      console.log(e)
    })

    fetch("https://www.github.com").then(response => {
      this.setState({github: response.status})
    }).catch(e => {
      console.log(e)
    })

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.text())
      .then(text => {
        this.setState({apiResponse: text})
      }).catch(e => {
        console.log(e)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆RNCronet example☆</Text>
        <Text style={styles.instructions}>Google: {this.state.google}</Text>
        <Text style={styles.instructions}>Facebook: {this.state.facebook}</Text>
        <Text style={styles.instructions}>Github: {this.state.github}</Text>
        <Text style={styles.instructions}>Api Response: {this.state.apiResponse}</Text>
        <Image           
          style={{width: 200, height: 200}}
          source={{uri: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}} />
        <Image           
          style={{width: 200, height: 200}}
          source={{uri: "https://res.cloudinary.com/demo/image/upload/fl_progressive/sample.jpg"}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
