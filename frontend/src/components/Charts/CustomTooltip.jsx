import React from "react";

const CustomTooltip = ({active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200">
        <p className="text-xs font-semibold text-purple-800 mb-1">
          {payload[0].name}
        </p>
        <div className="text-sm text-gray-600">
          Count:{" "}
          <span className="text-sm font-medium text-gray-900">
            {payload[0].value}
          </span>
        </div>
      </div>
    );
  }
};

export default CustomTooltip;
