import { Button } from "nextra/components";
import { OverviewScreenWrapper } from "./styled";
import dynamic from "next/dynamic";

interface OverviewScreenProps {}

const DynamicChartOneWithNoSSR = dynamic(
  () => import("src/components/Charts/ChartOne"),
  { ssr: false }
);

const OverviewScreen = ({}: OverviewScreenProps) => {
  return (
    <OverviewScreenWrapper>
      <div className="Main" style={{ marginBottom: "24px" }}>
        <div className="Main-title">
          <div className="pepetitle-and-logo">
            <div className="pepetitle">PAS</div>
            <img
              src="/img-logo/settings-gears.png"
              className="pepetitle-logo"></img>
          </div>
          <div className="pepetitle-line">Risk Management System</div>
        </div>
        <div className="prediction_section ">
          <div className="eighty-percent-section">
            <div className="prediction_headline">
              Dự báo thị trường tuần này
            </div>
            <div className="red-condition_prediction">
              <div className="down_prediction">Giảm</div>
              <img
                src="/img-logo/pepe-crew-img.png"
                className="down-img_prediction"></img>
            </div>
            <div className="description_inter">
              <span className="description_inter_logo"></span>
              Dự đoán bởi
              <b className="inter"> PEPEATSCHOOL Team </b>
              với độ chính xác trong quá khứ:
              <span className="inter"> 85%</span>
            </div>
          </div>
          <div className="twenty-precent-section">
            <div className="prediction_risk_part ">
              <div className="prediction_risk_headline bold sm-text margin-bot">
                Tỉ lệ rủi ro
              </div>
              <div className="prediction_risk_data red800 bold margin-bot">
                35.63%
              </div>
            </div>
            <div className="prediction_risk_change">
              <div className="prediction_risk_change_headline bold sm-text margin-bot">
                Tỉ lệ rủi ro thay đổi
              </div>
              <div className="prdiction_risk_change_data red800 bold margin-bot">
                1.75%
              </div>
            </div>
            <Button className="btn_more_info bold">Xem thêm</Button>
            <div className="PEPEATSCHOOL-info ssm-text">
              Tìm hiểu thêm về RMS
            </div>
          </div>
        </div>
      </div>

      <div className="prediction_headline " style={{ marginBottom: "24px" }}>
        PEPE Chart
      </div>

      <DynamicChartOneWithNoSSR />
    </OverviewScreenWrapper>
  );
};

export default OverviewScreen;
