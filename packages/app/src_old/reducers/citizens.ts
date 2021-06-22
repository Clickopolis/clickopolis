import { Action, ADD_CITIZEN, REMOVE_CITIZEN } from '../actions';
import { citizens as defaults } from 'data/citizens';

export function ruler(state = defaults.get('ruler'), action: any) {
	switch (action.type) {
		default:
			return state;
	}
}

export function farmer(
	state = defaults.get('farmer'),
	action: Action<ADD_CITIZEN | REMOVE_CITIZEN>
) {
	const amount = parseInt(action.amount);
	switch (action.type) {
		case ADD_CITIZEN:
			return action.citizen === 'farmer' ? { ...state, amount: state.amount + amount } : state;
		case REMOVE_CITIZEN:
			return action.citizen === 'farmer'
				? { ...state, amount: Math.max(state.amount + -amount, 0) }
				: state;
		default:
			return state;
	}
}

export function miner(state = defaults.get('miner'), action: Action<ADD_CITIZEN | REMOVE_CITIZEN>) {
	const amount = parseInt(action.amount);
	switch (action.type) {
		case ADD_CITIZEN:
			return action.citizen === 'miner' ? { ...state, amount: state.amount + amount } : state;
		case REMOVE_CITIZEN:
			return action.citizen === 'miner'
				? { ...state, amount: Math.max(state.amount + -amount, 0) }
				: state;
		default:
			return state;
	}
}

export function soldier(
	state = defaults.get('soldier'),
	action: Action<ADD_CITIZEN | REMOVE_CITIZEN>
) {
	const amount = parseInt(action.amount);
	switch (action.type) {
		case ADD_CITIZEN:
			return action.citizen === 'soldier' ? { ...state, amount: state.amount + amount } : state;
		case REMOVE_CITIZEN:
			return action.citizen === 'soldier'
				? { ...state, amount: Math.max(state.amount + -amount, 0) }
				: state;
		default:
			return state;
	}
}

export function merchant(
	state = defaults.get('merchant'),
	action: Action<ADD_CITIZEN | REMOVE_CITIZEN>
) {
	const amount = parseInt(action.amount);
	switch (action.type) {
		case ADD_CITIZEN:
			return action.citizen === 'merchant' ? { ...state, amount: state.amount + amount } : state;
		case REMOVE_CITIZEN:
			return action.citizen === 'merchant'
				? { ...state, amount: Math.max(state.amount + -amount, 0) }
				: state;
		default:
			return state;
	}
}

export function doctor(
	state = defaults.get('doctor'),
	action: Action<ADD_CITIZEN | REMOVE_CITIZEN>
) {
	const amount = parseInt(action.amount);
	switch (action.type) {
		case ADD_CITIZEN:
			return action.citizen === 'doctor' ? { ...state, amount: state.amount + amount } : state;
		case REMOVE_CITIZEN:
			return action.citizen === 'doctor'
				? { ...state, amount: Math.max(state.amount + -amount, 0) }
				: state;
		default:
			return state;
	}
}
