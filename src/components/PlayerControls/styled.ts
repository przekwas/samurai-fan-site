import styled from 'styled-components';

export const PlayerControlsDiv = styled.div`
	margin-top: 1rem;
	width: 100%;
	max-width: 25rem;
`;

export const Marquee = styled.div`
	height: 2rem;
	width: 100%;
	max-width: 25rem;
	overflow: hidden;
	position: relative;
`;

export const MarqueeText = styled.p`
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
	position: absolute;
	text-align: center;
	transform: translateX(100%);
	animation: scroll-left 10s linear infinite;

	@keyframes scroll-left {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
`;

export const FlexedButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 25rem;
`;

interface TrackButtonProps {
	reverse?: boolean;
}
export const TrackButton = styled.button`
	background: gainsboro;
	color: black;
	border: 0.15rem solid darkred;
	border-radius: 10%;
	padding: 0.5rem 1rem;
	font-size: 2rem;
	text-align: center;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	${(props: TrackButtonProps) => props.reverse && `transform: scaleX(-1)`}
`;