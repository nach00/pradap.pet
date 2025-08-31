import React from "react";

interface JellySquareProps {
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
	color?: "pink" | "blue" | "green" | "purple" | "amber";
}

export default function JellySquare({
	className = "",
	size = "md",
	color = "pink",
}: JellySquareProps) {
	const sizeClasses = {
		sm: "w-16 h-16",
		md: "w-24 h-24",
		lg: "w-32 h-32",
		xl: "w-48 h-48",
	};

	const colorClasses = {
		pink: "bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 shadow-pink-200/50",
		blue: "bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 shadow-blue-200/50",
		green:
			"bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-400 shadow-emerald-200/50",
		purple:
			"bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 shadow-purple-200/50",
		amber:
			"bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 shadow-amber-200/50",
	};

	return (
		<div
			className={`
        ${sizeClasses[size]}
        ${colorClasses[color]}
        rounded-3xl
        shadow-2xl
        transform
        transition-none
        hover:scale-95
        active:scale-90
        backdrop-blur-sm
        border
        border-white/30
        cursor-pointer
        relative
        overflow-hidden
        ${className}
      `}
			style={{
				animation: "jelly 3s ease-in-out infinite",
				filter:
					"drop-shadow(0 8px 32px rgba(0,0,0,0.15)) drop-shadow(0 2px 8px rgba(255,255,255,0.1))",
				transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.animation = "jiggleHover 0.6s ease-out";
				setTimeout(() => {
					e.currentTarget.style.animation = "jelly 3s ease-in-out infinite";
				}, 600);
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.animation =
					"retract 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
				setTimeout(() => {
					e.currentTarget.style.animation = "jelly 3s ease-in-out infinite";
				}, 800);
			}}
			onMouseDown={(e) => {
				e.currentTarget.style.animation =
					"bigSquish 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
				setTimeout(() => {
					e.currentTarget.style.animation = "jelly 3s ease-in-out infinite";
				}, 400);
			}}
		>
			{/* Primary inner highlight for glass/jelly effect */}
			<div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/40 to-transparent" />

			{/* Strong glossy highlight on top-left */}
			<div className="absolute top-2 left-2 w-1/3 h-1/3 rounded-full bg-gradient-radial from-white/60 via-white/30 to-transparent blur-sm" />

			{/* Secondary highlight streak */}
			<div className="absolute top-1 left-1 right-1 h-1/4 rounded-t-2xl bg-gradient-to-b from-white/50 to-transparent" />

			{/* Subtle inner glow */}
			<div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/15 to-white/30" />

			{/* Edge rim highlight */}
			<div
				className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent"
				style={{
					background: `linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 100%)`,
				}}
			/>

			{/* Glossy reflection stripe */}
			<div className="absolute top-3 left-3 right-8 h-1 bg-white/70 rounded-full blur-[1px] transform -rotate-12" />

			<style jsx>{`
        @keyframes jelly {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            border-radius: 1.5rem;
          }
          25% {
            transform: scale(1.02) rotate(0.5deg);
            border-radius: 1.5rem 1.8rem 1.5rem 1.8rem;
          }
          50% {
            transform: scale(0.98) rotate(0deg);
            border-radius: 1.8rem 1.5rem 1.8rem 1.5rem;
          }
          75% {
            transform: scale(1.01) rotate(-0.5deg);
            border-radius: 1.5rem 1.8rem 1.5rem 1.8rem;
          }
        }

        @keyframes jiggleHover {
          0% {
            transform: scale(1) rotate(0deg) skew(0deg);
            border-radius: 1.5rem;
          }
          15% {
            transform: scale(0.98) rotate(-1deg) skew(1deg);
            border-radius: 1.8rem 1.2rem 1.6rem 1.4rem;
          }
          30% {
            transform: scale(1.03) rotate(1.5deg) skew(-0.5deg);
            border-radius: 1.2rem 1.9rem 1.3rem 1.7rem;
          }
          45% {
            transform: scale(0.96) rotate(-0.8deg) skew(1.2deg);
            border-radius: 1.7rem 1.3rem 1.8rem 1.1rem;
          }
          60% {
            transform: scale(1.04) rotate(1.2deg) skew(-0.8deg);
            border-radius: 1.1rem 1.8rem 1.2rem 1.9rem;
          }
          75% {
            transform: scale(0.97) rotate(-1.3deg) skew(0.6deg);
            border-radius: 1.6rem 1.4rem 1.7rem 1.2rem;
          }
          90% {
            transform: scale(1.02) rotate(0.7deg) skew(-0.3deg);
            border-radius: 1.3rem 1.7rem 1.4rem 1.6rem;
          }
          100% {
            transform: scale(1) rotate(0deg) skew(0deg);
            border-radius: 1.5rem;
          }
        }

        @keyframes retract {
          0% {
            transform: scale(1) rotate(0deg) skew(0deg);
            border-radius: 1.5rem;
          }
          20% {
            transform: scale(0.92) rotate(-2deg) skew(2deg);
            border-radius: 2rem 1rem 1.8rem 1.2rem;
          }
          40% {
            transform: scale(1.08) rotate(1deg) skew(-1deg);
            border-radius: 1rem 2rem 1.2rem 1.8rem;
          }
          60% {
            transform: scale(0.96) rotate(-0.5deg) skew(0.5deg);
            border-radius: 1.7rem 1.3rem 1.9rem 1.1rem;
          }
          80% {
            transform: scale(1.03) rotate(0.2deg) skew(-0.2deg);
            border-radius: 1.3rem 1.7rem 1.1rem 1.9rem;
          }
          100% {
            transform: scale(1) rotate(0deg) skew(0deg);
            border-radius: 1.5rem;
          }
        }

        @keyframes bigSquish {
          0% {
            transform: scale(1) scaleY(1) rotate(0deg) skew(0deg);
            border-radius: 1.5rem;
          }
          30% {
            transform: scale(0.8) scaleY(0.6) rotate(-1deg) skew(2deg);
            border-radius: 2.5rem 2.5rem 0.5rem 0.5rem;
          }
          60% {
            transform: scale(1.15) scaleY(1.25) rotate(1deg) skew(-1deg);
            border-radius: 0.8rem 0.8rem 2.2rem 2.2rem;
          }
          80% {
            transform: scale(0.95) scaleY(0.9) rotate(-0.5deg) skew(0.5deg);
            border-radius: 1.8rem 1.8rem 1.2rem 1.2rem;
          }
          100% {
            transform: scale(1) scaleY(1) rotate(0deg) skew(0deg);
            border-radius: 1.5rem;
          }
        }
      `}</style>
		</div>
	);
}
