"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";

interface LoadingContextType {
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
	progress: number;
	setProgress: (progress: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
	const context = useContext(LoadingContext);
	if (context === undefined) {
		throw new Error("useLoading must be used within a LoadingProvider");
	}
	return context;
}

interface LoadingProviderProps {
	children: ReactNode;
	initialLoading?: boolean;
	autoHideDelay?: number;
}

export function LoadingProvider({
	children,
	initialLoading = true,
	autoHideDelay = 2000,
}: LoadingProviderProps) {
	const [isLoading, setIsLoading] = useState(initialLoading);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (initialLoading) {
			// Simulate initial page load
			const timer = setTimeout(() => {
				setIsLoading(false);
			}, autoHideDelay);

			return () => clearTimeout(timer);
		}
	}, [initialLoading, autoHideDelay]);

	// Listen for Next.js route changes to show loading
	useEffect(() => {
		const handleRouteChangeStart = () => {
			setIsLoading(true);
			setProgress(0);
		};

		const handleRouteChangeComplete = () => {
			setProgress(100);
			setTimeout(() => {
				setIsLoading(false);
			}, 300);
		};

		return () => {};
	}, []);

	const contextValue: LoadingContextType = {
		isLoading,
		setLoading: setIsLoading,
		progress,
		setProgress,
	};

	return (
		<LoadingContext.Provider value={contextValue}>
			{children}
		</LoadingContext.Provider>
	);
}

// Hook for manual loading control
export function useLoadingControl() {
	const { setLoading, setProgress } = useLoading();

	const startLoading = () => {
		setLoading(true);
		setProgress(0);
	};

	const updateProgress = (value: number) => {
		setProgress(Math.min(Math.max(value, 0), 100));
	};

	const finishLoading = () => {
		setProgress(100);
		setTimeout(() => {
			setLoading(false);
		}, 300);
	};

	return {
		startLoading,
		updateProgress,
		finishLoading,
	};
}
