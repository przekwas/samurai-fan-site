import { GiShieldBash, GiShieldReflect, GiShieldBounces } from 'react-icons/gi';
import { useMusicPlayer } from '../../utils/useMusicPlayer';
import { PlayerControlsDiv, Marquee, MarqueeText, FlexedButtons, TrackButton } from './styled';

const PlayerControls = () => {
	const { currentTrackName, isPlaying, playNext, playPrev, togglePlay } = useMusicPlayer();

	return (
		<PlayerControlsDiv>
			<Marquee>
				{currentTrackName && isPlaying && <MarqueeText>{currentTrackName}</MarqueeText>}
			</Marquee>
			<FlexedButtons>
				<TrackButton reverse onClick={() => playPrev()}>
					<GiShieldBounces />
				</TrackButton>
				<TrackButton onClick={() => togglePlay()}>
					{isPlaying ? <GiShieldReflect /> : <GiShieldBash />}
				</TrackButton>
				<TrackButton onClick={() => playNext()}>
					<GiShieldBounces />
				</TrackButton>
			</FlexedButtons>
		</PlayerControlsDiv>
	);
};

export default PlayerControls;
