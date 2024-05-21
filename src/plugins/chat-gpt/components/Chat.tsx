import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { BsChevronDown, BsPlusLg } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
// import useAnalytics from "../hooks/useAnalytics";
import useAutoResizeTextArea from "../hooks/useAutoResizeTextArea";
import Message from "./Message";
import { DEFAULT_OPENAI_MODEL } from "../shared/Constants";

const Chat = (props: any) => {
  const { toggleComponentVisibility } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showEmptyChat, setShowEmptyChat] = useState(true);
  const [conversation, setConversation] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  // const { trackEvent } = useAnalytics();
  const textAreaRef = useAutoResizeTextArea();
  const bottomOfChatRef = useRef<HTMLDivElement>(null);

  const selectedModel = DEFAULT_OPENAI_MODEL;

  // useEffect(() => {
  //   if (textAreaRef.current) {
  //     textAreaRef.current.style.height = "24px";
  //     textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  //   }
  // }, [message, textAreaRef]);

  // useEffect(() => {
  //   if (bottomOfChatRef.current) {
  //     bottomOfChatRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [conversation]);

  const sendMessage = async (e: any) => {
    e.preventDefault();

    // Don't send empty messages
    if (message.length < 1) {
      setErrorMessage("Please enter a message.");
      return;
    } else {
      setErrorMessage("");
    }

    // trackEvent("send.message", { message: message });
    setIsLoading(true);

    // Add the message to the conversation
    setConversation([
      ...conversation,
      { content: message, role: "user" },
      { content: null, role: "system" },
    ]);

    // Clear the message & remove empty chat
    setMessage("");
    setShowEmptyChat(false);

    try {
      const response = await fetch(`/api/openai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...conversation, { content: message, role: "user" }],
          model: selectedModel,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // Add the message to the conversation
        setConversation([
          ...conversation,
          { content: message, role: "user" },
          { content: data.message, role: "system" },
        ]);
      } else {
        console.error(response);
        setErrorMessage(response.statusText);
      }

      setIsLoading(false);
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message);

      setIsLoading(false);
    }
  };

  const handleKeypress = (e: any) => {
    // It's triggers by pressing the enter key
    if (e.keyCode == 13 && !e.shiftKey) {
      sendMessage(e);
      e.preventDefault();
    }
  };

  return (
    <div className="flex max-w-full flex-1 flex-col overflow-hidden ">
      <div className="relative w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="react-scroll-to-bottom--css-ikyem-79elbk h-full dark:bg-gray-800">
            <div className="ai-section">
              <div className="ai_ask_title_part">
                <img
                  className="h-12 w-12 rounded-full  border-1 border-black dark:border-g ray-800 mx-auto my-4"
                  src="https://cointelegraph.com/magazine/wp-content/uploads/2021/03/unnamed1.png"
                  alt=""
                />
                <div className="ai_title bold">
                  Pepe AI
                  <div className="description-ai">
                    Ask and receive answer in a few minutes
                    <div className="react-scroll-to-bottom--css-ikyem-1n7m0yu">
                      <div className="flex flex-col items-center text-sm dark:bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ask_ai_section">
                <div className="answer_ai_box">
                  {!showEmptyChat && conversation.length > 0 ? (
                    <div className="flex flex-col items-center text-sm bg-gray-800">
                      {conversation.map((message, index) => (
                        <Message key={index} message={message} />
                      ))}
                      <div className="w-full h-16 md:h-48 flex-shrink-0"></div>
                      <div ref={bottomOfChatRef}></div>
                    </div>
                  ) : null}
                </div>
                <textarea
                  ref={textAreaRef}
                  value={message}
                  tabIndex={0}
                  data-id="root"
                  style={{
                    background: "white",
                    height: "24px",
                    maxHeight: "200px",
                    overflowY: "hidden",
                  }}
                  // rows={1}
                  placeholder="Send a message..."
                  className="ask_ai_box"
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeypress}></textarea>

                <div
                  style={{ background: "white" }}
                  className="btn-ask-ai"
                  onClick={sendMessage}>
                  <img
                    className="img-ask-ai"
                    src="/img-logo/application.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
