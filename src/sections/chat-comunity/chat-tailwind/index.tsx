import React, {useContext, useEffect, useMemo, useRef, useState } from "react";
import { ChatTailwindWrapper, ContentWrapper, ItemBlock } from "./styled";
import RoomMessage from "./RoomMessage";
import AppContext from "src/contexts/app";
import { tree } from "next/dist/build/templates/app-page";


interface ChatTailwindProps {}
function YourComponent() {
  const [showImage, setShowImage] = useState(false); // State để theo dõi trạng thái hiển thị của hình ảnh
  const handleGroupChat=(item)=>{
    setShowImage(true)
  }
}
const dataRoom: any = [
  {
    id: "1",
    connections: 1,
    roomName: "Cộng đồng Pepe",
    users: [
      {
        id: "1",
        username: "Lê văn Hiếu",
        joinedAt: "",
        leftAt: "aaaa",
        present: true,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },
      {
        id: "2",
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
        id: "1",
        username: "Lê văn Hiếu",
        joinedAt: "",
        leftAt: "aaaa",
        present: true,
        image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
      },
    ],
  },
];

const messages: any = [
  {
    idRoom: "1",
    from: {
      id: "1",
      username: "Lê văn Hiếu",
      image:
        "https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png",
    },

    text: "Hi",
    at: 1717221500404,
  },
  {
    idRoom: "1",
    from: {
      id: "2",
      username: "Nguyễn Văn Anh",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
    },

    text: "Hello",
    at: 1717222300404,
  },
  {
    idRoom: "1",
    from: {
      id: "2",
      username: "Lê Anh Đức",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    },

    text: "Welcome",
    at: 1717223300404,
  },

  {
    idRoom: "1",
    from: {
      id: "3",
      username: "Nguyễn Đình Anh",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
    },

    text: "Cho tôi làm quen với nhé",
    at: 1717224500404,
  },
  {
    idRoom: "1",
    from: {
      id: "1",
      username: "",
      image:
        "https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png",
    },

    text: "Chào các bạn",
    at: 1717224600404,
  },
  // DATA CỦA ROOM 2
  {
    idRoom: "2",
    from: {
      id: "1",
      username: "Đặng Quốc Tuấn",
      image:
        "https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png",
    },

    text: "Hello",
    at: 1717221300404,
  },
  {
    idRoom: "2",
    from: {
      id: "2",
      username: "Cao Thế Nhân",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
    },

    text: "Xin chào mọi người",
    at: 1717222300404,
  },
  {
    idRoom: "2",
    from: {
      id: "2",
      username: "Doãn Chí Bình",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
    },

    text: "Xin chào",
    at: 1717222400404,
  },
  {
    idRoom: "2",
    from: {
      id: "2",
      username: "Dương Quá",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    },

    text: "Xin chào cộng đồng Pepe",
    at: 1717222400404,
  },
];

const ChatTailwind = ({}: ChatTailwindProps) => {
  const { account } = useContext(AppContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeRoomChat, setActiveRoomChat] = useState<any>(dataRoom[0]);
  const [messageData, setMessageData] = useState<any>(() => messages);

  const [text, setText] = useState("");

  const user = {
    id: "1",
    username: "1",
  };

  const handleGroupChat = (dataGroup) => {
    setActiveRoomChat(dataGroup);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
    if (text.length > 0) {
      const inputData = {
        idRoom: activeRoomChat?.id,
        from: {
          id: "1",
          username: "Lê văn Hiếu",
          image:
            "https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png",
        },

        text: text,
        at: Date.now(),
      };

      setMessageData((pre) => [...pre, inputData]);
      setText("");
      scrollToBottom();
    }
  };

  function scrollToBottom() {
    const scrollHeight: any = scrollRef.current?.scrollHeight;
    const height: any = scrollRef.current?.clientHeight;
    const maxScrollTop: any = scrollHeight - height;

    scrollRef.current?.scrollTo({
      top: maxScrollTop,
      left: 0,
      behavior: "smooth",
    });
  }

  const dataChatInRoom = useMemo(
    () => messageData.filter((item) => activeRoomChat?.id == item.idRoom),
    [messageData, activeRoomChat]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  });

  const handleKeypress = (e: any) => {
    // It's triggers by pressing the enter key
    if (e.keyCode == 13 && !e.shiftKey) {
      handleSubmit();
      e.preventDefault();
    }
  };

  return (
    <ChatTailwindWrapper>
      <div className=" h-screen antialiased text-gray-800">
      <div className="flex flex-row items-center justify-center h-12">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div className="ml-2 font-bold text-2xl">Pepe Chat</div>
            </div>
        <ContentWrapper className="flex flex-row h-full w-full">
          <div className="flex flex-col pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div className="chat-info flex flex-col green-bg items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png"
                  alt="Avatar"
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm text-white font-semibold mt-2"></div>
              <div className="text-xs text-white text-16">
                Address:{" "}
                <b>
                  {account?.slice(0, 10)}...
                  {account?.slice(36, account.length)}
                </b>
              </div>
            </div>
            <div className="group-chat flex flex-col mt-8">
              <div className="flex flex-row font-hover items-center justify-left text-xs center">
                <span className="font-bold font-hover text-16">Nhóm đã tham gia:</span>
                <span className="flex items-center font-hover  text-16  font-bold justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {dataRoom.length}
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {dataRoom.map((item, key) => (
                  <button
                    key={key}
                    onClick={() => handleGroupChat(item)}
                    className="trans flex flex-row items-center hover:bg-gray-100 rounded p-2 "
                    style={{
                    background: activeRoomChat?.id == item.id ? "green" : "#111"
                    }}>
                    
                    <div
                      className="ml-2 text-sm font-semibold "
                      style={{
                        color: activeRoomChat?.id == item.id ? "white" : "white",
                      }}>
                      {item.roomName}
                    </div>
                    
                  </button>
                  
                ))}
              </div>
            </div>
          </div>
          <ItemBlock
            className=" flex flex-col flex-auto h-full"
            style={{ height: "90%" }}>
            <div
              className="chat-section flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100"
              style={{
                
                height: "600px",
                overflow: "auto",
              }}>
                <div className="top green-bg">
                  <div className=""></div>
                </div>
              <div
                className="chat-section flex flex-col h-full overflow-x-auto mb-4"
                ref={scrollRef}>
                <div className="flex flex-col ">
                  <div className="grid grid-rows-12 gap-y-2">
                    <div className="h-full w-full flex flex-col gap-6">
                      {messages.length > 0 ? (
                        <ul
                          className="flex flex-col gap-3 p-4 pb-70"
                          style={{ paddingTop: "10px" }}>
                          {dataChatInRoom.map((message, key) => (
                            <RoomMessage
                              key={key}
                              message={message}
                              isMe={message.from.id === user?.username}
                            />
                          ))}
                        </ul>
                      ) : (
                        <p className="italic">No messages yet</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-chat green-bg flex flex-row items-center  h-16 bg-white w-full px-4">
                <div className="flex-grow">
                  <div className="relative w-full">
                    <input
                      placeholder="Nhập ở đây..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 bg-white p-2"
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={handleSubmit}
                    className="flex items-center justify-center bg-green-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span className="send font-bold">Send</span>
                    <span className="ml-3">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </ItemBlock>
        </ContentWrapper>
      </div>
    </ChatTailwindWrapper>
  );
};

export default ChatTailwind;
