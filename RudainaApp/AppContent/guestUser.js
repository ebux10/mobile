import React from 'react';
import { StyleSheet, View, Button, Alert, Text, Image} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import ImageSlider from 'react-native-image-slider';


class GuestScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  };
  static navigationOptions = {
    title: 'Guest!',
  };
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Image style = {styles.logo}
                source={require('../webContent/RudainaLogo.png')}
              />
          </View>

          <View style={styles.content}>
              <Text>This is the content area!</Text>
              <ImageSlider images={[
                  'http://placeimg.com/640/480/any',
                  'http://placeimg.com/640/480/any',
                  'http://placeimg.com/640/480/any'
                ]}/>
            </View>

          <View style={styles.footer}>
              <Button style={styles.submitButton}
                onPress={() => navigate('Doc')}
                title="Docs"
              />

              <Button style={styles.submitButton}
                onPress={() => navigate('Tracker')}
                title="Tracker"
              />

              <Button style={styles.submitButton}
                onPress={() => navigate('Game')}
                title="Fleppy"
              />

              <Menu
                ref={this.setMenuRef}
                button={<Text onPress={this.showMenu}>Menu</Text>}>
                  <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                  <MenuItem onPress={this.hideMenu} disabled> Menu item 3</MenuItem>
                  <MenuDivider />
                  <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                </Menu>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'powderblue',
    width: 380,
    height: 85,
    alignItems: 'flex-start',
  },
  logo: {
    width: 100,
    height: 85,
    marginLeft: 15,
  },
  content: {
    backgroundColor: 'skyblue',
    width: 380,
    height: 450,
    alignItems: 'center',
  },
  submitButton: {
    margin: 30,
    marginVertical:20,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    //marginTop: 5,
    width: 380,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  }
})

export default GuestScreen;
