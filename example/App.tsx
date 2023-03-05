import { useState, useCallback } from "react";

import * as Icons from "../src";
import { IconContext } from "../src";
import type { IconWeight, Icon } from "../src";

const isIcon = (candidate: any): candidate is Icons.Icon =>
	candidate && "displayName" in candidate && candidate["displayName"] !== Icons.IconBase.displayName;

const allIcons: Icon[] = Object.entries(Icons)
	.filter(([name, module]) => isIcon(module))
	.map(([_, module]) => module as Icon);

const App = () => {
	const [color, setColor] = useState<string>("crimson");
	const [weight, setWeight] = useState<IconWeight>("regular");

	const onHeartClick = useCallback(() => {
		setColor(
			`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
		);
	}, [setColor]);

	return (
		<IconContext.Provider
			value={{
				color: "currentColor",
				size: 48,
				mirrored: false,
				weight: "regular",
			}}
		>
			<div
				style={{
					color: "white",
					textAlign: "center",
				}}
			>
				<span>{allIcons.length} icons</span>
				<p
					style={{
						verticalAlign: "middle",
						cursor: "pointer",
						userSelect: "none",
					}}
					onClick={onHeartClick}
				>
					Made with{" "}
					<Icons.AddressBook
						size={32}
						color={color}
						style={{ verticalAlign: "middle" }}
						weight="fill"
						alt="heart symbol"
					/>{" "}
					from Aarron Tame
				</p>
				<div>
					<Icons.AddressBook className="loader" size={32} />
				</div>
				<Icons.AddressBook
					style={{ cursor: "pointer" }}
					color="darkorange"
					size={32}
					weight="duotone"
					onClick={() => setWeight("duotone")}
				/>
				<Icons.AddressBook
					style={{ cursor: "pointer" }}
					color="darkmagenta"
					size={32}
					weight="fill"
					onClick={() => setWeight("fill")}
				/>
				<Icons.AddressBook
					style={{ cursor: "pointer" }}
					color="royalblue"
					size={32}
					weight="bold"
					onClick={() => setWeight("bold")}
				/>
				<Icons.AddressBook
					style={{ cursor: "pointer" }}
					size={32}
					weight="regular"
					onClick={() => setWeight("regular")}
				>
					<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
					<animateTransform
						attributeName="transform"
						attributeType="XML"
						type="rotate"
						dur="5s"
						from="0 0 0"
						to="360 0 0"
						repeatCount="indefinite"
					/>
					<title>I have children!</title>
				</Icons.AddressBook>
				<Icons.AddressBook
					style={{ cursor: "pointer" }}
					color="crimson"
					size={32}
					weight="light"
					onClick={() => setWeight("light")}
				/>
				<Icons.AddressBook
					style={{ cursor: "pointer" }}
					color="teal"
					size={32}
					weight="thin"
					onClick={() => setWeight("thin")}
				/>
				{allIcons.map((I) => (
					<div className="row" key={I.displayName}>
						<span className="name">{I.displayName}</span>
						<div className="icons" title={I.displayName}>
							<I size={24} />
							<I mirrored color={color} />
							<I mirrored color={color} weight={weight} />
							<I weight={weight} />
							<I weight="thin" color={color} />
							<I weight="light" color={color} />
							<I weight="regular" color={color} />
							<I weight="bold" color={color} />
							<I weight="fill" color={color} />
							<I weight="duotone" color={color} />
						</div>
					</div>
				))}
			</div>
		</IconContext.Provider>
	);
};

export default App;
