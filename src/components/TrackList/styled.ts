import styled from 'styled-components';

export const TrackDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 25rem;
	margin-bottom: 0.25rem;
`;

export const TrackButton = styled.button`
	background: gainsboro;
	color: black;
	border: 0.15rem solid darkred;
	border-radius: 10%;
	padding: 0.5rem 1rem;
	font-size: 1.75rem;
	text-align: center;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TrackName = styled.div`
	font-size: 1.25rem;
`;