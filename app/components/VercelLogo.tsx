import * as React from "react";

// By: ion
// See: https://v0.app/icon/ion/logo-vercel
// Example: <IconIonLogoVercel width="24px" height="24px" style={{color: "#000000"}} />

export const VercelLogo = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path fill={fill} fillRule="evenodd" d="m256 48l240 416H16Z" />
  </svg>
);
