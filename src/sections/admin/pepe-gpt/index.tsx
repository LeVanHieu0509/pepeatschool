import DefaultLayout from "src/components/Layouts/DefaultLayout";
import { PepeGptScreenWrapper } from "./styled";

interface PepeGptScreenProps {}

const PepeGptScreen = ({}: PepeGptScreenProps) => {
  return (
    <PepeGptScreenWrapper>
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
            </div>
          </div>
        </div>
        <div className="ask_ai_section">
          <div className="answer_ai_box"></div>
          <input
            className="ask_ai_box"
            placeholder="Nhập câu hỏi ở đây"
            type="text"></input>
          <div className="btn-ask-ai">
            <img className="img-ask-ai" src="/img-logo/application.png"></img>
          </div>
        </div>
      </div>
    </PepeGptScreenWrapper>
  );
};

export default PepeGptScreen;
