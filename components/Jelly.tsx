"use client";
import React, { useMemo, useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface JellyBarProps {
	className?: string;
	color?: string;
	shadowColor?: string;
	highlightColor?: string;
	children?: React.ReactNode;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const JellyElement = styled.div<{
	$color: string;
	$shadowColor: string;
	$highlightColor: string;
	$jellyVariables: ReturnType<typeof css>;
}>`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  box-shadow:
    0 80px 200px ${(props) => props.$shadowColor}4D,
    0 40px 120px ${(props) => props.$shadowColor}40,
    0 20px 60px ${(props) => props.$shadowColor}33,
    0 10px 30px ${(props) => props.$shadowColor}26,
    0 4px 12px ${(props) => props.$shadowColor}1A,
    0 1px 3px ${(props) => props.$shadowColor}14,
    inset 0 2px 0 ${(props) => props.$highlightColor}26,
    inset 0 1px 0 ${(props) => props.$highlightColor}1A,
    inset 0 -2px 0 ${(props) => props.$shadowColor}14,
    inset 0 -1px 0 ${(props) => props.$shadowColor}0A;
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  border: 1px solid ${(props) => props.$highlightColor}14;
  background-color: ${(props) => props.$color};
  background-image: linear-gradient(
    180deg,
    color-mix(in srgb, ${(props) => props.$color} 92%, white) 0%,
    color-mix(in srgb, ${(props) => props.$color} 98%, white) 25%,
    ${(props) => props.$color} 50%,
    color-mix(in srgb, ${(props) => props.$color} 95%, black) 75%,
    color-mix(in srgb, ${(props) => props.$color} 85%, black) 100%
  );
  opacity: 0.96;
  filter: drop-shadow(0 50px 100px ${(props) => props.$shadowColor}4D)
    drop-shadow(0 25px 60px ${(props) => props.$shadowColor}33)
    drop-shadow(0 12px 30px ${(props) => props.$shadowColor}26);
  ${(props) => props.$jellyVariables}

  animation: subtleBreathing 5s ease-in-out infinite;

  @keyframes subtleBreathing {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(var(--breathing-scale));
    }
  }

  @keyframes gentleHover {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(var(--hover-scale, 0.985));
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes elegantRetract {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(var(--retract-scale, 0.97));
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes refinedPress {
    0% {
      transform: scale(1) scaleY(1);
    }
    40% {
      transform: scale(0.96) scaleY(var(--press-scale, 0.85));
    }
    70% {
      transform: scale(1.02) scaleY(var(--bounce-scale, 1.08));
    }
    100% {
      transform: scale(1) scaleY(1);
    }
  }

  &:hover {
    transform: scale(0.99);
    box-shadow:
      0 120px 280px ${(props) => props.$shadowColor}66,
      0 60px 180px ${(props) => props.$shadowColor}4D,
      0 30px 90px ${(props) => props.$shadowColor}40,
      0 15px 45px ${(props) => props.$shadowColor}33,
      0 6px 18px ${(props) => props.$shadowColor}26,
      0 2px 6px ${(props) => props.$shadowColor}1A,
      inset 0 3px 0 ${(props) => props.$highlightColor}33,
      inset 0 2px 0 ${(props) => props.$highlightColor}26,
      inset 0 -3px 0 ${(props) => props.$shadowColor}1A,
      inset 0 -2px 0 ${(props) => props.$shadowColor}14;
    filter: drop-shadow(0 80px 160px ${(props) => props.$shadowColor}66)
      drop-shadow(0 40px 100px ${(props) => props.$shadowColor}4D)
      drop-shadow(0 20px 50px ${(props) => props.$shadowColor}33);
  }

  &:active {
    transform: scale(0.97);
  }
`;

const PrimaryHighlight = styled.div<{ $highlightColor: string }>`
  position: absolute;
  top: 3%;
  left: 6%;
  right: 6%;
  height: 30%;
  border-radius: 9999px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    ${(props) => props.$highlightColor}33 0%,
    ${(props) => props.$highlightColor}1A 40%,
    ${(props) => props.$highlightColor}0D 70%,
    transparent 100%
  );
`;

const GlossySheen = styled.div<{ $highlightColor: string }>`
  position: absolute;
  top: 6%;
  left: 10%;
  right: 30%;
  height: 20%;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(1.5px);
  background: linear-gradient(
    90deg,
    ${(props) => props.$highlightColor}26 0%,
    ${(props) => props.$highlightColor}1A 50%,
    ${(props) => props.$highlightColor}0D 80%,
    transparent 100%
  );
`;

const MicroReflection = styled.div<{ $highlightColor: string }>`
  position: absolute;
  top: 8%;
  left: 15%;
  right: 60%;
  height: 8%;
  border-radius: 9999px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    ${(props) => props.$highlightColor}40 0%,
    ${(props) => props.$highlightColor}26 40%,
    transparent 100%
  );
`;

const SpecularHighlight = styled.div<{ $highlightColor: string }>`
  position: absolute;
  top: 12%;
  left: 18%;
  width: 8%;
  height: 6%;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(0.5px);
  background: radial-gradient(
    circle,
    ${(props) => props.$highlightColor}4D 0%,
    ${(props) => props.$highlightColor}26 60%,
    transparent 100%
  );
`;

const EdgeDefinition = styled.div<{
	$shadowColor: string;
	$highlightColor: string;
}>`
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    ${(props) => props.$highlightColor}1A 0%,
    transparent 20%,
    transparent 80%,
    ${(props) => props.$shadowColor}14 100%
  );
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  pointer-events: none;

  /* Ensure text is readable over the jelly background */
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
`;

const DepthShadow = styled.div<{ $shadowColor: string }>`
  position: absolute;
  inset: 2px;
  border-radius: 9999px;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 60%,
    ${(props) => props.$shadowColor}0A 85%,
    ${(props) => props.$shadowColor}14 100%
  );
`;

export default function JellyBar({
	className = "",
	color = "var(--accent-9)",
	shadowColor = "rgba(0, 0, 0, 1)",
	highlightColor = "rgba(255, 255, 255, 1)",
	children,
}: JellyBarProps) {
	// Generate subtle, elegant random values for this instance (client-side only)
	const [jellyVariables, setJellyVariables] = useState(css`
    --breathing-scale: 1;
  `);

	useEffect(() => {
		const breathingScale = 1 + (Math.random() * 0.003 - 0.0015); // Even more subtle: ±0.15%

		setJellyVariables(css`
      --breathing-scale: ${breathingScale};
    `);
	}, []);

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		const randomSeed = Math.random();
		const scaleVariation = 0.988 + randomSeed * 0.008; // More subtle: 0.988-0.996
		const duration = 0.6 + randomSeed * 0.2;

		const target = e.currentTarget;
		target.style.setProperty("--hover-scale", scaleVariation.toString());

		target.style.animation = `gentleHover ${duration}s ease-out`;
		setTimeout(() => {
			target.style.animation = "subtleBreathing 5s ease-in-out infinite";
		}, duration * 1000);
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const randomSeed = Math.random();
		const scaleVariation = 0.975 + randomSeed * 0.015; // More subtle: 0.975-0.99
		const duration = 0.7 + randomSeed * 0.2;

		const target = e.currentTarget;
		target.style.setProperty("--retract-scale", scaleVariation.toString());

		target.style.animation = `elegantRetract ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
		setTimeout(() => {
			target.style.animation = "subtleBreathing 5s ease-in-out infinite";
		}, duration * 1000);
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		const randomSeed = Math.random();
		const pressIntensity = 0.88 + randomSeed * 0.08; // Less dramatic: 0.88-0.96
		const bounceHeight = 1.03 + randomSeed * 0.04; // Gentler bounce: 1.03-1.07
		const duration = 0.45 + randomSeed * 0.1;

		const target = e.currentTarget;
		target.style.setProperty("--press-scale", pressIntensity.toString());
		target.style.setProperty("--bounce-scale", bounceHeight.toString());

		target.style.animation = `refinedPress ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
		setTimeout(() => {
			target.style.animation = "subtleBreathing 5s ease-in-out infinite";
		}, duration * 1000);
	};

	return (
		<Container className={className}>
			<JellyElement
				$color={color}
				$shadowColor={shadowColor}
				$highlightColor={highlightColor}
				$jellyVariables={jellyVariables}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onMouseDown={handleMouseDown}
			>
				<PrimaryHighlight $highlightColor={highlightColor} />
				<GlossySheen $highlightColor={highlightColor} />
				<MicroReflection $highlightColor={highlightColor} />
				<SpecularHighlight $highlightColor={highlightColor} />
				<EdgeDefinition
					$shadowColor={shadowColor}
					$highlightColor={highlightColor}
				/>
				<DepthShadow $shadowColor={shadowColor} />
				{children && <ContentWrapper>{children}</ContentWrapper>}
			</JellyElement>
		</Container>
	);
}
