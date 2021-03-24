import styled from 'styled-components';
import { screens } from '../../utils/styled-breakpoints';

export const Logo = styled.img`
	width: 10rem;

	@media ${screens.md} {
		width: 25rem;
	}
`;

export const Greeting = styled.p`
	max-width: 25rem;
	text-align: justify;
`;