import React from "react";
interface BlurGradientContainerProps {
	children: React.ReactNode;
	className?: string;
}

const BlurGradientContainer = ({
	children,
	className = "",
}: BlurGradientContainerProps) => {
	return (
		<div className={`relative overflow-hidden ${className}`}>
			{/* Background content */}
			<div className="absolute inset-0">{children}</div>

			{/* Blur overlay with gradient fade */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Top 50% - Full blur */}
				<div
					className="absolute top-0 left-0 w-full h-1/2 backdrop-blur-xl"
					style={{
						maskImage: "linear-gradient(to bottom, black 0%, black 100%)",
						WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 100%)",
					}}
				/>

				{/* Bottom 50% - Gradient blur fade */}
				<div
					className="absolute top-1/2 left-0 w-full h-1/2 backdrop-blur-xl"
					style={{
						maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, black 0%, transparent 100%)",
					}}
				/>
			</div>

			{/* Content overlay (if you want content on top of the blur) */}
			<div className="relative z-10 pointer-events-auto">
				{/* Add any overlay content here */}
			</div>
		</div>
	);
};

// Demo component to showcase the effect
const Demo = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-3xl font-light text-slate-800 mb-8 text-center">
					Blur Gradient Container
				</h1>

				<BlurGradientContainer className="h-96 rounded-2xl border border-slate-200/50 shadow-xl">
					{/* Background content that will be blurred */}
					<div className="h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
						<div className="grid grid-cols-3 gap-4 h-full">
							{Array.from({ length: 12 }).map((_, i) => (
								<div
									key={i}
									className="bg-white/20 rounded-lg flex items-center justify-center text-white font-medium"
								>
									{i + 1}
								</div>
							))}
						</div>
					</div>
				</BlurGradientContainer>

				<p className="text-slate-600 text-center mt-6 font-light">
					The top 50% maintains full blur, while the bottom 50% gradually fades
					to clear
				</p>
			</div>
		</div>
	);
};

export default Demo;
