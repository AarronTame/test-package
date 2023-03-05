/* GENERATED FILE */
import { forwardRef } from "react";
import { IconBase } from "../lib/IconBase";
import type { IconWeight, Icon } from "../lib";

const pathsByWeight = new Map<IconWeight, JSX.Element>([
  [
    "bold",
    <>
      <path d="M243.43,62.05a19.93,19.93,0,0,0-9.06-12.38,205.51,205.51,0,0,0-212.74,0,20,20,0,0,0-6.7,27.48l96,157.26a20,20,0,0,0,34.2,0l96-157.26A19.82,19.82,0,0,0,243.43,62.05ZM87,149.18,67.13,116.62A19.82,19.82,0,0,1,72,116a20,20,0,0,1,15,33.18Zm64,29.45A20,20,0,0,1,168,148c.56,0,1.12,0,1.67.07Zm31.78-52.08a44,44,0,0,0-44.9,73.57L128,216.36,99.77,170.1A44,44,0,0,0,79.49,92.65a140.2,140.2,0,0,1,118,9.81ZM210,82A164.15,164.15,0,0,0,46,82L37.55,68.14a181.52,181.52,0,0,1,180.9,0Z"/>
    </>
  ],
  [
    "duotone",
    <>
      <path d="M218,91.76,187.13,142.4A32,32,0,1,0,154,196.78l-19.13,31.38a8,8,0,0,1-13.7,0L84.3,167.71a32,32,0,1,0-30.48-50L38,91.76a159.77,159.77,0,0,1,180,0Z" opacity="0.2"/><path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0L194,146.53v0l43.61-71.45A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z"/>
    </>
  ],
  [
    "fill",
    <>
      <path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63Zm-55.1,68.53a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Z"/>
    </>
  ],
  [
    "light",
    <>
      <path d="M237.6,63.47a13.91,13.91,0,0,0-6.35-8.67,199.48,199.48,0,0,0-206.5,0A14,14,0,0,0,20.05,74l96,157.27a14,14,0,0,0,24,0L236,74A13.81,13.81,0,0,0,237.6,63.47ZM61.07,118.2A26,26,0,1,1,87.17,161Zm91,70.32a26,26,0,0,1,26.91-44.1Zm33.2-54.4A37.65,37.65,0,0,0,168,130a38,38,0,0,0-22.25,68.8l-16,26.24a2,2,0,0,1-3.46,0L93.59,171.49A38,38,0,1,0,54.66,107.7L46.05,93.59a154.14,154.14,0,0,1,163.9,0Zm40.49-66.35L216.2,83.35a166.11,166.11,0,0,0-176.4,0L30.29,67.77h0a1.88,1.88,0,0,1-.23-1.47A2,2,0,0,1,31,65.06a187.46,187.46,0,0,1,194,0,2,2,0,0,1,.92,1.24A1.88,1.88,0,0,1,225.71,67.77Z"/>
    </>
  ],
  [
    "regular",
    <>
      <path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z"/>
    </>
  ],
  [
    "thin",
    <>
      <path d="M235.66,63.94a11.94,11.94,0,0,0-5.44-7.43,197.51,197.51,0,0,0-204.44,0,12,12,0,0,0-4,16.47l96,157.27a12,12,0,0,0,20.54,0L234.25,73A11.9,11.9,0,0,0,235.66,63.94ZM58.59,118A28,28,0,1,1,86.25,163.3Zm94,73.41a28,28,0,0,1,29.15-47.76Zm33.33-54.61A35.66,35.66,0,0,0,168,132a36,36,0,0,0-19.56,66.22l-17,27.86a4,4,0,0,1-6.88,0l-34-55.67a36,36,0,1,0-36.33-59.54L43.33,93a156,156,0,0,1,169.34,0Zm41.48-68L216.85,86.14a164.07,164.07,0,0,0-177.7,0L28.58,68.81a3.9,3.9,0,0,1-.46-3,4,4,0,0,1,1.82-2.48,189.47,189.47,0,0,1,196.12,0,4,4,0,0,1,1.82,2.48A3.9,3.9,0,0,1,227.42,68.81Z"/>
    </>
  ],
]);

const Pizza: Icon = forwardRef((props, ref) => <IconBase ref={ref} {...props} weights={pathsByWeight} />);

Pizza.displayName = "Pizza";

export default Pizza;
