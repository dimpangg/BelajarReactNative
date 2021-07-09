import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  ToastAndroid,
  BackHandler,
  PermissionsAndroid,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      value: 'true',
      username: '',
      data: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7],
      dataPembayaran: [
        {
          id: 1,
          namaBarang: 'apel',
          harga: 10000,
        },
        {
          id: 2,
          namaBarang: 'jeruk',
          harga: 15000,
        },
        {
          id: 3,
          namaBarang: 'wortel',
          harga: 20000,
        },
        {
          id: 4,
          namaBarang: 'alpukat',
          harga: 20000,
        },
        {
          id: 5,
          namaBarang: 'nanas',
          harga: 20000,
        },
      ],
    };
  }

  backAction = () => {
    Alert.alert('Perhatian!', 'Apakah anda yakin ingin menutup aplikasi?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Ijinkan Akses',
          message: 'Ijinkan Aplikasi Mengakses Kamera?',
          buttonNeutral: 'Nanti',
          buttonPositive: 'Oke',
          buttonNegative: 'Batal',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission diberikan');
      } else {
        console.log('Permission tidak diberikan');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="default" backgroundColor="#2196f3" />
        <View style={styles.header}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            {this.state.header}
          </Text>
        </View>

        <ActivityIndicator size="small" color="#f5f" />

        <TouchableOpacity
          style={styles.imgContainer}
          onPress={() => this.requestCameraPermission}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1565574337622-c456ba77d4b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80',
            }}
            style={{
              width: width,
              height: 300,
              borderWidth: 2,
              borderColor: 'pink',
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({value: !this.state.value})}
          />
        </View>

        <TextInput
          value={this.state.username}
          style={{borderBottomWidth: 1, margin: 8}}
          onChangeText={(value) => this.setState({username: value})}
        />

        <Button
          title="Press Me"
          color="blue"
          onPress={() => console.log('button')}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTxt}>Click</Text>
        </TouchableOpacity> */}

        <FlatList
          style={{flex: 1}}
          data={this.state.dataPembayaran}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() =>
                ToastAndroid.show(
                  `Anda mengklik ${item.namaBarang}`,
                  ToastAndroid.SHORT,
                )
              }>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                }}>
                {item.namaBarang}
              </Text>
              <Text>{item.harga}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 16,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    backgroundColor: '#2196f3',
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  list: {
    backgroundColor: '#fd1',
    padding: 16,
    marginBottom: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
});

export default App;
