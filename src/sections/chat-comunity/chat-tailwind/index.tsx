import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ChatTailwindWrapper, ContentWrapper, ItemBlock } from "./styled";
import RoomMessage from "./RoomMessage";
import AppContext from "src/contexts/app";

interface ChatTailwindProps {}

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

const messages: any = [
  {
    idRoom: "1",
    from: {
      id: "1",
      username: "Lê văn Hiếu",
      image:
        "https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png",
    },

    text: "Hey How are you today? Hey How are you today? Hey How are you today?",
    at: Date.now(),
  },
  {
    idRoom: "1",
    from: {
      id: "2",
      username: "Lê văn Hiếu",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
    },

    text: "Quá đẹp luôn",
    at: Date.now(),
  },
  {
    idRoom: "1",
    from: {
      id: "2",
      username: "Lê văn Hiếu",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
    },

    text: "Hiếu đẹp trai",
    at: Date.now(),
  },

  {
    idRoom: "1",
    from: {
      id: "1",
      username: "Lê văn Hiếu",
      image:
        "https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png",
    },

    text: "Hiếu đẹp trai",
    at: Date.now(),
  },
  {
    idRoom: "2",
    from: {
      id: "1",
      username: "Lê văn Hiếu",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
    },

    text: "Hiếu đẹp trai",
    at: Date.now(),
  },
  {
    idRoom: "2",
    from: {
      id: "2",
      username: "Lê văn Hiếu",
      image: "https://s2.coinmarketcap.com/static/img/coins/64x64/29587.png",
    },

    text: "Hiếu đẹp trai",
    at: Date.now(),
  },
];

const ChatTailwind = ({}: ChatTailwindProps) => {
  const { account } = useContext(AppContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeRoomChat, setActiveRoomChat] = useState<any>();
  const [messageData, setMessageData] = useState<any>(() => messages);

  const [text, setText] = useState("");

  useEffect(() => {
    setActiveRoomChat(data[0]);
  }, []);

  const user = {
    id: "1",
    username: "1",
  };

  const handleGroupChat = (dataGroup) => {
    setActiveRoomChat(dataGroup);
  };

  const handleSubmit = () => {
    console.log("handle");
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

  const handleKeyEnter = (e) => {
    console.log("handleKeyEnter");
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <ChatTailwindWrapper>
      <div className="flex h-screen antialiased text-gray-800">
        <ContentWrapper className="flex flex-row h-full w-full">
          <div className="flex flex-col pl-6 pr-2 w-64 bg-white flex-shrink-0">
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
            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png"
                  alt="Avatar"
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm font-semibold mt-2">Hiếu.</div>
              <div className="text-xs text-gray-500">
                Address: {account?.slice(0, 10)}...
                {account?.slice(36, account.length)}
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-left text-xs">
                <span className="font-bold">Nhóm</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {data.length}
                </span>
              </div>
              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {data.map((item, key) => (
                  <button
                    key={key}
                    onClick={() => handleGroupChat(item)}
                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 ">
                    <div
                      className="ml-2 text-sm font-semibold "
                      style={{
                        color: activeRoomChat?.id == item.id ? "green" : "#111",
                      }}>
                      {item.roomName}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ItemBlock
            className="flex flex-col flex-auto h-full"
            style={{ height: "90%" }}>
            <div
              className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100"
              style={{
                border: "1px solid grey",
                height: "500px",
                overflow: "auto",
              }}>
              <div
                className="  flex flex-col h-full overflow-x-auto mb-4"
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
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow">
                  <div className="relative w-full">
                    <input
                      placeholder="Nhập ở đây..."
                      value={text}
                      onKeyDown={handleKeyEnter}
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
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                    <span>Send</span>
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
