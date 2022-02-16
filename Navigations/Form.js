// Print HTML as a Document from React Native Form for Android and iOS
// https://aboutreact.com/react-native-print-html/

// Import React
import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [title, setTitle] = useState('');
  const [moto, setMoto] = useState('');
  const [filePath, setFilePath] = useState('https://www.signsofttech.com/wp-content/uploads/2022/02/dhani.jpeg');
  const [companyName, setCompanyName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmai] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [ref, setRef] = useState();
  const [approval, setApproval] = useState();
  const [date, setDate] = useState();
  const [process, setProcess] = useState();
  const [charge, setCharge] = useState();
  const [emi, setEmi] = useState();
  const [period, setPeriod] = useState();
  const [loan, setLoan] = useState();
  const [transferaccount, setLoantransfer] = useState();
  const [ifsc, setIfsc] = useState();
  const [loanamount, setLoanamount] = useState();
  const [bankname, setBankname] = useState();
  const [mr, setMr] = useState();
const [accountno,setAccountno] = useState();
  const [success, setSuccess] = useState(false);
  const[upi,setUpi]=useState();
  const[interestrate,setInterestrate]=useState();
  const { item, fresh } = route.params;
  const [data, setData] = useState(item);
  // const [image,setImage]= useState(require(filePath));
  useEffect(() => {

   if(!fresh){ console.log('hi')
    getData();}

  }, [loading])


  // console.log(data, 'old values from older screen')

  // console.log(item.moto,'tramsfered data')
  const getData = async () => {
    
    console.log(fresh, 'passed fresh value')
    try {
      if (!fresh) {

        // value previously stored
        // console.log(item,'old values')

        // setTitle(data.title);
        // setMoto(data.moto);
        // setCompanyName(data.company);
        // setSubject(data.subject);
        // setBody(data.body);
        // setLocation(data.location);
        // setContact(data.contact);
        // setEmai(data.email);
        // setFirst(data.first);
        // setSecond(data.second);
        // setThird(data.third);
        // setFilePath(data.path)
        setRef(data.ref);
        setMr(data.mr);
        setApproval(data.approval);
        setDate(data.date);
        setSubject(data.subject);
        setProcess(data.process);
        setLoan(data.loan);
        setPeriod(data.period);
        setEmai(data.emi);
        setLoantransfer(data.transferaccount);
        setIfsc(data.ifsc);
        setCharge(data.charge);
        setAccountno(data.accountno);
        setBankname(data.bankname);

      }
    } catch (e) {
      // error reading value
    }

  }
const setValue=()=>{
  setDhani([{ref:ref,approval:approval,mr:mr,date:date,subject:subject,process:process,loan:loan,period:period,emi:emi,transferaccount:transferaccount,ifsc:ifsc,charge:charge,accountno:accountno,bankname:bankname,upi:upi,interestrate:interestrate}])
return (null)
}



const savedoc= async() =>{
  // setDhani([{ref:ref,approval:approval,mr:mr,date:date,subject:subject,process:process,loan:loan,period:period,emi:emi,transferaccount:transferaccount,ifsc:ifsc,charge:charge,accountno:accountno,bankname:bankname,upi:upi,interestrate:interestrate}])

  // let dhani = [{ref:ref,approval:approval,mr:mr,date:date,subject:subject,process:process,loan:loan,period:period,emi:emi,transferaccount:transferaccount,ifsc:ifsc,charge:charge,accountno:accountno,bankname:bankname,upi:upi,interestrate:interestrate}]
  // // let formdata = [{ title: title, moto: moto, company: companyName, subject: subject, body: body, location: location, contact: contact, email: email, first: first, second: second, third: third, path: filePath }]

  // //  let value = await JSON.stringify(formdata)
  // //  setData(formdata);
  // console.log(data, 'previous value')
  // if (fresh) {

  //   const concated = data==null ? dhani : [...data, ...dhani]
  //   setData(concated)


  //   console.log(JSON.stringify(data), 'concated')

  //   await AsyncStorage.setItem('title', JSON.stringify(data), (err) => {
  //     if (err) {
  //       console.log("an error");
  //       throw err;
  //     }
     
  //   }).catch((err) => {
  //     console.log("error is: " + err);
  //   });
  //   console.log("success");
  //   if(dhani!=data){
  //     setSuccess(true)
  //   }
  // }
  return(success);

}

