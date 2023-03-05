/* GENERATED FILE */
import { forwardRef } from "react";
import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
  RenderFunction,
} from "../lib";
import { IconBase } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>([
  ["bold", (color: string) => (
      <>
        <circle cx="136" cy="116" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="32" y1="108" x2="56" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="32" y1="68" x2="56" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="32" y1="148" x2="56" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><line x1="32" y1="188" x2="56" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/><path d="M92,167.2a60,60,0,0,1,88,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
      </>
    )
  ],
  ["duotone", (color: string) => (
      <>
        <circle cx="136" cy="112" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M208,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V40A8,8,0,0,0,208,32ZM136,144a32,32,0,1,1,32-32A32,32,0,0,1,136,144Z" opacity="0.2"/><line x1="32" y1="108" x2="56" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="68" x2="56" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="148" x2="56" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="188" x2="56" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </>
    )
  ],
  ["fill", () => (
      <>
        <path d="M160,112a24,24,0,1,1-24-24A24.1,24.1,0,0,1,160,112Zm64-72V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V196H32a8,8,0,0,1,0-16H48V156H32a8,8,0,0,1,0-16H48V116H32a8,8,0,0,1,0-16H48V76H32a8,8,0,0,1,0-16H48V40A16,16,0,0,1,64,24H208A16,16,0,0,1,224,40ZM190.4,163.2A67.8,67.8,0,0,0,163,141.5a40,40,0,1,0-54,0,67.8,67.8,0,0,0-27.4,21.7,8,8,0,0,0,1.6,11.2A7.7,7.7,0,0,0,88,176a8,8,0,0,0,6.4-3.2,52,52,0,0,1,83.2,0,8.1,8.1,0,0,0,11.2,1.6A8,8,0,0,0,190.4,163.2Z"/>
      </>
    )
  ],
  ["light", (color: string) => (
      <>
        <circle cx="136" cy="112" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><line x1="32" y1="108" x2="56" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><line x1="32" y1="68" x2="56" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><line x1="32" y1="148" x2="56" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><line x1="32" y1="188" x2="56" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
      </>
    )
  ],
  ["thin", (color: string) => (
      <>
        <circle cx="136" cy="112" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><line x1="32" y1="108" x2="56" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><line x1="32" y1="68" x2="56" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><line x1="32" y1="148" x2="56" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><line x1="32" y1="188" x2="56" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
      </>
    )
  ],
  ["regular", (color: string) => (
      <>
        <circle cx="136" cy="112" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="108" x2="56" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="68" x2="56" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="148" x2="56" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="32" y1="188" x2="56" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88,168a60,60,0,0,1,96,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><rect x="40" y="48" width="192" height="160" rx="8" transform="translate(264 -8) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </>
    )
  ],
]);

const addressBookDefinition: RenderFunction = (weight: IconWeight, color: string) => renderPathForWeight(weight, color, pathsByWeight);

const AddressBook = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={ addressBookDefinition } />
));

AddressBook.displayName = "AddressBook";

export { AddressBook, addressBookDefinition };
