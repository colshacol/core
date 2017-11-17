import { Store } from '@app/utilities/store';

import * as actions from './actions';
import * as getters from './getters';
import statics from './statics';
import observables from './observables';

export default Store({
	actions,
	getters,
	statics,
	observables
});

