import React from 'react';
import styled from 'styled-components';


export const CardShell = styled.div`
  width:80vw;
  height:100%;
  background:rgba(55,55,55,1);
  box-shadow:2px 1px 7px 1px black,inset 2px 1px 7px 1px black,inset -2px -1px 7px -1px black;
  color:deeppink;
  font-size: 3vh;
  display:flex;
  margin: auto;
  justify-content:center;
  flex-direction:column;
  padding:20px;
`;

export const Title = styled.h1`
  font-family: 'Black Ops One', cursive;
    text-align:center;
    font-size:38px;
    color:blue;
    text-shadow:2px .5px 5px rgba(195,195,255,1), -2px -.5px 5px rgba(195,195,255,1);
`;

export const Info = styled.div`
   background: cornflowerblue;
   text-align:center;
   margin: auto;
   border-radius:7px;
   justify-content:space-around;
   width: 60vw;
   
   `;