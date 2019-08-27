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
} from 'react-native';

import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2';

const credentials = {
  client_id: 'de21588f-0dc0-4133-8530-22443ca5eadd',
  client_secret: '5TdDsEHZzzVzf6YNVn4EI5K?yLdZo-:?',
  scope: 'User.ReadBasic.All',
};

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      azureLoginObject: {},
      loginSuccess: false,
    };
    this.azureInstance = new AzureInstance(credentials);
    this._onLoginSuccess = this._onLoginSuccess.bind(this);
  }

  _onLoginSuccess() {
    this.azureInstance
      .getUserInfo()
      .then(result => {

        this.props.navigation.navigate("Dashboard")

        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
      return (
        <AzureLoginView
          azureInstance={this.azureInstance}
          loadingMessage="Loading"
          onSuccess={this._onLoginSuccess}
        />
      );
    }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
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
    flex: 1,
    backgroundColor: 'red',
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
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  mainBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottom: {
    height: 300,
    alignItems: 'center',
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
    fontSize: 17,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  signTextContent: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    top: 10,
  },
  logo: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
