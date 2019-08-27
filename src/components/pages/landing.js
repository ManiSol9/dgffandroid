import React, {Fragment, Component} from 'react';
//import react in our code.
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

// import all basic components

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Landing extends Component {
  //Screen1 Component

  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={{uri: 'sign_in_bg'}}
          style={{
            resizeMode: 'stretch',
            width: width,
            height: height,
          }}
        />

        <SafeAreaView style={styles.body}>
          <View style={styles.mainBody}>
            <View style={styles.logo}>
              <Image
                source={{uri: 'logo'}}
                style={{
                  flex: 1,
                  aspectRatio: 1.25,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.bottom}>
              <View style={styles.siginText}>
                <Text style={styles.signTextHeader}>DHL GLOBAL TRACKING</Text>
                <Text style={styles.signTextContent}>
                  There are some properties that are set when you initialize the
                  tab navigator and others that can be customized perscreen
                </Text>
              </View>
              <TouchableOpacity
                style={styles.buttonSignIn}
                onPress={() => this.login()}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    width: width,
    height: height + 80,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  body: {
    width: width,
    position: 'absolute'
  },
  header: {
    backgroundColor: '#d52a29',
  },
  buttonSignIn: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 5,
    top: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Delivery_A_Rg',
    fontWeight: 'bold',
  },
  mainBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    top: '30%'
  },
  bottom: {
    height: 300,
    alignItems: 'center',
    top: '30%'
  },
  middle: {
    justifyContent: 'flex-end',
    backgroundColor: 'red',
    height: 200,
  },
  siginText: {
    width: '60%',
  },
  signTextHeader: {
    color: 'red',
    fontSize: 16,
    padding: 5,
    textAlign: 'center',
    fontFamily: 'Delivery_A_Rg',
  },
  signTextContent: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
    top: 5,
    fontFamily: 'Delivery_A_Lt',
  },
  logo: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
