import React from "react";
import { Scene } from "./Scene";
import { ThemeProvider } from "./ThemeContext";
// import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler"; // Your provided component
// import "./App.css"; // Make sure your global CSS for 'dark' class is set up

function App() {
	return (
		<div style={{ width: "100vw", height: "100vh", position: "relative" }}>
			<ThemeProvider>
				{/* Your AnimatedThemeToggler. Make sure its positioning is correct via className or parent styling. */}
				{/* <AnimatedThemeToggler className="fixed top-4 left-1/2 z-50 -translate-x-1/2" /> */}
				<Scene />
			</ThemeProvider>
		</div>
	);
}

export default App;
