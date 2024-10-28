export interface EventEntity {
	eventName: string;
	eventDate: Date;
	totalHutang: number;
	id: string;
}

export interface EventModel {
	event_name: string;
	created_at: Date;
	total: number;
	id: string;
}

export namespace EventEntity {
	export function fromJson(json: EventModel): EventEntity {
		return {
			eventDate: json.created_at,
			eventName: json.event_name,
			totalHutang: json.total,
			id: json.id
		};
	}
}
