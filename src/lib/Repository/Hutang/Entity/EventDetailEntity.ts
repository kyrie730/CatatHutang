import type { EventEntity, EventModel } from './EventEntity';
import { HutangEntity, type HutangModel } from './HutangEntity';

export interface EventDetailEntity extends EventEntity {
	data: HutangEntity[];
}

export interface EventDetailModel {
	eventData: EventModel;
	hutangData: HutangModel[];
}

export namespace EventDetailEntity {
	export function fromJson(payload: EventDetailModel): EventDetailEntity {
		var total = 0;
		payload.hutangData.map((e) => (total = total + e.debt));
		return {
			data: payload.hutangData.map((e) => HutangEntity.fromJson(e)),
			eventDate: payload.eventData.created_at,
			eventName: payload.eventData.event_name,
			id: payload.eventData.id,
			totalHutang: total
		};
	}
}
