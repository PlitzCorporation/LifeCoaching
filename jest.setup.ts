import '@testing-library/jest-dom';

type MessageHandler = (msg: string) => void;

class Worker {
	url: string;
	onmessage: MessageHandler;
	constructor(stringUrl: string) {
		this.url = stringUrl;
		this.onmessage = () => {};
	}
	postMessage(msg: string): void {
		this.onmessage(msg);
	}

	terminate() {}
}

Object.defineProperty(window, 'Worker', {
	writable: true,
	value: Worker,
});
