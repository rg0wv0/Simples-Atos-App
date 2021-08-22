/* import { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
*/

/* export class Check extends Component () {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.getData();
  }

  storeData =  () => {
      this.setState(prevState => ({ checked: !prevState.checked }))
      if(this.state.checked === true){
        AsyncStorage.setItem("@storage_Key", JSON.stringify(this.state.checked));
      }
  }
  getData = () => {
    AsyncStorage.getItem("@storage_Key").then((value) => {
        if(value != null){
            this.setState({
                checked:true})
        }
    }
  }
} */