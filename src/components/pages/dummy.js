<ImageBackground
source={{uri: 'sign_in_bg'}}
style={styles.MainContainer}>
<Fragment>
  <StatusBar
    barStyle="light-content"
    style={styles.header}
    hidden={false}
    backgroundColor="#000"
    translucent={true}
  />
  <SafeAreaView style={styles.body}>
    <View style={styles.mainBody}>
      <View style={styles.logo}>
        <Image
          source={{uri: 'logo'}}
          style={{
            flex: 1,
            aspectRatio: 0.5,
            resizeMode: 'contain'
          }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.siginText}>
          <Text style={styles.signTextHeader}>DHL GLOBAL TRACKING</Text>
          <Text style={styles.signTextContent}>
            There are some properties that are set when you initialize
            the tab navigator and others that can be customized
            perscreen
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
</Fragment>
</ImageBackground>


<TouchableOpacity onPress={() => this.Addvalue('<')}>
<View style={styles.popUpButton}>
  <Text style={styles.popUpText}> {'<'} </Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.Addvalue('<')}>
<View style={styles.popUpButton}>
  <Text style={styles.popUpText}> {'>'} </Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.Addvalue('<')}>
<View style={styles.popUpButton}>
  <Text style={styles.popUpText}> {'='} </Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.Addvalue('<')}>
<View style={styles.popUpButton}>
  <Text style={styles.popUpText}> {'<='} </Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.Addvalue('<')}>
<View style={styles.popUpButton}>
  <Text style={styles.popUpText}> {'>='} </Text>
</View>
</TouchableOpacity>




<View style={styles.MainContainer}>
<Header />
<ScrollView>
  <View style={{padding: 15}}>
    <View style={{height: 120, alignItems: 'center'}}>
      <View style={styles.circle}>
        <Text style={styles.circleText}> Step 1 </Text>
      </View>
    </View>
    <View style={{height: 60}}>
      <BackBorder />
    </View>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.inputTags}>
        <View style={{alignContent: 'flex-start', width: '85%'}}>
          <Text style={styles.inputText}>Temperature </Text>
        </View>
        <Item style={styles.inputSpace} regular>
          <TouchableOpacity onPress={() => this.showPopUp('T')}>
            <View style={styles.selectBox}>
              <Text style={styles.popUpText}>
                {' '}
                {this.state.tempProptype != null &&
                this.state.selectedProp == 'T'
                  ? this.state.tempProptype
                  : '?'}{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <Input placeholder="0" style={styles.inputTextBox} />
        </Item>
      </View>
      <View style={styles.inputTags}>
        <View style={{alignContent: 'flex-start', width: '85%'}}>
          <Text style={styles.inputText}>Humidity </Text>
        </View>
        <Item style={styles.inputSpace} regular>
          <TouchableOpacity onPress={() => this.showPopUp('T')}>
            <View style={styles.selectBox}>
              <Text style={styles.popUpText}>
                {' '}
                {this.state.tempProptype != null &&
                this.state.selectedProp == 'T'
                  ? this.state.tempProptype
                  : '?'}{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <Input placeholder="0" style={styles.inputTextBox} />
        </Item>
      </View>
      <View style={styles.inputTags}>
        <View style={{alignContent: 'flex-start', width: '85%'}}>
          <Text style={styles.inputText}>Shock </Text>
        </View>
        <Item style={styles.inputSpace} regular>
          <TouchableOpacity onPress={() => this.showPopUp('T')}>
            <View style={styles.selectBox}>
              <Text style={styles.popUpText}>
                {' '}
                {this.state.tempProptype != null &&
                this.state.selectedProp == 'T'
                  ? this.state.tempProptype
                  : '?'}{' '}
              </Text>
            </View>
          </TouchableOpacity>
          <Input placeholder="0" style={styles.inputTextBox} />
        </Item>
      </View>
      <View style={styles.inputTags}>
        <View style={{alignContent: 'flex-start', width: '85%'}}>
          <Text style={styles.inputText}>Notification Email </Text>
        </View>
        <Item style={styles.inputSpace} regular>
          <Input
            placeholder="Please enter email"
            style={styles.inputTextBox}
          />
        </Item>
      </View>

      <View styles={styles.inputView}>
        <TouchableOpacity
          style={styles.buttonSignIn}
          onPress={() => this.goToAlaram()}>
          <Text style={styles.buttonText}> Create Shipment </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</ScrollView>
<Overlay
  visible={this.state.modalVisible}
  onClose={this.onClose}
  closeOnTouchOutside
  animationType="zoomIn"
  containerStyle={{backgroundColor: 'rgba(0,0,0,.8)'}}
  childrenWrapperStyle={{backgroundColor: '#eee', borderRadius: 2}}
  animationDuration={500}>
  {(hideModal, overlayState) => (
    <View style={{width: width}}>
      <View style={styles.titlePopUp}>
        <Text style={styles.titleText}>
          {' '}
          Select operator then enter value{' '}
        </Text>
      </View>
      <View
        style={{
          flec: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => this.addValue('<')}>
          <View style={styles.popUpButton}>
            <Text style={styles.popUpText}> {'<'} </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.addValue('>')}>
          <View style={styles.popUpButton}>
            <Text style={styles.popUpText}> {'>'} </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.addValue('=')}>
          <View style={styles.popUpButton}>
            <Text style={styles.popUpText}> {'='} </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.addValue('<=')}>
          <View style={styles.popUpButton}>
            <Text style={styles.popUpText}> {'<='} </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.addValue('>=')}>
          <View style={styles.popUpButton}>
            <Text style={styles.popUpText}> {'>='} </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )}
</Overlay>
</View>