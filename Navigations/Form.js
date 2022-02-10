// Print HTML as a Document from React Native Form for Android and iOS
// https://aboutreact.com/react-native-print-html/

// Import React
import React, {useState,useEffect} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  PermissionsAndroid,

} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import HTML to PDF
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { TextInput } from 'react-native-paper';
// Import RNPrint
import RNPrint from 'react-native-print';
import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import header from '../header.png';
const Form = ({ route, navigation }) => {
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
 const [newdata,setNewdata]=useState([]);
 const [success,setSuccess]= useState(false);
// const [image,setImage]= useState(require(filePath));
const { item,fresh } = route.params;
useEffect(() => {
   
getData();

}, [loading])

const [dsata,setData]=useState([item]);
console.log(data,'old values from older screen')

// console.log(item.moto,'tramsfered data')
const getData =async()=>{
  try {
  if(!fresh){
   
      // value previously stored
// console.log(item,'old values')

      setTitle(item.title);
      setMoto(item.moto);
      setCompanyName(item.company);
      setSubject(item.subject);
      setBody(item.body);
      setLocation(item.location);
      setContact(item.contact);
      setEmai(item.email);
      setFirst(item.first);
      setSecond(item.second);
      setThird(item.third);
      setFilePath(item.path)

    }
  } catch(e) {
    // error reading value
  }

}


  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };


  const chooseFile = async(type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

   launchImageLibrary(options, async(response) => {
      
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    const read =  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    console.log(granted,'check permission')
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets[0].uri);
      
    });
  };


  // Only for iOS
  const selectPrinter = async () => {
    const selectedPrinter = 
      await RNPrint.selectPrinter({x: 100, y: 100});
    setSelectedPrinter(selectedPrinter);
  };

  // Only for iOS
  const silentPrint = async () => {
    if (!selectedPrinter) {
      alert('Must Select Printer First');
    }
    const jobName = await RNPrint.print({
      printerURL: selectedPrinter.url,
      html: '<h1>Silent Print clicked</h1>',
    });
  };

  const printHTML = async () => {
    let formdata=[{title:title, moto:moto,company:companyName,subject:subject,body:body,location:location, contact:contact,email:email, first:first,second:second,third:third,path:filePath}]
   let value = JSON.stringify(formdata)
   setNewdata(formdata);
   if(item===null){
    setData(newdata)
   }
   else{
    setData(...item,...newdata)
   }
   
   console.log(JSON.stringify(data),'concated')
   if(fresh){
    AsyncStorage.setItem('title',JSON.stringify(data), (err)=> {
      if(err){
        console.log("an error");
        throw err;
      }
      console.log("success");
      setSuccess(true);
    }).catch((err)=> {
        console.log("error is: " + err);
    });}


    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    const read =  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
console.log(granted,'check permission')
    if(success){await RNPrint.print({
      html:`
      <head>
      <title>Pdf Content</title>
      <style>
      * {
      box-sizing: border-box;
    }
    
    html {
      font-family: sans-serif;
    }
    
    body {
      margin: 0;
      justify-content:flex-start;
      background: white;
    }
    .company{
      width: 50%;
      position: absolute;
      top: 23mm;
      left: 46mm;
      display: flex;
      flex-direction: column;
      align-items: baseline;
  }
        
    
    .subject h4{
      display: flex;
      align-items: center;
      top:60mm;
      position:absolute;
      width:100%;
      margin:20mm;
    
      text-decoration: underline;
    
    }
    .content {
        position:absolute;
      top: 70mm;
      background: white;
      width:180mm;
      margin:20mm;
      align-text:center;
    }
    article {
      width: 100%;
      height: 100%;
     
      position: absolute;
    }
    
    address {
      position: absolute;
      
      flex-direction: row;
      bottom: 20mm;
      right:20mm;
    }
    
    .logo img {
      position: absolute;
      top: 16mm;
      left: 10mm;
      width: 128px;
      height: 128px;
      font-size: 20px;
      letter-spacing: 1px;
      text-align: center;
      padding: 0px 0;
      color: black;
      text-shadow: black;
    }
    
    h3 {
      position: absolute;
      top: 50mm;
      left: 20mm;
      width: 100%;
     
      font-size: 20px;
      letter-spacing: 1px;
      text-align: center;
    
      color: black;
    
    }
    .company h1 {
      letter-spacing: 0px;
      text-align: center;
    margin:0;
    padding:0;
      color: black;
     
    }
    .company h2 {
      letter-spacing: 0px;
      text-align: center;
    margin:0;
    padding:0;
      color: grey;
     
    }
    p{
      font-style: normal;
      margin:0;
    }
    
    /* Your CSS below here */
    article{
      background:url(https://i.pinimg.com/564x/56/e3/63/56e363f8db0457bcb61ccebd388b3f84.jpg) no-repeat local;
      
      background:url(https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png) no-repeat local, url(https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) no-repeat 0 100% local, linear-gradient(to bottom, rgba(255, 230, 230, .9), #fff 0%, #fff 100%, rgba(255, 230, 230, .1 ));
    
      border-top:0px solid #b30000;
      border-bottom:0px solid #b30000;
    }
    
    .logo h1{
      background:url(${header});
    
      
    }
      </style>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

      </head>
    <body>
    
      <article>
          <div class="logo">
          <img src="${filePath}" alt="Lamp" >
    
          </div>



        <div class="company">
            <h1>${title}</h1>
            <h2>${moto}</h2>
        </div>
       <div class="subject">
      <h4> ${subject}</h4>
       </div>
    <div class="content">
    <p>
    <p>${first}</p><br>
    <p>${second}</p><br>
    <p>${third}</p>
    </p>
    </div>
        <address>
        <div>
          <p>${companyName}</p></div>
          <div> <p>${location}</div>
          <div> <p>${contact}</div>
          <div> <p>${email}</div>
        </address>
      </article>
    </body>`,
    });
  }}

  const printPDF = async () => {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Demo Text to converted to PDF</h1>',
      fileName: 'test',
      base64: true,
    });
    await RNPrint.print({filePath: results.filePath});
  };

  const printRemotePDF = async () => {
    await RNPrint.print({
      filePath: 'http://www.africau.edu/images/default/sample.pdf',
    });
  };

  const customOptions = () => {
    return (

      <View>
        {selectedPrinter && (
          <View>
            <Text>
              {`Selected Printer Name: ${selectedPrinter.name}`}
            </Text>
            <Text>
              {`Selected Printer URI: ${selectedPrinter.url}`}
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={selectPrinter}>
          <Text>Click to Select Printer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={silentPrint}>
          <Text>Click for Silent Print</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const cacheToFetch = { cacheName: 'CacheOne', url: filePath }
  // console.log('cached data',cacheToFetch)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#bdd5ff',padding:20}}>
<ScrollView      contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
<View style={styles.container}>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
        <Image
          source={{uri: filePath}}
          style={styles.imageStyle}
        />
        {/* <Text style={styles.textStyle}>{filePath}</Text> */}
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Launch Camera for Image
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>
            Launch Camera for Video
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Logo</Text>
        </TouchableOpacity>
     
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity> */}
      </View>
<View>
<TextInput
mode="outlined"
label="Logo Link"
value={filePath}
onChangeText={text => setFilePath(text)}
/> 
<TextInput
mode="outlined"
label="Company Name"
value={title}
onChangeText={text => setTitle(text)}
/> 
<TextInput
mode="outlined"
label="Moto "s
value={moto}
onChangeText={text => setMoto(text)}
/> 
<TextInput
mode="outlined"
label="Subject"
value={subject}
onChangeText={text => setSubject(text)}
/> 
<TextInput
mode="outlined"
label="Body First Section"
value={first}
multiline={true}
numberOfLines={7}
onChangeText={text => setFirst(text)}
/> 
<TextInput
mode="outlined"
label="Body Second Section"
value={second}
multiline={true}
numberOfLines={7}
onChangeText={text => setSecond(text)}
/> 
<TextInput
mode="outlined"
label="Body Third Section"
value={third}
multiline={true}
numberOfLines={7}
onChangeText={text => setThird(text)}
/> 
<TextInput
mode="outlined"
label="Company Name"
value={companyName}
onChangeText={text => setCompanyName(text)}
/> 
<TextInput
mode="outlined"
label="Location"
value={location}
onChangeText={text => setLocation(text)}
/> 
<TextInput
mode="outlined"
label="Contact"
value={contact}
onChangeText={text => setContact(text)}
/> 
<TextInput
mode="outlined"
label="Email"
value={email}
onChangeText={text => setEmai(text)}
/> 
</View>

</ScrollView>




        {Platform.OS === 'ios' && customOptions()}
      <View>
        <TouchableHighlight  onPress={printHTML} style={{width:'100%',minHeight:60, borderRadius:50,backgroundColor:'#478aff',alignItems:'center',padding:20}}>
          <Text style={{textAlignVertical:'center',fontSize:20,color:'white',fontWeight:"500"}}>Create PDF</Text>
        </TouchableHighlight>
        </View>
    </SafeAreaView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginVertical: 10,
  },

  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },

  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});