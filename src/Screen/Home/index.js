import React,{useState} from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
//Icons
import HeartIcon from '../../Icons/Heart'
import HomeIcon from '../../Icons/Star'
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
//Components
import Confirm from '../../Components/Confirm'
export default function App(props) {
  const [choose, setchoose] = useState(false)
  return (
    <SafeAreaView style={common.full} >
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
        <Text>login</Text>
        <HeartIcon />
        <HomeIcon size={45} fill={"red"} onPress={()=>setchoose(!choose)}/>
      </TouchableOpacity>
      <Confirm
        ModalVisible={choose}
        cancel={e => setchoose(e)}
        ok={() => console.log("done")}
        name={"Test model"}
        describe={"Are you sure you want to !??"}
      />
    </SafeAreaView>
  );
};


