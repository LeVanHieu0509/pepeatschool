import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Flex } from "styles/common";

const options: any = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026",
      "2027",
      "2028",
      "2029",
      "2030",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 150000,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [dataChart, setDataChart] = useState<any>();

  useEffect(() => {
    const dataChart = async () => {
      const response = await fetch(
        "https://api.invest.vndc.io/api/v1/currency?baseCurrency=USDT",
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body data type must match "Content-Type" header
        }
      );

      return response.json();
    };
    dataChart().then((d) => setDataChart(d.data));
  }, []);

  const BTC = dataChart && dataChart[0];
  const ETH = dataChart && dataChart[1];

  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "BTC",
        data: [23, 11, 22, 27, 13, 22, 12, 21, 44, 22, 30, 45, 20],
      },

      {
        name: "ETH",
        data: [30, 25, 36, 30, 45, 35, 2024, 52, 59, 36, 39, 51, 20],
      },
    ],
  });

  useEffect(() => {
    if (BTC && ETH) {
      setState({
        series: [
          {
            name: "BTC",
            data: [
              5000,
              8000,
              15000,
              67660,
              47818,
              44255,
              Number(BTC?.statistics.price.toFixed(0)),
              74102,
              81293,
              89293,
              98332,
              105000,
              119829,
            ],
          },

          {
            name: "ETH",
            data: [
              1200,
              2609,
              3478,
              4593,
              3594,
              2389,
              Number(ETH?.statistics.price.toFixed(0)),
              4023,
              1142,
              4893,
              5385,
              5994,
              6646,
            ],
          },
        ],
      });
    }
  }, [BTC, ETH]);
  console.log(state);
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <Flex className="w-full">
              <p
                className="font-semibold text-primary"
                style={{ whiteSpace: "nowrap" }}>
                Dự đoán giá BTC và ETH (USDT)
              </p>
              {/* <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p> */}
            </Flex>
          </div>
          {/* <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Total Sales</p>
              <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
            </div>
          </div> */}
        </div>
        {/* <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              Day
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Week
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              Month
            </button>
          </div>
        </div> */}
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          {state?.series && (
            <ReactApexChart
              options={options}
              series={state.series}
              type="area"
              height={350}
              width={"100%"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
