import ChatScreen from "src/screens/chat";
import { RoomChatScreenWrapper } from "./styled";

interface RoomChatScreenProps {}

const RoomChatScreen = ({}: RoomChatScreenProps) => {
  return (
    <RoomChatScreenWrapper>
      <ChatScreen />
    </RoomChatScreenWrapper>
  );
};

export default RoomChatScreen;
