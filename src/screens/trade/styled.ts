import styled from "styled-components";

export const CourseScreenWrapper = styled.div`
  .Main {
    font-family: "Montserrat", sans-serif;
  }
  .bold {
    font-weight: 800;
  }
  .margin-bot {
    margin-bottom: 10px;
  }
  .sm-text {
    font-size: 16px;
  }
  .Main-title {
    align-items: center;
    text-align: center;
    margin: 20px;
  }
  .pepetitle-and-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .pepetitle-logo {
    max-width: 2.4rem;
    max-height: 2.4rem;
  }
  .pepetitle {
    font-weight: 900;
    font-size: 3.5rem;
    font-family: "Anton", sans-serif;
    color: #008000;
  }
  .pepetitle-logo {
    margin-left: 5px;
  }
  .pepetitle-line {
    margin-top: -15px;
  }
  .prediction_section {
    display: flex;
    flex-direction: row;

    background-color: #f8f9fa;
    border-width: 3px;
    border-radius: 30px;
    border-color: #008000;
  }
  .eighty-percent-section {
    width: 75%;
    padding: 20px;
    margin: 0 auto;
    border-right: #008000 3px solid;
    background-image: url("https://market-trending.fidt.vn/images/bg-down.svg");
    background-position-x: -50px;
  }
  .twenty-precent-section {
    width: 25%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    display: flex;
    padding: 30px 20px 10px 20px;
    text-align: center;
  }
  .prediction_headline {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 36px;
    text-align: center;
  }
  .red-condition_prediction {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .down_prediction {
    font-size: 6rem;
    line-height: 15rem;
    font-weight: bold;
    margin-right: 25px;
    color: red;
    text-transform: uppercase;
  }
  .down-img_prediction {
    width: 200px;
    height: 200px;
  }
  .description_inter {
    margin-top: -15px;
    text-align: center;
    font-style: italic;
  }
  .inter {
    color: #008000;
    font-weight: bolder;
  }
  .description_inter_logo {
    width: 20px;
    height: 20px;
    background-image: url("/img-logo/verified.png");
  }
  .prediction_risk_part {
  }
  .prediction_risk_headline {
  }
  .prediction_risk_data {
  }
  .red800 {
    color: red;
  }
  .btn_more_info {
    color: #008000;
    cursor: pointer;
    border: #008000 1px solid;
    margin-top: 30px;
    padding: 15px;
  }
  .btn_more_info:hover {
    color: #f8f9fa;
    background-color: #008000;
    transition: ease-in-out 0.5s;
  }
  .PEPEATSCHOOL-info {
    text-decoration: underline;
    font-style: italic;
    margin-top: 30px;
    cursor: pointer;
  }
  .ssm-text {
    font-size: 14px;
  }
  .ai-section {
    border: #008000 3px solid;
    border-radius: 30px;
    padding: 10px 20px;
    margin-top: 30px;
    background-color: #008000;
  }
  .ai_ask_title_part {
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
  }
  .ai_title {
    margin-left: 10px;
    font-size: 1.5rem;
    color: white;
  }
  .description-ai {
    font-weight: 500;
    font-size: 1.3rem;
    margin-top: -5px;
  }
  .border-1 {
    border: #008000 1px solid;
  }
  .ask_ai_section {
    margin-top: 10px;
    margin-bottom: 20px;
    position: relative;
  }
  .ask_ai_box {
    border-radius: 30px;
    width: 100%;
    padding: 10px;
    height: 60px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
  .answer_ai_box {
    width: 100%;
    background-color: white;
    height: 300px;
    border-radius: 30px;
    margin-bottom: 20px;
  }
  .btn-ask-ai {
    position: absolute;
    background-color: #f8f9fa;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .btn-ask-ai:hover {
    background-color: #008000;
  }
  .img-ask-ai {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    padding-bottom: -40px;
  }
`;

export const UL = styled.ul`
  li {
    font-size: 50px;
  }
`;
