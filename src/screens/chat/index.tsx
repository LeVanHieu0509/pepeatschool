import { Button } from "nextra/components";
import { useContext, useRef } from "react";
import AppContext from "src/contexts/app";
import { ChatScreenWrapper2 } from "./styled1";
import ChatTailwind from "src/sections/chat-comunity/chat-tailwind";

function truncateTextAfterIndex35(text: string) {
  return text.length > 35 ? text.slice(0, 35) + "..." : text;
}

const data: any = [
  {
    id: "1",
    connections: 1,
    roomName: "Cộng đồng pepe",
    users: [
      {
        username: "Lê văn Hiếu",
        joinedAt: "",
        leftAt: "aaaa",
        present: true,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },
      {
        username: "Lê văn Hiếu",
        joinedAt: "",
        leftAt: "aaaa",
        present: true,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },
    ],
  },
  {
    id: "2",
    connections: 2,
    roomName: "Trao đổi kiến thức",
    users: [
      {
        username: "Lê văn Hiếu",
        joinedAt: "",
        leftAt: "aaaa",
        present: true,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },
    ],
  },
];

interface CourseScreenProps {}
const ChatScreen = ({}: CourseScreenProps) => {
  const { account } = useContext(AppContext);
  const ref = useRef<any>();

  const messages: any = [
    {
      id: "1",
      from: {
        id: "1",
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },

      text: "Hiếu đẹp trai",
      at: Date.now(),
    },
    {
      id: "2",
      from: {
        id: "2",
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },

      text: "Quá đẹp luôn",
      at: Date.now(),
    },
    {
      id: "1",
      from: {
        id: "1",
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },

      text: "Hiếu đẹp trai",
      at: Date.now(),
    },
  ];

  const user = {
    username: "1",
  };

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <ChatScreenWrapper2>
      <ChatTailwind />
      {/* <div className="Chat-main">
        <div className="Section">
          <div className="Conversation-list-section">
            <div className="Conversation-list-section-title">
              <div className="Conversation-title">PEPE Chat</div>
              <div className="Conversation-add-button">
                <div className="Conversation-plush">+</div>
              </div>
            </div>
            <div className="Conversation-search-bar">
              <input
                className="search-bar"
                type="text"
                placeholder="Tìm kiếm cuộc trò chuyện"></input>
            </div>
            <div className="Conversation-sort-bar">
              <img src="./img-logo/recent.png" className="img-size"></img>
              <img src="./img-logo/people.png" className="img-size"></img>
              <img src="./img-logo/phonebook.png" className="img-size"></img>
              <img src="./img-logo/ban-user.png" className="img-size"></img>
            </div>
            <div className="Conversation-list">
              {data.map((item) => (
                <div className="Conversation-item">
                  <img
                    src="./img-profile/th.jpg"
                    className="Conversation-item-img"></img>
                  <div className="Coversation-item-description">
                    <div className="Conversation-item-owner-name bold">
                      {item.roomName}
                    </div>
                    <div className="Conversation-item-owner-small-text">
                      {truncateTextAfterIndex35(
                        "Chào bạn, bạn có muốn tham gia chương trình"
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="Chat-section">
            <div className="Chat-intro bold">
              <div className="">Chat cộng đồng</div>
            </div>
            <div className="Chat-screen">
              <div className="h-full w-full flex flex-col gap-6">
                {messages.length > 0 ? (
                  <ul className="flex flex-col gap-3 p-4">
                    {messages.map((message) => (
                      <RoomMessage
                        key={message.id}
                        message={message}
                        isMe={message.from.id === user?.username}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className="italic">No messages yet</p>
                )}
              </div>
              <div className="Chat-type-box">
                <input
                  style={{ background: "white", outline: "white" }}
                  placeholder="Viết tin nhắn ở đây..."
                  type="text"
                  className="chat-box"></input>
                <Button className="send-text bold">Gửi</Button>
              </div>
            </div>
          </div>
          <div className="Info-section">
            <img src="./img-profile/th.jpg" className="Info-avatar"></img>
            <div className="Info-name bold">Lê Bách Đạt 123</div>
            <div className="Address">
              {" "}
              <strong>Địa chỉ ví:</strong> {account?.slice(0, 10)}...
              {account?.slice(36, account.length)}
            </div>
          </div>
        </div>
      </div> */}
    </ChatScreenWrapper2>
  );
};

export default ChatScreen;
