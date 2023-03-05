import * as React from "react";

export type RenderFunction = (weight: IconWeight, color: string) => React.ReactNode | null;

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export type PaintFunction = (color: string) => React.ReactNode | null;

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

export const renderPathForWeight = (
	weight: IconWeight,
	color: string,
	pathsByWeight: Map<IconWeight, PaintFunction>
): React.ReactNode | null => {
	const path = pathsByWeight.get(weight);
	if (!!path) return path(color);

	throw Error(
		`Unsupported icon weight: {${weight}}. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".`
	);
};
