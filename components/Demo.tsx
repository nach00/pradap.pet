import React, { useState, useRef, useLayoutEffect } from "react";

// The main App component that renders the dynamic grid layout.
export default function Demo() {
	// State to hold the calculated size for the square corner.
	const [squareSize, setSquareSize] = useState(0);

	// A ref to attach to the blue div to measure its height.
	// We specify the element type for TypeScript.
	const blueDivRef = useRef<HTMLDivElement>(null);

	// useLayoutEffect is used to perform DOM measurements and mutations
	// synchronously after the component has rendered but before the browser paints.
	// This prevents any visual flickering that might occur with useEffect.
	useLayoutEffect(() => {
		const adjustSize = () => {
			// Check if the ref is attached to an element.
			if (blueDivRef.current) {
				// Measure the scroll height of the blue content div.
				const headerHeight = blueDivRef.current.scrollHeight;
				// Update the state with the measured height.
				setSquareSize(headerHeight);
			}
		};

		// Call the function initially to set the size.
		adjustSize();

		// Add an event listener to recalculate the size on window resize.
		window.addEventListener("resize", adjustSize);

		// Cleanup function: remove the event listener when the component unmounts.
		return () => {
			window.removeEventListener("resize", adjustSize);
		};
	}, []); // The empty dependency array ensures this effect runs only once on mount.

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900 font-sans">
			{/* The main container for the grid.
        - `grid`: Applies display: grid.
        - `min-h-[80vh]`: Sets a minimum height of 80% of the viewport height.
        - `w-full max-w-4xl`: Makes the container responsive.
        - `bg-black`: Sets the background color for the grid container itself.
        - `gap-1`: Sets the gap between grid items (0.25rem).
        - The `style` attribute dynamically sets the grid template columns and rows
          based on the measured `squareSize`.
      */}
			<div
				className="grid w-full max-w-4xl min-h-[80vh] bg-black gap-1"
				style={{
					gridTemplateColumns: `${squareSize}px 1fr`,
					gridTemplateRows: `${squareSize}px 1fr`,
				}}
			>
				{/* Top-left red square */}
				<div className="bg-red-500 rounded-tl-lg"></div>

				{/* Top-right blue content area. The ref is attached here. */}
				<div
					ref={blueDivRef}
					className="bg-blue-500 text-white p-6 rounded-tr-lg overflow-auto"
				>
					<h2 className="text-xl font-bold mb-2">Dynamic Content Area</h2>
					<p className="text-base">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						bibendum sapien erat, at pellentesque ex hendrerit ut. Maecenas
						rutrum lobortis lacinia. Integer venenatis leo ut mauris euismod
						dapibus eget sed erat. Praesent ut viverra sem, in dapibus elit.
						Vivamus velit augue, cursus non leo a, sollicitudin suscipit sapien.
						Praesent ac venenatis mi, a lobortis enim. Phasellus ac tristique
						diam, vel viverra felis.
					</p>
				</div>

				{/* Bottom-left magenta (fuchsia) square */}
				<div className="bg-fuchsia-500 rounded-bl-lg"></div>

				{/* Bottom-right yellow square */}
				<div className="bg-yellow-500 rounded-br-lg"></div>
			</div>
		</div>
	);
}
