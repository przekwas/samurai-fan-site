import { useContext } from 'react';
import { MusicPlayerContext, MusicContextState } from '../contexts/MusicPlayerContext';

export const useMusicPlayer = () => {
	const [state, setState] = useContext<
		[MusicContextState, React.Dispatch<React.SetStateAction<MusicContextState>>]
	>(MusicPlayerContext);

	function playTrack(index: number) {
		if (index === state.currentTrackIndex) {
			togglePlay();
		} else {
			state.audioPlayer.pause();
			state.audioPlayer = new Audio(state.tracks[index].file);
			state.audioPlayer.play();
			// state.audioPlayer.volume = 0.2;
			setState(state => ({
				...state,
				currentTrackIndex: index,
				isPlaying: true
			}));
		}
	}

	function togglePlay() {
		if (state.isPlaying) {
			state.audioPlayer.pause();
		} else {
			state.audioPlayer.play();
			// state.audioPlayer.volume = 0.2;
		}
		setState(state => ({
			...state,
			isPlaying: !state.isPlaying
		}));
	}

	function playPrev() {
		const newIndex =
			(((state.currentTrackIndex - 1) % state.tracks.length) + state.tracks.length) %
			state.tracks.length;
		playTrack(newIndex);
	}

	function playNext() {
		const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
		playTrack(newIndex);
	}

	return {
		playTrack,
		togglePlay,
		playPrev,
		playNext,
		trackList: state.tracks,
		isPlaying: state.isPlaying,
		currentTrackName: state.tracks[state.currentTrackIndex].name
	};
};
