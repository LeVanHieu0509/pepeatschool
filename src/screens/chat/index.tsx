
import { Button } from "nextra/components";
import { ChatScreenWrapper2 } from "./styled1";
import useClickAway from "hooks/use-click-away";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import AppContext from "src/contexts/app";
import { disconnectWallet } from "src/contracts";

function truncateTextAfterIndex35(text: string) {
  return text.length > 35 ? text.slice(0, 35) + '...' : text;
}

interface CourseScreenProps {}
const ChatScreen = ({}: CourseScreenProps) => {
  const {
    account
  }= useContext(AppContext);
  const ref = useRef<any>();
  
  return(
    <ChatScreenWrapper2>
      <div className="Chat-main">
        <div className="Section">
          <div className="Conversation-list-section">
            <div className="Conversation-list-section-title">
              <div className="Conversation-title">PEPE Chat</div>
              <div className="Conversation-add-button">
                <div className="Conversation-plush">+</div>
              </div>
            </div>
            <div className="Conversation-search-bar">
              <input className="search-bar" type="text" placeholder="Tìm kiếm cuộc trò chuyện"></input>
            </div>
            <div className="Conversation-sort-bar">
              <img src="./img-logo/recent.png" className="img-size"></img>
              <img src="./img-logo/people.png" className="img-size"></img>
              <img src="./img-logo/phonebook.png" className="img-size"></img>
              <img src="./img-logo/ban-user.png" className="img-size"></img>
            </div>
            <div className="Conversation-list">
              <div className="Conversation-item">
                <img src="./img-profile/th.jpg" className="Conversation-item-img"></img>
                <div className="Coversation-item-description">
                  <div className="Conversation-item-owner-name bold">Lê Bách Đạt</div>
                  <div className="Conversation-item-owner-small-text">{truncateTextAfterIndex35("Chào bạn, bạn có muốn tham gia chương trình")}</div>
                </div>
              </div>
              <div className="Conversation-item">
                <img src="./img-profile/th.jpg" className="Conversation-item-img"></img>
                <div className="Coversation-item-description">
                  <div className="Conversation-item-owner-name bold">Lê Bách Đạt</div>
                  <div className="Conversation-item-owner-small-text">{truncateTextAfterIndex35("Chào bạn, bạn có muốn tham gia chương trình")}</div>
                </div>
              </div>
              <div className="Conversation-item">
                <img src="./img-profile/th.jpg" className="Conversation-item-img"></img>
                <div className="Coversation-item-description">
                  <div className="Conversation-item-owner-name bold">Lê Bách Đạt</div>
                  <div className="Conversation-item-owner-small-text">{truncateTextAfterIndex35("Chào bạn, bạn có muốn tham gia chương trình")}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="Chat-section">
            <div className="Chat-intro bold">
              <div className="">Lê Bách Đạt</div>
            
            </div>
            <div className="Chat-screen">

            </div>
            <div className="Chat-type-box">
              <input placeholder="Viết tin nhắn ở đây..." type="text" className="chat-box"></input>
              <Button className="send-text bold">Gửi</Button>
            </div>

          </div>
          <div className="Info-section">
            <img src="./img-profile/th.jpg" className="Info-avatar"></img>
            <div className="Info-name bold">Lê Bách Đạt</div>
            <div className="Address">  <strong>Địa chỉ ví:</strong> {account?.slice(0, 10)}...
                  {account?.slice(36, account.length)}</div>
          </div>

        </div>
      </div>
    </ChatScreenWrapper2>
  )
}

export default ChatScreen;
