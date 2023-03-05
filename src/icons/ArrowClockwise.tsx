/* GENERATED FILE */
import { forwardRef } from "react";
import { IconBase } from "../lib/IconBase";
import type { IconWeight, Icon } from "../lib";

const pathsByWeight = new Map<IconWeight, JSX.Element>([
  [
    "bold",
    <>
      <path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"/>
    </>
  ],
  [
    "duotone",
    <>
      <path d="M232,56v48H184Z" opacity="0.2"/><path d="M235.06,48.57a8,8,0,0,0-8.72,1.73L206.68,70,195.75,60a96,96,0,1,0-69.07,164H128a95.44,95.44,0,0,0,65.88-26.19,8,8,0,0,0-11-11.63A80,80,0,1,1,184.56,71.4l.25.24,10.55,9.65-17,17A8,8,0,0,0,184,112h48a8,8,0,0,0,8-8V56A8,8,0,0,0,235.06,48.57ZM224,96H203.31L224,75.28Z"/>
    </>
  ],
  [
    "fill",
    <>
      <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z"/>
    </>
  ],
  [
    "light",
    <>
      <path d="M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z"/>
    </>
  ],
  [
    "regular",
    <>
      <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/>
    </>
  ],
  [
    "thin",
    <>
      <path d="M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z"/>
    </>
  ],
]);

const ArrowClockwise: Icon = forwardRef((props, ref) => <IconBase ref={ref} {...props} weights={pathsByWeight} />);

ArrowClockwise.displayName = "ArrowClockwise";

export default ArrowClockwise;