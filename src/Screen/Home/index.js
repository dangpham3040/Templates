import React, { useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box"
//Icons
import SeachICon from '../../Icons/Seach'
//styles
import { styles } from './styles';
import { common } from '../../Utils/common_styles';
//Components
import Confirm from '../../Components/Confirm'
import Loader from '../../Components/Loader'
import Input from '../../Components/Textinput'
import Header from '../../Components/Header_Home'
//Items
import Items_Category from '../../Components/Items_Category'
import j from '../../Static/Images/logoIphone.png'
export default function App(props) {
  const [choose, setchoose] = useState(false)
  const [isLoading, SetisLoaing] = useState(true)
  const [text, settext] = useState("")
  const banner = [
    "https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Banner%2Fimages.jpeg?alt=media&token=564c645f-be07-43d1-acd9-d546379e19db",
    "https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Banner%2Fbanner2.jpg?alt=media&token=b379dd57-ad46-4826-bd39-6205441c250f",
    "https://firebasestorage.googleapis.com/v0/b/clothes-store-21b7f.appspot.com/o/Banner%2Fbanner3.jpg?alt=media&token=966bbf24-abdc-4236-a657-52b53153b7b7",
  ]

  // const DATA = [
  //   { id: '1', img: require('../../Static/Images/logoXiaomi.png'), firm: 'samsung' },
  //   { id: '2', img: require('../../static/Images/logoXiaomi.png'), firm: 'xiaomi' },
  //   { id: '3', img: require('../../static/Images/logoIphone.png'), firm: 'apple' },
  //   { id: '4', img: require('../../static/Images/logoNokia.png'), firm: 'nokia' },
  //   { id: '5', img: require('../../static/Images/logoOppo.png'), firm: 'oppo' },
  // ];
  const renderItem_Category = ({ item }) => (
    <Items_Category item={item} />
  );
  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      SetisLoaing(false)
    }, 1500)
    return () => clearInterval(intervalId); //This is important
  }, [useState])
  return (
    <ScrollView style={common.full} >
      <Header />
      {isLoading ?
        <Loader />
        :
        <ScrollView style={common.container}>
          <Input text={"seach"} icon={<SeachICon />} send={(e) => settext(e)} />
          <View style={styles.component}>
            <SliderBox
              style={styles.bannerBackground}
              images={banner}
              sliderBoxHeight={500}
              dotColor="#2A2D3F"
              inactiveDotColor="#90A4AE"
              dotStyle={styles.dot}
              autoplay={true}
            />
          </View>
          {/* <FlatList
            horizontal
            data={DATA}
            renderItem={renderItem_Category}
            // keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          /> */}
     
          <Confirm
            ModalVisible={choose}
            cancel={e => setchoose(e)}
            ok={() => console.log("done")}
            name={"Test model"}
            describe={"Are you sure you want to !??"}
          />
        </ScrollView>
      }
    </ScrollView>
  );
};


