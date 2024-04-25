import React from "react";

type Props = {
  color: "light" | "dark";
};

type ColorScheme = {
  fill: string;
  stroke: string;
};

type Colors = {
  dark: ColorScheme;
  light: ColorScheme;
};
const ChecklistIcon = ({ color }: Props) => {
  const colors: Colors = {
    dark: { fill: "#0C1F23", stroke: "white" },
    light: { fill: "white", stroke: "#0C1F23" },
  };

  console.log(color, colors[color]);

  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_21_265)">
        <circle cx="14.5" cy="14" r="14" fill={colors[color]["fill"]} />
        <path
          d="M7.5 12.5294L13.0556 19L22.5 8"
          stroke={colors[color]["stroke"]}
          stroke-width="3"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_265">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChecklistIcon;
