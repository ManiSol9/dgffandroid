import React, {Component} from 'react';

import {StyleSheet, View, Text, Button, Image} from 'react-native';

import { Item, Input, Icon } from 'native-base';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerComp}>
          <View
            style={styles.logo}>
            <Image
              source={{uri: 'logo'}}
              style={styles.ImageLogo}
            />
          </View>
          <View
            style={{
              flex: 3,
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.headerText}> { this.props.title != undefined ? this.props.title : 'Invalid Page'} </Text>
          </View>
          <View style={{flex: 1, height: 80}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#FFCC00',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    elevation: 2,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  headerText: {
    fontSize: 20,
    color: '#D40511',
    fontWeight: '600',
  },
  headerComp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    top: 3
  },
  ImageLogo: {width: 100, height: 100, resizeMode: 'contain', alignSelf: 'center'},
  
});
