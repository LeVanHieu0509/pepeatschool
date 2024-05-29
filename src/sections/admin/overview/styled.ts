import styled from "styled-components";
import { device } from "styles/media";

export const OverviewScreenWrapper = styled.div`
  .article {
    padding-left: -15px !important;
  }

  @media ${device.mobile}{
    .prediction_section{
      flex-direction: column;
    }
    .eighty-percent-section{
      width: 100%;
      background-position: center;
    }
    .down_prediction{
      font-size: 4rem;
    }
    .down_prediction-img{
      width: 150px;
      height: 150px;
    }
    .description_inter{
      font-size: 14px;
    }
    .twenty-precent-section{
      width: 100%;
    }
   
  }
`;
