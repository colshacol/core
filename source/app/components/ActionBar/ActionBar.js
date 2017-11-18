import * as React from 'react';
import { observer, inject } from 'mobx-react';

import PauseIcon from '@app/assets/pause.svg';
import StopIcon from '@app/assets/stop.svg';
import ReplayIcon from '@app/assets/replay.svg';
import BookmarkIcon from '@app/assets/agenda.svg';
import * as Icons from '@app/components/Icons';
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
								<Icons.Record
									styleName='action'
									width="32px"
									height="32px"
									onClick={toggleRecording}
								/>
							</When>
							<Otherwise>
								<Icons.Record
									styleName='action recording'
									width="32px"
									height="32px"
									gradient='red'
									onClick={toggleRecording}
								/>
							</Otherwise>
						</Choose>
						<Icons.Play styleName='action' width="32px" height="32px" gradient='red' />
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