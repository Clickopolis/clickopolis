import { onDestroy } from 'svelte';

export function onInterval(callback: Function, milliseconds: number) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
