import styled from 'styled-components';

export const RootLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	min-height: 100vh;
	color: gainsboro;

	background: radial-gradient(circle, rgba(0, 0, 0, 1) 46%, rgba(170, 11, 11, 1) 100%);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`;
