import { ArrowRight } from "@/assets";
import Button from "@/components/Button";
import Chart from "@/components/Chart";
import CircularProgress from "@/components/CircularProgressBar";
import ContentContainer from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import ToggleSwitch from "@/components/Switch";
import Text from "@/components/Text";
import { POINTS_ROUTE } from "@/constants/routes";
import { points } from "@/data/points";
import formatDate from "@/services/utils/formatDate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

function RecycleReport() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    dataValues: [100, 200, 150, 300, 250, 180, 220],
  };

  const monthlyData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    dataValues: [500, 700, 650, 800, 600],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend for a cleaner look
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="relative bg-[url('/images/bg.png')] bg-contain bg-center min-h-screen items-center">
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      <div className="flex items-center w-full py-6 relative">
        <div className="absolute left-4">
          <IoIosArrowDropleftCircle
            className="text-[#217C70] text-4xl cursor-pointer"
            onClick={() => router.back()}
          />
        </div>
        <h2 className="flex-1 text-black text-center text-base font-semibold">
          Recycle Report
        </h2>
      </div>
      <div className="relative z-3 mt-5 mb-14 p-4 flex flex-col">
        <ContentContainer
          bgColor="bg-[#217C70]"
          textColor="text-white"
          className="flex items-center mb-3 justify-between"
        >
          <div>
            <Text variant="h4" customSize="10px">
              Total Points Earned
            </Text>
            <div className="flex items-center gap-1">
              {isEnabled ? (
                <Text variant="h1" size="xl">
                  18kg
                </Text>
              ) : (
                <Text variant="h1" size="xl">
                  3kg
                </Text>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Text customSize="10px" variant={isEnabled ? "h3" : "h4"}>
                Monthly
              </Text>{" "}
              |{" "}
              <Text customSize="10px" variant={!isEnabled ? "h3" : "h4"}>
                Weekly
              </Text>
            </div>
            <ToggleSwitch checked={isEnabled} onChange={setIsEnabled} />
          </div>
        </ContentContainer>

        <div className="flex flex-col gap-5 mt-9">
          <div className="flex justify-between items-center">
            <Text customSize="15px" variant="h4">
              Total Est. Income
            </Text>
            <div className="flex items-center gap-1">
              <Text
                customSize="15px"
                variant={isEnabled ? "h3" : "h4"}
                className={`${isEnabled ? "text-black" : "text-[#979797]"}`}
              >
                Monthly
              </Text>{" "}
              |{" "}
              <Text
                customSize="15px"
                variant={!isEnabled ? "h3" : "h4"}
                className={`${!isEnabled ? "text-black" : "text-[#979797]"}`}
              >
                Weekly
              </Text>
            </div>
          </div>

          <div className="mt-6">
            <Chart
              type="bar"
              labels={isEnabled ? monthlyData.labels : weeklyData.labels}
              dataValues={
                isEnabled ? monthlyData.dataValues : weeklyData.dataValues
              }
              options={chartOptions}
            />
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default RecycleReport;
