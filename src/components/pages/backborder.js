import React, {Component} from 'react';

import {StyleSheet, View, Text, Button, Image} from 'react-native';

export default class BackBorder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{width: 150, height: 50, justifyContent: 'center'}}>
          <Text style={styles.borderLine} />
        </View>
        <View
          style={{
            width: '20%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../images/back.png')}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{width: 150, height: 50, justifyContent: 'center'}}>
          <Text style={styles.borderLine} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
    },
    bodeyHeader: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500',
    },
    bodeyText: {
      color: 'black',
      fontSize: 16,
      opacity: 0.7,
      marginLeft: 0,
    },
    listText: {
      flex: 1,
      paddingLeft: 10,
      color: 'black',
      fontSize: 16,
      opacity: 0.7,
    },
    listBullet: {
      width: 10,
      height: 10,
      backgroundColor: '#D40511',
      top: 5,
    },
    bodyImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    borderLine: {
      height: 2,
      backgroundColor: 'black',
    },
    bodeySecondHeader: {
      color: '#D40511',
      fontSize: 18,
      fontWeight: '500',
    },
  });
  