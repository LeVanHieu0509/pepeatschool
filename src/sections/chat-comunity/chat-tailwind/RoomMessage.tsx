import { useEffect, useState } from "react";
import { Message } from "../utils/message";
import Avatar from "../components/Avatar";
import { ItemWrapper } from "./styled";

export default function RoomMessage(props: {
  message: Message;
  isMe: boolean;
}) {
  const { message, isMe } = props;
  const [formattedDate, setFormattedDate] = useState<string | null>();

  // Format the date on the client to avoid hydration mismatch
  useEffect(
    () => setFormattedDate(new Date(message.at).toLocaleTimeString()),
    [message.at]
  );

  if (message.from.id === "system") {
    return (
      <li className="text-stone-400 flex flex-col justify-center items-center text-center gap-1">
        <span className="font-mono text-sm">{message.text}</span>
        <span className="text-xs">{formattedDate}</span>
      </li>
    );
  } else {
    return (
      <div
        className={`flex justify-start gap-2 ${
          isMe ? "flex-row-reverse" : ""
        }`}>
        <ItemWrapper
          className={`flex flex-row items-center ${isMe ? "justify-end" : ""}`}>
          <div className="grow-0">
            <Avatar
              username={message.from.id}
              image={message.from.image ?? null}
            />
          </div>
          <div className={`flex flex-col gap-1 ${isMe ? "items-end " : ""}`}>
            <div
              className={`w-3/6 bg-stone-100 px-2 py-1 rounded-xl ml-3  py-2 px-4 shadow rounded-xl ${
                isMe ? "bg-gray" : "bg-white"
              }`}>
              {isMe ? (
                <span className="text-sm">{message.text}</span>
              ) : (
                <>
                  <span className="text-xs" style={{ fontSize: "10px" }}>
                    {message.from.username}
                  </span>
                  <br />
                  <span className="text-sm">{message.text}</span>
                </>
              )}
            </div>

            <span
              className="text-xs text-stone-400 text-right"
              style={{ fontSize: "10px" }}>
              {formattedDate ?? <>&nbsp;</>}
            </span>
          </div>
        </ItemWrapper>
      </div>
    );
  }
}
