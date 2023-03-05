import * as React from "react";
import { IconContext, IconWeight } from "./";
import type { IconProps } from "./";

interface IconBaseProps extends IconProps {
	weights: Map<IconWeight, React.ReactElement>;
}

const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
	const { alt, color, size, weight, mirrored, children, weights, ...restProps } = props;

	const {
		color: contextColor = "currentColor",
		size: contextSize,
		weight: contextWeight = "regular",
		mirrored: contextMirrored = false,
		...restContext
	} = React.useContext(IconContext);

	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={size ?? contextSize}
			height={size ?? contextSize}
			fill={color ?? contextColor}
			viewBox="0 0 256 256"
			transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
			data-weight={weight ?? contextWeight}
			{...restContext}
			{...restProps}
		>
			{!!alt && <title>{alt}</title>}
			{children}
			{weights.get(weight ?? contextWeight)}
		</svg>
	);
});

IconBase.displayName = "IconBase";

export { IconBase };
