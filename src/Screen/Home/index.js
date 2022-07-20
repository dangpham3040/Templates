import React, { useState,useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from 'react-native';
//Icons
import HeartIcon from '../../Icons/Heart'
import HomeIcon from '../../Icons/Star'
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
//Components
import Confirm from '../../Components/Confirm'
import Loader from '../../Components/Loader'
export default function App(props) {
  const [choose, setchoose] = useState(false)
  const [isLoading, SetisLoaing] = useState(true)
  useEffect(() => {
    SetisLoaing(false) 
}, [])
  return (
    <>{isLoading ?
      <Loader/>
      : <SafeAreaView style={common.full} >
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text>login</Text>
          <HeartIcon />
          <HomeIcon size={45} fill={"red"} onPress={() => setchoose(!choose)} />
        </TouchableOpacity>
        <Confirm
          ModalVisible={choose}
          cancel={e => setchoose(e)}
          ok={() => console.log("done")}
          name={"Test model"}
          describe={"Are you sure you want to !??"}
        />
      </SafeAreaView>}
    </>

  );
};


