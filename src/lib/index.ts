import React from "react";

export type RenderFunction = (weight: IconWeight, color: string) => React.ReactNode | null;

export type PaintFunction = (color: string) => React.ReactNode | null;

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
	alt?: string;
	color?: string;
	size?: string | number;
	weight?: IconWeight;
	mirrored?: boolean;
}

type IconComponentProps = IconProps & React.RefAttributes<SVGSVGElement>;

export type Icon = React.ForwardRefExoticComponent<IconComponentProps>;

export const IconContext = React.createContext<IconProps>({
	color: "currentColor",
	size: "1em",
	weight: "regular",
	mirrored: false,
});
