import PepeChat from "src/plugins/chat-gpt/pages";
import { PepeGptScreenWrapper } from "./styled";

interface PepeGptScreenProps {}

const PepeGptScreen = ({}: PepeGptScreenProps) => {
  return (
    <PepeGptScreenWrapper>
      <PepeChat />
    </PepeGptScreenWrapper>
  );
};

export default PepeGptScreen;
