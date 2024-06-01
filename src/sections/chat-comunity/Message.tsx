import { SiOpenai } from "react-icons/si";
import { HiUser } from "react-icons/hi";
import { TbCursorText } from "react-icons/tb";
import Image from "next/image";

const MessageCommunity = (props: any) => {
  const { message } = props;
  const { role, content: text } = message;

  const isUser = role === "user";
  console.log({ message });
  return (
    <div
      className={`group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 ${
        isUser ? "dark:bg-gray-800" : "bg-gray-50 dark:bg-[#444654]"
      }`}>
      <div className="">
        <div className="flex flex-row gap-2 md:gap-2 md:max-w-2xl xl:max-w-3xl p-1 md:py-1 lg:px-0 ml-4 mt-2 w-full">
          <div className="w-8 flex flex-col relative items-end">
            <div className="relative h-7 w-7 p-0 rounded-sm text-white flex items-center justify-center  text-opacity-100r">
              {isUser ? (
                <div className="relative h-7 w-7 p-0 rounded-sm text-white flex items-center justify-center bg-black/75 text-opacity-100r">
                  <HiUser className="h-4 w-4 text-white " />
                </div>
              ) : (
                <img alt="123" src={`/pepe/hi.png`}></img>
              )}
            </div>
            <div className="text-xs flex items-center justify-center gap-1 absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible !invisible">
              <button
                disabled
                className="text-gray-300 dark:text-gray-400"></button>
              <span className="flex-grow flex-shrink-0">1 / 1</span>
              <button
                disabled
                className="text-gray-300 dark:text-gray-400"></button>
            </div>
          </div>
          <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
            <div className="flex flex-grow flex-col gap-3">
              <div className="min-h-10 flex flex-col items-start gap-4 whitespace-pre-wrap break-words">
                <div className="markdown prose w-full break-words dark:prose-invert dark">
                  {!isUser && text === null ? (
                    <TbCursorText className="h-6 w-6 animate-pulse" />
                  ) : (
                    <p>{text}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCommunity;
