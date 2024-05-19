import styled from "styled-components";

export const CourseScreenWrapper = styled.div`
.bold{
    font-weight: bold;
}
.bg-text{
    font-size: 18px;
}
.sm-text{
    font-size: 14px;
}
.nft-row{
    display: flex;
    flex-direction: column;
    margin: 30px;


}
.text-white{
    color: white;
}
.purchase-part{
    display: flex;
    flex-direction: row;
}
 .NFT-course-market-section{

 }
 .nft-course-item{
    width: calc(100%/3);
    height: 320px;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat",sans-serif;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    
 }
 .nft-course-price{
  
    font-size: 0.6rem;
    padding: 0.6em 1.5rem;
    background-color: #000;
    border: 2px solid yellow;
    border-radius: 0.6rem;
    color: #fff;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
    box-shadow: -3px 3px 0px 0px yellow;
    margin-right: 10px;
    cursor: pointer;
    
 }
 .btn-unlock-NFT:hover,.nft-course-price:hover{
    transform: translate(5px, -5px);

 }

 .nft-course-name{
    margin-top: 10px;
    text-transform: capitalize;
    margin-bottom: 10px;
 }
 .course-item-1{
background: #AC7BCC;
background: linear-gradient(90deg, #AC7BCC, #E28EC7);
 }
 .nft-course-item-img{
    width: 85%;
    height: px;
    border-radius: 15px;
    margin-top: 15px;

 }

 .btn-unlock-NFT{
    font-size: 0.6rem;
    padding: 0.6em 1.5rem;
    background-color: #000;
    border: 2px solid yellow;
    border-radius: 0.6rem;
    color: #fff;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
    box-shadow: -3px 3px 0px 0px yellow;
    cursor: pointer;
   
 }
 .code-course-container{
    display: flex;
    border-radius: 0.8rem;
    width: 90%;
    flex-direction: row;
    gap: 5px;
    border: yellow 2px solid;
    margin-top: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
 }
 .code-title{
    border-right: yellow 2px solid;
    padding: 5px 8px;
    

 }
 .code{
    padding: 5px;
    width: 100%;
    text-align: center;
    
    
 }
 .outro{
    font-size: 14px;
    margin-top: 20px;
 }
 

`;
