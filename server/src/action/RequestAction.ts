abstract class RequestAction {

	abstract doAction(params: any): void;
	action = (request: string) => {
		let data: any;
		try {
			data = JSON.parse(request);
		}
		catch (e) {
			data = request;
		}
		this.doAction(data);
	}

}

export default RequestAction;
