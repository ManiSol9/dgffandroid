import React, {Component} from 'react';
import Header from './header';
import BackBorder from './backborder';
import {Table, Row, Rows} from 'react-native-table-component';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const height = Dimensions.get('window').height - 80;
const width = Dimensions.get('window').width - 80;
import ProgressCircle from 'react-native-progress-circle';

export default class ShipmentStep3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Temperature', 'Humidity', 'Shock'],
      tableData: [['< 10', '> 20', '123 - 146']],
    };
  }

  goToAlaram = () => {
    this.props.navigation.navigate('ShipmentStep4');
  };

  render() {
    const state = this.state;

    return (
      <View style={styles.MainContainer}>
        <Header title={'Alaram Configuration'} />
        <View
          style={{
            flex: 1,
            padding: 15,
            //alignItems: 'center'
          }}>
          <View style={{height: 120, alignItems: 'center'}}>
            <ProgressCircle
              percent={100}
              radius={50}
              borderWidth={8}
              color="#FFCC00"
              shadowColor="#999"
              bgColor="#fff">
              <Text style={{fontSize: 18, fontFamily: 'Delivery_A_Rg'}}>
                {'Step 3'}
              </Text>
            </ProgressCircle>
          </View>
          <View style={{height: 60}}>
            <BackBorder />
          </View>
          <View style={styles.container}>
            <Table
              borderStyle={{
                borderWidth: 2,
                borderColor: '#ddd',
                borderRadius: 5,
              }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.labaleTitle}>Notification Email</Text>
            <Text style={styles.labaleText}>
              v.manikanta_pedireddy@dpdhl.com
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.labaleTitle}>Shipment Number</Text>
            <Text style={styles.labaleText}>#1231231232131231321</Text>
          </View>

          <View
            style={styles.footer}>
            <TouchableOpacity
              style={styles.buttonSignIn}
              onPress={() => this.goToAlaram()}>
              <Text style={styles.buttonText}> Start Shipment </Text>
            </TouchableOpacity>
          </View>
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
  circle: {
    width: 100,
    height: 100,
    top: 5,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignIn: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  circleText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Delivery_A_Rg',
    color: '#FFCC00',
  },
  container: {
    padding: 0,
    paddingTop: 15,
    backgroundColor: '#fff',
    height: 100,
  },
  head: {
    height: 40,
    backgroundColor: '#FFCC00',
    fontFamily: 'Delivery_A_Rg',
    fontSize: 17,
  },
  text: {margin: 6, fontFamily: 'Delivery_A_Rg', fontSize: 16},
  infoBox: {
    height: 150,
    top: 20,
  },
  labaleTitle: {
    fontFamily: 'Delivery_A_Rg',
    fontSize: 20,
    marginBottom: 10,
  },
  labaleText: {
    fontFamily: 'Delivery_A_Rg',
    fontSize: 30,
  },
  inputView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 100,
  },
  footer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  }
});
