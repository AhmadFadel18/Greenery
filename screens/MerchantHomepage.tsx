/* eslint-disable prettier/prettier */
import {Button} from 'react-native-paper';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, TextInput, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StackActions} from '@react-navigation/native';
//user session security
import auth, {firebase} from '@react-native-firebase/auth';

export default function MerchantHomepage({navigation}: {navigation: any}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if (user != null) {
      if (user.email != null) {
        console.log('registered: ', email);
        setEmail(user.email);
      } else {
        console.log('Error in retrieving user email');
      }
    } else {
      console.log('Error in retrieving user data');
    }
  }, [user, email]);

  const handleLogout = async () => {
    auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        setEmail('');
      });
    navigation.dispatch(StackActions.replace('MerchantSignin'));
  };

  // const AppButton = ({ onPress, title }) => (
  //   <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
  //     <Text style={styles.appButtonText}>{title}</Text>
  //   </TouchableOpacity>
  // );

  return (

    <View style={styles.flexContainer}>
      <View style={styles.row}>
        <ImageBackground source={require('../assets/banner.png')} style={styles.cover}
        resizeMode="cover">
          <TextInput style={styles.input} placeholder="Today's agenda..."/>
        </ImageBackground>
      </View>

      {/* <View style={styles.container}>
        <Text>Welcome {username}</Text>
        <Button textColor="black" mode="contained" onPress={handleLogout}>
        Log Out
        </Button>
      </View> */}

      <View>
        <Text
          style={styles.text}>
          What would you like to do today?
        </Text>
      </View>

      <View style={styles.flexButton}>

        <TouchableOpacity style={styles.touchButton}>
        <View style={styles.buttonBox}>
          <Image source={require('../assets/editMenu.png')} resizeMode="cover" style={styles.flexContainer} />
          <Button onPress={() => { handleLogout; } } children={undefined}/>
        </View>
        </TouchableOpacity>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.touchButton}
            onPress={()=> { navigation.dispatch(StackActions.replace('MerchantEditProfile'));}}
            >
            <Image
              source={require('../assets/editMerchantProfile.png')}
              resizeMode="cover" style={styles.flexContainer}
              />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.editContainer}>
        <Text style={styles.buttonTitle}>Edit Menu</Text>
        <Text style={styles.buttonTitle}>Edit Profile</Text>
      </View>

      <View style={styles.flexButton}>
        <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={()=> { navigation.dispatch(StackActions.replace('MerchantMenu'));}}
          >
          <Image source={require('../assets/editMenu.png')} resizeMode="contain" style={styles.flexContainer}
          />
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.editContainer}>
        <Text style={styles.buttonTitle}>Check the News</Text>
      </View>

      <View style={styles.container}>
      <Button
          textColor="#841584"
          onPress={() => Alert.alert('Simple Button pressed')} children={undefined}      />
      </View>

       <View style={styles.bottomSomething}>

        {/* <Image source={require('../assets/Home.png')}  style={{width:37,height:46 }}
          onPress={()=> { navigation.dispatch(StackActions.replace('MerchantHomepage'));

        }}/>

        <Image source={require('../assets/News.png')}  style={{width:37,height:46 }}
          onPress={()=> { navigation.dispatch(StackActions.replace());

        }}/>

        <Image source={require('../assets/Search.png')}  style={{flexwidth:37,height:46 }}
          onPress={()=> { navigation.dispatch(StackActions.replace());

        }}/>

        <Image source={require('../assets/Profile.png')} style={{width:37,height:46 }}
          onPress={()=> { navigation.dispatch(StackActions.replace('MerchantEditProfile'));

        }}/>

        <Image source={require('../assets/Settings.png')}  style={{width:37,height:46}}
          onPress={()=> { navigation.dispatch(StackActions.replace());

        }}/> */}

        <TouchableOpacity>
            <Text onPress={() => {
              navigation.dispatch(StackActions.replace('MerchantHomepage'));
            }}>Home</Text>
        </TouchableOpacity>

        <Text onPress={() => {
                //navigation.dispatch(StackActions.replace(''));
              }}>News</Text>
        <Text onPress={() => {
                //navigation.dispatch(StackActions.replace());
              }}>Search</Text>
        <Text onPress={() => {
                navigation.dispatch(StackActions.replace('MerchantEditProfile'));
              }}>Profile</Text>
        <Text onPress={() => {
                //navigation.dispatch(StackActions.replace());
              }}>Setting</Text>

       </View>
    </View>



  );
}

const styles = StyleSheet.create({
  cover:{
    height:119,
    width:420,
  },
  row:{
    flexDirection:'row',
  },
  flexContainer:{
    flex:1,
  },
  bottomSomething:{flexDirection:'row',
    justifyContent:'space-around',marginTop: 10,
    borderWidth:1,borderColor:'black',padding:30,
  },
  editContainer:{
    justifyContent:'space-around',
    flexDirection:'row',
  },
  touchButton:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 20,
    fontWeight: '900',
    marginTop: 24,
    marginLeft: 15,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    justifyContent:'center',
    alignItems: 'center',
    marginLeft:45,
    marginTop:20,
},
buttonTitle : {
  fontWeight: 'bold',
  color: 'black',
  marginTop: 3,
  fontSize: 14,
},
buttonBox: {
  borderWidth:3,
  width:108,
  height:107,
  backgroundColor:'#E9BA8B',
  borderRadius:8,
},
flexButton: {
  borderColor:'black',
  justifyContent:'space-around',
  flexDirection:'row',
  marginTop:80,
},
});
