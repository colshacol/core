import mobx, { observable, action, computed, extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import protect from './protect';

export default ({ statics, observables, actions, getters }) => Component => {
	return @observer class _Model extends React.Component {
		__actions = {};

		constructor(props) {
			super(props);
			this.__applyActions({ actions });
			this.__applyGetters({ getters });
			this.__applyStaticData({ statics });
			this.__applyObservableData({ observables });
		}

		__applyActions = ({ actions }) => {
			const store = this;
			Object.entries(actions).forEach(([name, func]) => {
				store.__actions[name] = action(func(store));
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
			store.staticsKeys = Object.keys(staticsData);
		};

		__applyObservableData = ({ observables }) => {
			const store = this;
			const observablesData = observables(store.props);
			extendObservable(store, observablesData);
			store.observablesKeys = Object.keys(observablesData);
		};

		get __renderData() {
			const keys = [...this.staticsKeys, ...this.observablesKeys];
			return keys.reduce((final, key) => {
				final[key] = this[key];
				return final;
			}, {});
		}
	};
};