const shareAndSave= async() =>{
  
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      })
      console.log(JSON.stringify(pickerResult.fileCopyUri),'string value');
      setResult(JSON.stringify(pickerResult.fileCopyUri))
      console.log(JSON.stringify(result))
      Share.open({
        title: "This is my report ",
        message: "Message:",
        url: result,
        subject: "Report",
    })
    } catch (e) {
      handleError(e)
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


  const chooseFile = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    launchImageLibrary(options, async (response) => {

      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      const read = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      console.log(granted, 'check permission')
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
      await RNPrint.selectPrinter({ x: 100, y: 100 });
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
    let dhani = [{ref:ref,approval:approval,mr:mr,date:date,subject:subject,process:process,loan:loan,period:period,emi:emi,transferaccount:transferaccount,ifsc:ifsc,charge:charge,accountno:accountno,bankname:bankname,upi:upi,interestrate:interestrate}]
    // let formdata = [{ title: title, moto: moto, company: companyName, subject: subject, body: body, location: location, contact: contact, email: email, first: first, second: second, third: third, path: filePath }]
  
    //  let value = await JSON.stringify(formdata)
    //  setData(formdata);
    console.log(data, 'previous value')
    if (fresh) {
  
      const concated = data==null ? dhani : [...data, ...dhani]
      setData(concated)
  
  
      console.log(JSON.stringify(data), 'concated')
  
      await AsyncStorage.setItem('title', JSON.stringify(data), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
       
      }).catch((err) => {
        console.log("error is: " + err);
      });
      console.log("success");
      if(dhani!=data){
        setSuccess(true)
      }
    }

    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    const read = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
    // console.log(granted,'check permission')
    if (success || !fresh) {
      let address = RNPrint.print({
        //     html:`
        //     <head>
        //     <title>Pdf Content</title>
        //     <style>
        //     * {
        //     box-sizing: border-box;
        //   }

        //   html {
        //     font-family: sans-serif;
        //   }

        //   body {
        //     margin: 0;
        //     justify-content:flex-start;
        //     background: white;
        //   }
        //   .company{
        //     width: 50%;
        //     position: absolute;
        //     top: 23mm;
        //     left: 46mm;
        //     display: flex;
        //     flex-direction: column;
        //     align-items: baseline;
        // }


        //   .subject h4{
        //     display: flex;
        //     align-items: center;
        //     top:60mm;
        //     position:absolute;
        //     width:100%;
        //     margin:20mm;

        //     text-decoration: underline;

        //   }
        //   .content {
        //       position:absolute;
        //     top: 70mm;
        //     background: white;
        //     width:180mm;
        //     margin:20mm;
        //     align-text:center;
        //   }
        //   article {
        //     width: 100%;
        //     height: 100%;

        //     position: absolute;
        //   }

        //   address {
        //     position: absolute;

        //     flex-direction: row;
        //     bottom: 20mm;
        //     right:20mm;
        //   }

        //   .logo img {
        //     position: absolute;
        //     top: 16mm;
        //     left: 10mm;
        //     width: 128px;
        //     height: 128px;
        //     font-size: 20px;
        //     letter-spacing: 1px;
        //     text-align: center;
        //     padding: 0px 0;
        //     color: black;
        //     text-shadow: black;
        //   }

        //   h3 {
        //     position: absolute;
        //     top: 50mm;
        //     left: 20mm;
        //     width: 100%;

        //     font-size: 20px;
        //     letter-spacing: 1px;
        //     text-align: center;

        //     color: black;

        //   }
        //   .company h1 {
        //     letter-spacing: 0px;
        //     text-align: center;
        //   margin:0;
        //   padding:0;
        //     color: black;

        //   }
        //   .company h2 {
        //     letter-spacing: 0px;
        //     text-align: center;
        //   margin:0;
        //   padding:0;
        //     color: grey;

        //   }
        //   p{
        //     font-style: normal;
        //     margin:0;
        //   }

        //   /* Your CSS below here */
        //   article{
        //     background:url(https://i.pinimg.com/564x/56/e3/63/56e363f8db0457bcb61ccebd388b3f84.jpg) no-repeat local;

        //     background:url(https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/top-image.png) no-repeat local, url(https://raw.githubusercontent.com/mdn/learning-area/master/css/styling-boxes/letterheaded-paper-start/bottom-image.png) no-repeat 0 100% local, linear-gradient(to bottom, rgba(255, 230, 230, .9), #fff 0%, #fff 100%, rgba(255, 230, 230, .1 ));

        //     border-top:0px solid #b30000;
        //     border-bottom:0px solid #b30000;
        //   }

        //   .logo h1{
        //     background:url(${header});


        //   }
        //     </style>
        //     <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

        //     </head>
        //   <body>

        //     <article>
        //         <div class="logo">
        //         <img src="${filePath}" alt="Lamp" >

        //         </div>



        //       <div class="company">
        //           <h1>${title}</h1>
        //           <h2>${moto}</h2>
        //       </div>
        //      <div class="subject">
        //     <h4> ${subject}</h4>
        //      </div>
        //   <div class="content">
        //   <p>
        //   <p>${first}</p><br>
        //   <p>${second}</p><br>
        //   <p>${third}</p>
        //   </p>
        //   </div>
        //       <address>
        //       <div>
        //         <p>${companyName}</p></div>
        //         <div> <p>${location}</div>
        //         <div> <p>${contact}</div>
        //         <div> <p>${email}</div>
        //       </address>
        //     </article>
        //   </body>`,




        html: ` <head>
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
text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
 
}  
.company p{
  line-height: 0px;
  font-size:12px;
}
.logo p{
  letter-spacing: 0px;
    margin:0;
    padding:0;
    
}  
.subject h5{
  display: flex;
color:#2baeff;
text-align
  width:100%;
  text-decoration: underline;
}
.content {
  background: white;
  width:180mm;
  margin:20mm;
  align-text:center;
        overflow: hidden;
word-break: break-word !important;
word-wrap: break-word !important;
overflow-wrap: break-word !important;   
}
article {
  width: 100%;
  height: 100%;
 
  position: absolute;
}
address {
  
  bottom: 20mm;
  right:20mm;
}
.ref {
  display: flex;
flex-direction: row;
justify-content: space-between;
    }      
.lettername{
    min-width:100%;
    align-self:center;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#ed2415;
    }
.date{
   text-align:end
    } 
.logo img {
  top: 2mm;
  left: 10mm;
  width: 150px;
  height: 75px;
  font-size: 20px;
  letter-spacing: 0px;
  text-align: center;
  padding: 0px 0;
  color: black;
  text-shadow: black;
}
.sign{
  color:#c6db02;
}
.line{
// border-color:#2baeff;
// border:dashed;
border-radius:10px;
height:2px;
background:#2baeff;
margin-top:10px;
elevation:15;



}
.header{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:0px;
  margin:0;
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
.footercall{
  padding: 5px;
  color:#ed2415;
  border: groove;
  border-color:#2baeff;
 
  text-align:center;
 
} 
.address u{
    color:#2baeff;
    }

.thanks{
  text-align:center;
}
p{
  font-style: normal;
  margin:0;
}
.note p {
  color:#ed2415;}

/* Your CSS below here */
article{
  // background:url(https://i.pinimg.com/564x/56/e3/63/56e363f8db0457bcb61ccebd388b3f84.jpg) no-repeat local;
  
  // background:url() no-repeat local, url() no-repeat 0 100% local, linear-gradient(to bottom, rgba(43, 174, 255, 1), #fff 0%, #fff 100%, rgba(255, 230, 230, .1 ));

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
<div class="header">
<div class="logo">
<img src="${filePath}" alt="Lamp" >
</div>
<div class="company"><b>
DHANA FINANCE PVT LTD</b><br/>
<p>Email:Raykundan57@gmail.com${moto}</p><br/>
<p>Website:www.dhanifinancial.com</p>
</div>
<div class="logo">
<img src="${filePath}" alt="Lamp" >
</div>
</div>
  <article>
     

<div class="line"></div>

   
<div class="ref">
 <b>
    Ref:${ref}
  </b>
  <b>
    Aprroval Loan No.:${approval}
  </b>
    </div>
    <div class="lettername">
     <U>
        LOAN  APPROVAL LETTER
        </U>
    </div>
     <div class="date">
      <h5>
        DATE:${date}
      </h5>
    </div>
        <div>
      <h5>
        To:
        <br/>Mr./Ms./Mrs. ${mr}
      </h5>
    </div>
   <div class="subject">
     <u>
  <h5> ${subject}</h5>
   </u>
   </div>
    <div>
     <u>
  <h5>Greetings From Dhani Finance Pvt. Ltd.</h5>
   </u>
   </div>
     <div>

  <h5>Sir/Madam,</h5>

   </div>
     <div>
At the outset we welcome you to the world of DHANI FINANCE PVT LTD. It is my privilage to inform you that an amount of RS. ${loan}/- only your loan interest rate at ${interestrate} yearly to on reducing basis. This is to inform you that your file has come under process positively of which. By mutual fund 10% of Your Loan Amount & You Can Get 10% Cash Back T&C Apply, this offer valid for 24 hours only.
       <br/>
       Process No.:${process}, further you are intimated to get your file registered in DHAN FINANCE PVT LTD so that we can take it into legal consideration and a legal charge of Rs.${charge}/- only pay will be charged.
   </div>
<br/>
    <address>
          <div class="address">
      <p><u>
Loan Details.
          </u> </p>
  
   Loan Amoun(in Rs):  ${loan}<br/>
    Loan Period:  ${period}<br/>
     Emi(in Rs):${emi}<br/>
      Loan Transfer a/c:${transferaccount}<br/>
        Ifsc code::${ifsc}        <div><br/>
        <p color="blue">Your need to pay legal charge Rs.${charge}/-. Through NEFT/RTCS/Online Banking/UPI in following bank account:</p>
        <br/>
      <p>
        <u>
Bank Account Details:.
          </u>
</p>
                   <p><b>
                     DHANI FINANCE PVT LTD.</b>
                   </p>
      Upi No.:-${upi}<br/>
      Account No:-${accountno}<br/>
      Ifsc code:-${ifsc}<br/>
      Bank Name:-${bankname}</div>
      <div>
      </div>
      
    </address>
    <div class="note">
      <p>
          <u>
         NOTE- Cash deposited not accepted by company (online transaction needed for your bank account/transaction verification)</u></p>
     </div>
     <div class="thanks">
      <p>
         NOTE- Cash deposited not accepted by company (online transaction needed for your bank account/transaction verification)</p>
     </div>
     <br/>
     <br/>
     <div class="sign">
     <h4>
Accounting Manager 
     </h4>
     <div class="footercall">
     <p>
              Head Office:- Plot No-305 Near Tau Devilal Park Prem Nagar, Chandigarh-160014
     </p>
   </div>
   </div>
  </article>
</body>`
      });
      console.log(address, 'path')
    }
  }

  const printPDF = async () => {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Demo Text to converted to PDF</h1>',
      fileName: 'test',
      base64: true,
    });
    await RNPrint.print({ filePath: results.filePath });
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#bdd5ff', padding: 20 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
          <Image
            source={{ uri: filePath }}
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
            label="To"
            value={mr}
            onChangeText={text => setMr(text)}
          />
          <TextInput
            mode="outlined"
            label="Ref " s
            value={ref}
            onChangeText={text => setRef(text)}
          />
          <TextInput
            mode="outlined"
            label="Approval No."
            value={approval}
            onChangeText={text => setApproval(text)}
          />
          <TextInput
            mode="outlined"
            label="Date"
            value={date}
            onChangeText={text => setDate(text)}
          />
          <TextInput
            mode="outlined"
            label="Loan Amount"
            value={loan}
            multiline={true}
            numberOfLines={7}
            onChangeText={text => setLoan(text)}
          />
          <TextInput
            mode="outlined"
            label="Process No."
            value={process}
            multiline={true}
            numberOfLines={7}
            onChangeText={text => setProcess(text)}
          />
          <TextInput
            mode="outlined"
            label="Charge"
            value={charge}
            multiline={true}
            numberOfLines={7}
            onChangeText={text => setCharge(text)}
          />
          <TextInput
            mode="outlined"
            label="Interest Rate"
            value={interestrate}
            multiline={true}
            numberOfLines={7}
            onChangeText={text => setInterestrate(text)}
          />
          <TextInput
            mode="outlined"
            label="Loan Period"
            value={period}
            onChangeText={text => setPeriod(text)}
          />
          <TextInput
            mode="outlined"
            label="Emi Amount"
            value={emi}
            onChangeText={text => setEmi(text)}
          />
          <TextInput
            mode="outlined"
            label="Transfer Account"
            value={transferaccount}
            onChangeText={text => setLoantransfer(text)}
          />
          <TextInput
            mode="outlined"
            label="Ifsc"
            value={ifsc}
            onChangeText={text => setIfsc(text)}
          />
          <TextInput
            mode="outlined"
            label="Account No."
            value={accountno}
            onChangeText={text => setAccountno(text)}
          />
          <TextInput
            mode="outlined"
            label="UPI No."
            value={upi}
            onChangeText={text => setUpi(text)}
          />
          <TextInput
            mode="outlined"
            label="Bank Name"
            value={bankname}
            onChangeText={text => setBankname(text)}
          />
        </View>

      </ScrollView>




      {Platform.OS === 'ios' && customOptions()}
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableHighlight onPress={printHTML} disabled={success?false:false} style={{ width: '90%', minHeight: 60, borderRadius: 50, backgroundColor: success?'gray':'#478aff', alignItems: 'center', padding: 20 }}>
          <Text style={{ textAlignVertical: 'center', fontSize: 20, color: 'white', fontWeight: "500" }}>{!success && `Confirm`}{success && `Save and print`}</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={printHTML} style={{ width: '50%', minHeight: 60, borderRadius: 50, backgroundColor: '#478aff', alignItems: 'center', padding: 20 }}>
          <Text style={{ textAlignVertical: 'center', fontSize: 20, color: 'white', fontWeight: "500" }}>{!success && `Print`}{success && `save`}</Text>
        </TouchableHighlight> */}
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