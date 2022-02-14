import React, {useState, useEffect} from 'react';
import {
  StyleSheet,

  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import { Card,PressableStyled,TextDesc,TextSmall,TitleText } from '../Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const LandingScreen = ({navigation,props}) => {
  const [loading,setLoading]= useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [title,setTitle]= useState('');
  const [moto,setMoto]= useState('');
  const [filePath, setFilePath] = useState('https://ml8qg8gly5yz.i.optimole.com/ob22pAI-ELoYPrSx/w:100/h:100/q:auto/rt:fill/g:ce/https://nepalsouq.com/wp-content/uploads/2021/05/cropped-Asset-1-e1621914238173.png');
  const [companyName,setCompanyName]= useState('');
  const [subject,setSubject]= useState('');
  const [body,setBody]= useState('');
  const [location,setLocation]= useState('');
  const [contact,setContact]= useState('');
  const [email,setEmai]= useState('');
  const [first,setFirst]= useState('');
  const [second,setSecond]= useState('');
  const [third,setThird]= useState('');
  const [data,setData]=useState([null]);
  useEffect(() => {
    getData();
     
    }, [])
    const getData = async()=>{
      try {
        const value = JSON.parse(await AsyncStorage.getItem('title'))
        console.log(value,'stored value')
        setData(value);
        if(value !== null) {
          // value previously stored
          console.log(value,'items inside');
          setTitle(value.title);
          setMoto(value.moto);
          setCompanyName(value.company);
          setSubject(value.subject);
          setBody(value.body);
          setLocation(value.location);
          setContact(value.contact);
          setEmai(value.email);
          setFirst(value.first);
          setSecond(value.second);
          setThird(value.third);
          setFilePath(value.path)
    
        }
      } catch(e) {
        // error reading value
      }
    
    }
    

  return (
      <View style={{flex:1}}>
        <ScrollView>
<Card>
  <TitleText>
    Organisations
  </TitleText>
  </Card>
  
  {data&&data.map((item,i)=>{return(
    <TouchableOpacity  key={i} style={{backgroundColor:'white',margin:15,borderRadius:15,padding:10,elevation:1}} onPress={()=>navigation.navigate('Form',{item:item,fresh:false} )}>

  <TextDesc>
   Name Of Company:{data[0]?item.title:'hello'}
  </TextDesc>
  <TextDesc>
  Email:{data[0]?item.email:'hello'}
  </TextDesc>
  <TextDesc>
  Phone:{data[0]?item.contact:'hello'}
  </TextDesc>


</TouchableOpacity>
)})}

</ScrollView>
<Card >
{data&&<PressableStyled onPress={()=>{console.log('hi');navigation.navigate('Form',{item:data,fresh:true})}}>
  <TextSmall>
    Add Organization
  </TextSmall>
</PressableStyled>}
{!data&&<PressableStyled onPress={()=>navigation.navigate('Form',{fresh:true})}>
  <TextSmall>
    Add Organization
  </TextSmall>
</PressableStyled>}
</Card>
</View>
    );
};

export default LandingScreen;

 const styles = StyleSheet.create({
  


 
});
