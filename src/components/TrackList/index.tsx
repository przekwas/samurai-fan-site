import { useMusicPlayer } from '../../utils/useMusicPlayer';
import { GiShieldBash, GiShieldReflect } from 'react-icons/gi';
import { TrackDiv, TrackButton, TrackName } from './styled';

const TrackList = () => {
	const { trackList, isPlaying, currentTrackName, playTrack } = useMusicPlayer();

	return (
		<>
			{trackList.map((track, index) => (
				<TrackDiv key={index}>
					<TrackButton onClick={() => playTrack(index)}>
						{currentTrackName === track.name && isPlaying ? (
							<GiShieldReflect />
						) : (
							<GiShieldBash />
						)}
					</TrackButton>
					<TrackName>{track.name}</TrackName>
				</TrackDiv>
			))}
		</>
	);
};

export default TrackList;
