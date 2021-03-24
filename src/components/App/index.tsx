import MusicPlayerProvider from '../../contexts/MusicPlayerContext';
import { RootLayout } from './styled';
import GlobalStyles from '../../utils/global-styles';
import Header from '../Header';
import PlayerControls from '../PlayerControls';
import TrackList from '../TrackList';

function App() {
	return (
		<>
			<GlobalStyles />
			<MusicPlayerProvider>
				<RootLayout>
					<Header />
					<TrackList />
					<PlayerControls />
				</RootLayout>
			</MusicPlayerProvider>
		</>
	);
}

export default App;
