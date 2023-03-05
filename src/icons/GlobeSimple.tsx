/* GENERATED FILE */
import { forwardRef } from "react";
import { IconBase } from "../lib/IconBase";
import type { IconWeight, Icon } from "../lib";

const pathsByWeight = new Map<IconWeight, JSX.Element>([
  [
    "bold",
    <>
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96H179.56a155.5,155.5,0,0,0-19.51-65.63A84.23,84.23,0,0,1,211.13,116ZM100.51,140h55c-2.25,26.69-12,51.46-27.49,69.85C112.46,191.46,102.76,166.69,100.51,140Zm0-24c2.25-26.69,11.95-51.46,27.49-69.85,15.54,18.39,25.24,43.16,27.49,69.85ZM96,50.37A155.5,155.5,0,0,0,76.44,116H44.87A84.23,84.23,0,0,1,96,50.37ZM44.87,140H76.44A155.5,155.5,0,0,0,96,205.63,84.23,84.23,0,0,1,44.87,140Zm115.18,65.63A155.5,155.5,0,0,0,179.56,140h31.57A84.23,84.23,0,0,1,160.05,205.63Z"/>
    </>
  ],
  [
    "duotone",
    <>
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM96.23,136h63.54c-1.68,30.87-13,59.62-31.77,79.89C109.27,195.62,97.91,166.87,96.23,136Zm0-16c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm9.09-77C90.47,64.53,81.61,91.54,80.2,120H40.37A88.2,88.2,0,0,1,105.32,43ZM40.37,136H80.2c1.41,28.46,10.27,55.47,25.12,77A88.2,88.2,0,0,1,40.37,136Zm110.31,77c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z"/>
    </>
  ],
  [
    "fill",
    <>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM96.23,136h63.54c-1.68,30.87-13,59.62-31.77,79.89C109.27,195.62,97.91,166.87,96.23,136Zm0-16c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm54.45,93c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z"/>
    </>
  ],
  [
    "light",
    <>
      <path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm89.8,96H173.88c-1.15-30.72-11.09-59.83-27.94-82.2A90.18,90.18,0,0,1,217.8,122ZM128,218a1.75,1.75,0,0,1-1.32-.59c-19.56-21.07-31.26-51.2-32.56-83.41h67.75c-1.29,32.21-13,62.34-32.55,83.41A1.75,1.75,0,0,1,128,218ZM94.12,122c1.3-32.21,13-62.34,32.56-83.41a1.77,1.77,0,0,1,2.64,0c19.56,21.07,31.26,51.2,32.55,83.41Zm15.94-82.2C93.21,62.17,83.27,91.28,82.12,122H38.2A90.18,90.18,0,0,1,110.06,39.8ZM38.2,134H82.12c1.15,30.72,11.09,59.83,27.94,82.2A90.18,90.18,0,0,1,38.2,134Zm107.74,82.2c16.85-22.37,26.79-51.48,27.94-82.2H217.8A90.18,90.18,0,0,1,145.94,216.2Z"/>
    </>
  ],
  [
    "regular",
    <>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.63,96H175.8c-1.41-28.46-10.27-55.47-25.12-77A88.2,88.2,0,0,1,215.63,120ZM128,215.89c-18.73-20.27-30.09-49-31.77-79.89h63.54C158.09,166.87,146.73,195.62,128,215.89ZM96.23,120c1.68-30.87,13-59.62,31.77-79.89,18.73,20.27,30.09,49,31.77,79.89Zm9.09-77C90.47,64.53,81.61,91.54,80.2,120H40.37A88.2,88.2,0,0,1,105.32,43ZM40.37,136H80.2c1.41,28.46,10.27,55.47,25.12,77A88.2,88.2,0,0,1,40.37,136Zm110.31,77c14.85-21.56,23.71-48.57,25.12-77h39.83A88.2,88.2,0,0,1,150.68,213Z"/>
    </>
  ],
  [
    "thin",
    <>
      <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm91.91,96h-48c-.83-32.93-11.88-64.09-30.79-87.06A92.16,92.16,0,0,1,219.91,124ZM128,220a3.76,3.76,0,0,1-2.78-1.23C104.91,196.9,93,165.46,92.06,132h71.88c-.89,33.46-12.85,64.9-33.16,86.77A3.76,3.76,0,0,1,128,220ZM92.06,124c.89-33.46,12.85-64.9,33.16-86.77a3.76,3.76,0,0,1,5.56,0C151.09,59.1,163.05,90.54,163.94,124Zm22.79-87.06c-18.91,23-30,54.13-30.79,87.06h-48A92.16,92.16,0,0,1,114.85,36.94ZM36.09,132h48c.83,32.93,11.88,64.09,30.79,87.06A92.16,92.16,0,0,1,36.09,132Zm105.06,87.06c18.91-23,30-54.13,30.79-87.06h48A92.16,92.16,0,0,1,141.15,219.06Z"/>
    </>
  ],
]);

const GlobeSimple: Icon = forwardRef((props, ref) => <IconBase ref={ref} {...props} weights={pathsByWeight} />);

GlobeSimple.displayName = "GlobeSimple";

export default GlobeSimple;