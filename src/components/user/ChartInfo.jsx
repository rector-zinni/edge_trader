import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ChartInformation = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Chart configuration (example data — you can customize)
    const options = {
      chart: {
        type: "area",
        height: 300,
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#6c63ff"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      series: [
        {
          name: "Earnings",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 125],
        },
      ],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: { style: { colors: "#ccc" } },
      },
      yaxis: {
        labels: { style: { colors: "#ccc" } },
      },
      grid: { borderColor: "#333" },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Cleanup when component unmounts
    return () => chart.destroy();
  }, []);

  return (
    <section className="chart-information">
      <div className="row">
        {/* Chart */}
        <div className="col-lg-6 mb-4">
          <div className="progress-wrapper">
            <div id="container" ref={chartRef} className="apexcharts-canvas"></div>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="col-lg-6 mb-4">
          <div className="progress-wrapper progress-wrapper-circle">
            <div className="progress-container d-flex flex-column flex-sm-row justify-content-around">
              {[
                { title: "Invest Completed", percent: "0 %" },
                { title: "ROI Speed", percent: "100 %" },
                { title: "ROI Redeemed", percent: "0 %" },
              ].map((item, i) => (
                <div key={i} className={`circular-progress cp_${i + 1}`}>
                  <svg className="radial-progress" viewBox="0 0 80 80">
                    <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                    <circle
                      className="complete"
                      cx="40"
                      cy="40"
                      r="35"
                      style={{
                        strokeDashoffset:
                          item.percent === "100 %" ? 0 : 147.34 - parseInt(item.percent) * 1.47,
                      }}
                    ></circle>
                    <text
                      className="percentage"
                      x="50%"
                      y="53%"
                      transform="matrix(0,1,-1,0,80,0)"
                    >
                      {item.percent}
                    </text>
                  </svg>
                  <h4 className="golden-text mt-4 text-center">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartInformation;
