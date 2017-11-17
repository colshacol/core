import mobx, { observable, action, computed, extendObservable } from 'mobx';
import protect from './protect';

export default ({ observables, actions, statics, getters }) => {
	return class _Store {
		actions = {};

		constructor() {
			this.__applyActions({ actions });
			this.__applyGetters({ getters });
			this.__applyStaticData({ statics });
			this.__applyObservableData({ observables });
		}

		__applyActions = ({ actions }) => {
			const store = this;
			Object.entries(actions).forEach(([name, func]) => {
				store.actions[name] = action(func(store));
			});
		};

		__applyGetters = ({ getters }) => {
			const store = this;
			Object.entries(getters).forEach(([name, getter]) => {
				Object.defineProperty(store, name, {
					get: function () {
						return getter(store);
					},
				});
			});
		};

		__applyStaticData = ({ statics }) => {
			const store = this;
			const staticsData = statics(store.props);
			Object.assign(store, staticsData);
		};

		__applyObservableData = ({ observables }) => {
			const store = this;
			const observablesData = observables(store.props);
			extendObservable(store, observablesData);
		};
	}
}