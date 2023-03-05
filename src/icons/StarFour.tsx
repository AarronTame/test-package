/* GENERATED FILE */
import { forwardRef } from "react";
import { IconBase } from "../lib/IconBase";
import type { IconWeight, Icon } from "../lib";

const pathsByWeight = new Map<IconWeight, JSX.Element>([
  [
    "bold",
    <>
      <path d="M230.86,109.25,169.18,86.82,146.75,25.14a19.95,19.95,0,0,0-37.5,0L86.82,86.82,25.14,109.25a19.95,19.95,0,0,0,0,37.5l61.68,22.43,22.43,61.68a19.95,19.95,0,0,0,37.5,0l22.43-61.68,61.68-22.43a19.95,19.95,0,0,0,0-37.5Zm-71.65,38a19.92,19.92,0,0,0-11.94,11.94l-19.27,53-19.27-53a19.92,19.92,0,0,0-11.94-11.94L43.79,128l53-19.27a19.92,19.92,0,0,0,11.94-11.94l19.27-53,19.27,53a19.92,19.92,0,0,0,11.94,11.94l53,19.27Z"/>
    </>
  ],
  [
    "duotone",
    <>
      <path d="M226.76,135.48l-63.45,23.07a8,8,0,0,0-4.76,4.76l-23.07,63.45a8,8,0,0,1-15,0L97.45,163.31a8,8,0,0,0-4.76-4.76L29.24,135.48a8,8,0,0,1,0-15L92.69,97.45a8,8,0,0,0,4.76-4.76l23.07-63.45a8,8,0,0,1,15,0l23.07,63.45a8,8,0,0,0,4.76,4.76l63.45,23.07A8,8,0,0,1,226.76,135.48Z" opacity="0.2"/><path d="M229.5,113,166.07,90,143,26.5a16,16,0,0,0-30,0L90,89.93,26.5,113a16,16,0,0,0,0,30l63.43,23L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30Zm-68.93,38a16,16,0,0,0-9.54,9.54L128,223.9l-23-63.33A16,16,0,0,0,95.43,151L32.1,128l63.33-23A16,16,0,0,0,105,95.43L128,32.1l23,63.33a16,16,0,0,0,9.54,9.54l63.33,23Z"/>
    </>
  ],
  [
    "fill",
    <>
      <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.93,166,26.5,143a16,16,0,0,1,0-30L90,89.93,113,26.5a16,16,0,0,1,30,0L166.07,90,229.5,113A15.79,15.79,0,0,1,240,128Z"/>
    </>
  ],
  [
    "light",
    <>
      <path d="M228.81,114.89,165.36,91.81a1.94,1.94,0,0,1-1.17-1.17L141.11,27.19a13.95,13.95,0,0,0-26.22,0L91.81,90.64a1.94,1.94,0,0,1-1.17,1.17L27.19,114.89a13.95,13.95,0,0,0,0,26.22l63.45,23.08a1.94,1.94,0,0,1,1.17,1.17l23.08,63.45a13.95,13.95,0,0,0,26.22,0l23.08-63.45h0a1.94,1.94,0,0,1,1.17-1.17l63.45-23.08a13.95,13.95,0,0,0,0-26.22Zm-4.1,15-63.45,23.07a14,14,0,0,0-8.35,8.35l-23.07,63.45a2,2,0,0,1-3.68,0l-23.07-63.45a14,14,0,0,0-8.35-8.35L31.29,129.84a2,2,0,0,1,0-3.68l63.45-23.07a14,14,0,0,0,8.35-8.35l23.07-63.45a2,2,0,0,1,3.68,0l23.07,63.45a14,14,0,0,0,8.35,8.35l63.45,23.07a2,2,0,0,1,0,3.68Z"/>
    </>
  ],
  [
    "regular",
    <>
      <path d="M229.5,113,166.07,90,143,26.5a16,16,0,0,0-30,0L90,89.93,26.5,113a16,16,0,0,0,0,30l63.43,23L113,229.5a16,16,0,0,0,30,0l23.07-63.44L229.5,143a16,16,0,0,0,0-30Zm-68.93,38a16,16,0,0,0-9.54,9.54L128,223.9l-23-63.33A16,16,0,0,0,95.43,151L32.1,128l63.33-23A16,16,0,0,0,105,95.43L128,32.1l23,63.33a16,16,0,0,0,9.54,9.54l63.33,23Z"/>
    </>
  ],
  [
    "thin",
    <>
      <path d="M228.13,116.77,164.67,93.69a3.94,3.94,0,0,1-2.36-2.36L139.23,27.87a11.95,11.95,0,0,0-22.46,0L93.69,91.33a3.94,3.94,0,0,1-2.36,2.36L27.87,116.77a11.95,11.95,0,0,0,0,22.46l63.46,23.08a3.94,3.94,0,0,1,2.36,2.36l23.08,63.46a11.95,11.95,0,0,0,22.46,0l23.08-63.46h0a3.94,3.94,0,0,1,2.36-2.36l63.46-23.08a11.95,11.95,0,0,0,0-22.46Zm-2.73,15-63.46,23.07a11.93,11.93,0,0,0-7.15,7.15L131.72,225.4a4,4,0,0,1-7.44,0l-23.07-63.46a11.93,11.93,0,0,0-7.15-7.15L30.6,131.72a4,4,0,0,1,0-7.44l63.46-23.07a11.93,11.93,0,0,0,7.15-7.15L124.28,30.6a4,4,0,0,1,7.44,0l23.07,63.46a11.93,11.93,0,0,0,7.15,7.15l63.46,23.07a4,4,0,0,1,0,7.44Z"/>
    </>
  ],
]);

const StarFour: Icon = forwardRef((props, ref) => <IconBase ref={ref} {...props} weights={pathsByWeight} />);

StarFour.displayName = "StarFour";

export default StarFour;
