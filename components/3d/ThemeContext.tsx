import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

// Define the shape of our theme context
interface ThemeContextType {
	theme: "light" | "dark";
	// The AnimatedThemeToggler handles the toggle logic, so we don't need a toggleTheme function here.
	// We'll expose a way to read the current state.
}

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props for the ThemeProvider
interface ThemeProviderProps {
	children: ReactNode;
}

// ThemeProvider component to wrap your application
export function ThemeProvider({ children }: ThemeProviderProps) {
	// Initialize theme based on the presence of 'dark' class on document.documentElement
	const [theme, setTheme] = useState<"light" | "dark">(
		typeof document !== "undefined" &&
			document.documentElement.classList.contains("dark")
			? "dark"
			: "light",
	);

	useEffect(() => {
		// This effect runs only on the client-side
		if (typeof document === "undefined") return;

		const htmlElement = document.documentElement;

		// Function to update theme state based on current class list
		const updateThemeState = () => {
			setTheme(htmlElement.classList.contains("dark") ? "dark" : "light");
		};

		// Create a MutationObserver to watch for changes to the 'class' attribute on <html>
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (
					mutation.type === "attributes" &&
					mutation.attributeName === "class"
				) {
					updateThemeState();
				}
			});
		});

		// Start observing the <html> element for attribute changes
		observer.observe(htmlElement, { attributes: true });

		// Initial update in case the class changes before the observer is attached
		updateThemeState();

		// Cleanup the observer when the component unmounts
		return () => observer.disconnect();
	}, []); // Run once on mount

	return (
		<ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
	);
}

// Custom hook to easily consume the theme context
export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
