import styled from "styled-components";

export const HeaderCourseWrapper1 = styled.div`
 .red-bg {
    background-color: red;
    height: 280px;
    

}

.frame{
   overflow: hidden;
}
 .white-bg{
    background-color: black;
    width: 200px;
    height: 2px;

 }
 .NFT-name{
   font-weight: bold;
 }
 .NFT-img{
   width: 100%;
   height: 200px;
   object-fit: cover;
   transition: transform 0.3s ease-in-out;
 }
 .NFT-img:hover{
   transform: scale(1.1);
 }
 .NFT-item{
   position: relative;
    flex-grow: 1;
    flex-basis: 200;
    margin: 10px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 320px;
    font-family: "Montserrat",sans-serif;
 }
 .NFT-item:hover .NFT-unlock{
   display: block;
   bottom:0 ;
   transform: translate(20%,0) 3s ease;
 }
 .bold-500{
   font-weight: 500;

 }
 .NFT-info{
   padding: 10px;
   letter-spacing: 0.01px;
   
 }
 
 .NFT-unlock{
   text-align: center;
   color: white;
   background-color: #008000;
   position: absolute;
   bottom: -100%;
   height: 16%;
   width: 100%;
   left: 0;
   line-height: 52px;
   cursor: pointer;
   display: none;
   transition: bottom 0.3s ease-in-out ;;
 }
 .NFT-unlock:hover{
   opacity: 0.8;
 }
 .NFT-market-container{
    display: flex;
    flex-wrap: wrap;
    

 }
 
`;
