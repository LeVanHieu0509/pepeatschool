import styled from "styled-components";

export const ChatScreenWrapper2=styled.div`
max-height: 90rem;
height: 90px;
.Chat-main{
    margin-top: 10px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
.Section{
    display: flex;
    flex-direction: row;
    font-family: 'Montserrat',sans-serif;
    border-radius: 10px;
}
.bold{
    font-weight: bolder;
}
.Conversation-list-section{
    background-color: #21772f;
    width: 20%;
    padding: 10px;
    height: 600px;
    border-radius: 5px;
}

.Conversation-list-section-title{
    display: flex;
    flex-direction: row;
    position: relative;
    height: 7%;
}
.Conversation-title{
    font-weight: bold;
    color: white;
    font-size: 1.6rem;
}
.Conversation-add-button{
    display: flex;
    position: absolute;
    right: 0px;
    border-radius:50%;
    background-color: white;
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
}
.Conversation-plush{
    font-size: 2rem;
    font-weight: bolder;
}
.Conversation-search-bar{
    margin-top: 20px;
    width: 100%;
}
.search-bar{
    width: 100%;
    padding: 10px;
    opacity: 0.9;
    background-color: white ;
    border-radius: 5px;
}
.Conversation-sort-bar{
    margin-top: 15px;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.img-size{
    height: 30px;
    width: 30px;

}
.Conversation-list{
    padding: 10px;
    color: white;
    margin-top: 15px;
}
.Conversation-item{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 1.1rem;
}
.Conversation-item-img{
    border-radius:50%;
    height: 50px;
    width: 50px;
}

.Conversation-item-owner-small-text{
    font-size:11px;
}
.Chat-section{
    width: 60%;
    position: relative;
}
.Chat-intro{
    display: flex;
    align-items: center;
    padding: 10px;
    height: 8%;
    font-size: 1.8rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
    
}
.Chat-type-box{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    
}
.chat-box{
    width: 90%;
    padding-left: 10px;
    margin-left: 10px;
}
.send-text{
    border-radius: 10px;
    width: 9%;
    margin-right: 10px;
}
.search-bar:hover{
    background-color: #21772f;
    color: wheat;
}
.Info-section{
    background-color: #21772f;
    width: 20%;
    color: #FFF;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
}
.Info-avatar{
    border-radius: 50%;
    
}
.Info-name{
    font-size: 2rem;
}
`;
