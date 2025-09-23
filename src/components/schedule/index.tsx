import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import React from "react";
import Marquee from "../marquee";

const dates = [
  {
    label: "Full Paper Submission Date", 
    date: "26 April 2026",
    color: "#7AB2B2",
  },
  {
    label: "Notification of Acceptance",
    date: "02 May 2026", 
    color: "#006A67",
  },
  {
    label: "Revised Paper Submission",
    date: "06 May 2026",
    color: "#F96E2A",
  },
  {
    label: "Early Bird Registration",
    date: "06 May 2026",
    color: "#133E87",
  },
  {
    label: "Late Registration",
    date: "10 May 2026",
    color: "#7E60BF",
  },
  {
    label: "Conference Dates",
    date: "16-17 May 2026",
    color: "#201E43",
  },
];

function Schedule() {
  return (
    <div className="bg-gradient-to-b from-secondary-100 via-white to-secondary-100 py-4 pb-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-base sm:text-lg font-bold text-primary-600 mb-3 px-2"> 
            <a href="/pdfs/ICSICST2026-Conference-Schedule.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:underline transition-colors duration-200">
              Click Here To See Full ICSICST2026 Conference Schedule
            </a>
          </h2>
          <h2 className="text-base sm:text-lg font-bold text-text-primary">
            Important Dates :
          </h2>
          <div className="h-0.5 w-12 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {dates.map((dateInfo, index) => (
            <div
              key={index}
              className="bg-background-primary rounded-lg shadow-sm p-3 sm:p-4 border border-secondary-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-md flex items-center justify-center shrink-0"
                  style={{ 
                    backgroundColor: `${dateInfo.color}15`
                  }}
                >
                  <FaCalendarAlt 
                    size={16}
                    color={dateInfo.color}
                  />
                </div>

                <div>
                  <h3 
                    className="font-medium text-sm sm:text-base"
                    style={{ color: dateInfo.color }}
                  >
                    {dateInfo.label}
                  </h3>
                  <div className="text-text-secondary text-xs sm:text-sm mt-0.5">
                    {dateInfo.date}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="h-1.5 w-full bg-secondary-200 rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ 
                      width: `${100 - (index * 15)}%`,
                      backgroundColor: dateInfo.color
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative mt-8">
          <div className="absolute left-0 right-0 h-0.5 bg-secondary-300 top-1/2 transform -translate-y-1/2">
            {dates.map((dateInfo, index) => (
              <div
                key={index}
                className="absolute w-2 h-2 rounded-full transform -translate-y-1/2"
                style={{
                  left: `${(index + 1) * (100 / (dates.length + 1))}%`,
                  backgroundColor: dateInfo.color
                }}
              >
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[11px] sm:text-xs text-text-secondary whitespace-nowrap">
                  {dateInfo.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
