import styled from "styled-components";
import { device } from "styles/media";

export const ChatTailwindWrapper = styled.div``;

export const ContentWrapper = styled.div`
.green-bg{
    background-color:#228B22 	;
  }
  .text-16{
    font-size: 16px;
  }
  .center{
    align-items: center;
    justify-content: center;
    
   
  }
  .rounded{
    border-radius: 5px;
  }
 

  .text-white{
    color: #fff;
  }
  .chat-info{
    margin-top: 24px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border: none;
  }
  .group-chat{
    cursor: pointer;
    margin-top:20px;
    border-radius: 10px;
    padding:10px 10px;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .font-hover:hover{
    color: #228B22;
    font-size: 18px;
    transition: all 0.3s ease-out;
  }
 
  @media ${device.mobile} {
    flex-direction: column;
  }
  
`;

export const ItemBlock = styled.div`
  padding: 24px;
  .chat-section{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
    margin-bottom: 0;

  }
  .top{
    height: 8%;

  }
  input{
    border-radius: 8px;
  }
  .box-chat{
    height: 12%;
    
  }
  .send:hover{
    font-size: 18px;
    transition: 0.3s ease-in-out;
  }

  @media ${device.mobile} {
    padding: 0;
  }
`;

export const ItemWrapper = styled.div`
  width: 50%;

  @media ${device.mobile} {
    width: 100%;
  }
`;
