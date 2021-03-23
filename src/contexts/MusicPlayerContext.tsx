import { useState, createContext } from 'react';
const BlackDog = require('../assets/music/samurai-black_dog.mp3');
const ChippinIn = require('../assets/music/samurai-chippin_in.mp3');
const NeverFadeAway = require('../assets/music/samurai-never_fade_away.mp3');
const TheBalladOfBuckRavers = require('../assets/music/samurai-the_ballad_of_buck_ravers.mp3');

export const MusicPlayerContext = createContext<any>([{}, () => {}]);

export interface MusicContextState {
	audioPlayer: HTMLAudioElement;
	isPlaying: boolean;
	currentTrackIndex: number;
	tracks: {
		name: string;
		file: any;
	}[];
}

const MusicPlayerProvider = ({ children }: MusicPlayerProviderProps) => {
	const [state, setState] = useState<MusicContextState>({
		audioPlayer: new Audio(),
		isPlaying: false,
		currentTrackIndex: 0,
		tracks: [
			{
				name: 'Black Dog',
				file: BlackDog.default
			},
			{
				name: "Chippin' in",
				file: ChippinIn.default
			},
			{
				name: 'Never Fade Away',
				file: NeverFadeAway.default
			},
			{
				name: 'The Ballad of Buck Ravers',
				file: TheBalladOfBuckRavers.default
			}
		]
	});

	return (
		<MusicPlayerContext.Provider value={[state, setState]}>
			{children}
		</MusicPlayerContext.Provider>
	);
};

interface MusicPlayerProviderProps {
	children: React.ReactNode;
}

export default MusicPlayerProvider;
