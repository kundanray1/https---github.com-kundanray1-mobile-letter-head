import React from 'react';
import styled, {css} from 'styled-components';
// 
// const Container = styled.ImageBackground`
//   flex: 1;
//   align-items: center;
//   width: 100%;
// `;

const Card= styled.View`
align-items: center;
text-content:center;
justify-content:center;
margin:15px;
margin-top:5px;
elevation:1;
background-color:white;
padding:10px;
border-radius:15px;

`
const TopContainer= styled.View`
align-items: center;

flex:0.3;
elevation:0.3;



`
const BottomContainer= styled.View`
align-items: center;
text-content:center;
justify-content:flex-start;
flex:0.7;
elevation:1;
background-color:#f2f0f0;
padding:10px;
border-radius:15px;

`
const Screen = styled.SafeAreaView`
  flex: 1;
  align-items: center;
justify-content:space-between;
 
`;
const PressableStyled = styled.TouchableOpacity`
border-radius:15px;
  background-color:#ffa012;
 padding:15px;
 width:80%;
 flex-direction:row;
 justify-content:space-evenly;
 align-content:center;
 text-align:center;
 margin-vertical:5px;
 align-item:center;

  
`;

const TextBlackHeader = styled.Text`
padding-vertical: 5px;
padding-horizontal:10px;
  width: 100%;
  font-size:22px;
  font-weight:500;
  text-align:center;
  color: black;

`;
const TextBlackDesc = styled.Text`
padding-vertical: 5px;
padding-horizontal:10px;
  width: 100%;
  font-size:18px;
  font-weight:400;
  text-align:left;
  color: black;

`;
const TextSmall = styled.Text`
padding-vertical: 5px;
padding-horizontal:10px;
  width: 100%;
  font-size:22px;
  font-weight:500;
  text-align:center;
  color:white;

`;

const TextDesc = styled.Text`

padding-horizontal:10px;
  width: 100%;
  font-size:18px;
  font-weight:400;
  text-align:left;
  color:black;

`;

const MakePadding = styled.View`
  /* padding: 12% 7% 10% 7%; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92%;
  width: 100%;
  background:blue;

 
`;

const Container = styled.View`
   display: flex;
 border-radius:10px;
  min-width: 100%;
  background:#f2f0f0;
  elevation:0;
`;

const OverLay = styled.KeyboardAvoidingView`
  margin: auto;
  background: rgba(0, 0, 0, 0.45);
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  background: rgba(200, 200, 100, 0.45);
`;

const GroupWrapper = styled.View`
  width: 100%;
  display: flex;

  

`;

const Divider = styled.View`
  height: 0.5px;
  border-top-width:0.25px;
`;
const Row = styled.View`
  min-height: 15px;
  flex-direction:row;
  padding-horizontal:20px;


`;

const IconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  width: 80px;
  height:20px;
`;

const TitleText = styled.Text`
  color: black;;
  margin: 0px 0px 0px 5px;
  font-size:30px;
  font-weight:500;
color:black;
`;

const NepaliDateBox = styled.View`
  height: 55px;
  background: white;
justify-content:center;
  align-items: center; 
  width: 100%;
  padding: 0px 25px;
  border-radius: 8px;
 
`;

const NepaliDateText = styled.Text`
  color: #000;
  font-size: 15;
`;

const CenterItem = styled.View`
 
  align-items: center;
  top: 10%;
  height: 100%;
  width: 100%;
  flex-direction: column;
  position:absolute;
`;

const CancelButton = styled.TouchableOpacity`
  height: 60px;
  width: 110px;
  background:white;;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top-left-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export {
    Card,
TextSmall,
  CancelButton,
  Container,
  OverLay,
  MakePadding,
  GroupWrapper,
  Divider,
  IconWrapper,
  TitleText,
  PressableStyled,
  Screen,
  NepaliDateBox,
  NepaliDateText,
  CenterItem,
  TextDesc,
  TopContainer,
  BottomContainer,
  TextBlackDesc,
  TextBlackHeader,
  Row
};
