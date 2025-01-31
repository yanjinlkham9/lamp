import React, { SetStateAction } from "react";
import styled from "styled-components"

const MHeader =styled.header`
    background-color: beige;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
`
interface TextProps{
    txtColor: boolean;
}
const Div = styled.div<TextProps>`
width: 30%;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover{
    color: blue;
}
color: ${(props: TextProps)=>(props.txtColor?"red":"black")};
`

interface Props{
    mapo: boolean;
    gandong: boolean;
    dobong: boolean;
    setMapo:(isShow:boolean)=>void;
    setGangdong:React.Dispatch<SetStateAction<boolean>>;
    setDobong:React.Dispatch<SetStateAction<boolean>>;
}
export default function Header(props:Props){
    const {mapo, gandong, dobong, setMapo, setDobong, setGangdong}= props;
    const setState=(func:(isShow: boolean)=>void)=>{
        setDobong(false);
        setGangdong(false);
        setMapo(false);
        func(true)
    }
    return (
        <MHeader>
            <Div onClick={()=>setState(setGangdong)} txtColor={gandong}>강동구</Div>
            <Div onClick={()=>setState(setMapo)} txtColor= {mapo}>마포구</Div>
            <Div onClick={()=>setState(setDobong)} txtColor={dobong}>도봉구</Div>
        </MHeader>
    )
}