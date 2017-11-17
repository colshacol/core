import * as React from 'react';
import { observer, inject } from 'mobx-react';

import PlayIcon from '@app/assets/play-button.svg';
import PauseIcon from '@app/assets/pause.svg';
import StopIcon from '@app/assets/stop.svg';
import ReplayIcon from '@app/assets/replay.svg';
import BookmarkIcon from '@app/assets/agenda.svg';
import RecordStoppedIcon from '@app/assets/record-stopped.svg';
import RecordPlayingIcon from '@app/assets/record-playing.svg';
import SaveIcon from '@app/assets/save.svg';
import './styles/ActionBar.css';

@inject('$tests')
@observer
export default class ActionBar extends React.Component {
	render({ props, state } = this) {
		const { toggleRecording } = props.$tests.actions;

		return (
			<div styleName='ActionBar'>
				<div styleName='bar'>
					<div styleName='left'>
						<Choose>
							<When condition={!props.$tests.recording}>
								<RecordStoppedIcon styleName='action' width={32} height={32} onClick={toggleRecording} />
							</When>
							<Otherwise>
								<RecordPlayingIcon styleName='action recording' width={38} height={38} onClick={toggleRecording} />
							</Otherwise>
						</Choose>
						<PlayIcon styleName='action' width={32} height={32} />
						<PauseIcon styleName='action' width={32} height={32} />
						<StopIcon styleName='action' width={32} height={32} />
						<ReplayIcon styleName='action' width={32} height={32} />
					</div>
					<div styleName='right'>
						<BookmarkIcon styleName='action' width={32} height={32} fillOpacity={0.4} />
						<SaveIcon styleName='action' width={32} height={32} fillOpacity={0.4} />
					</div>
				</div>
			</div>
		)
	}
}