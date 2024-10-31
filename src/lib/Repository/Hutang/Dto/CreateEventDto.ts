import type { CreateHutangDto } from './CreateHutangDto';

export interface CreateEventDto {
	eventName: string;
	hutangData: CreateHutangDto[];
}

export namespace CreateEventDto {
	export function toJson(data: CreateEventDto) {
		return {
			event_name: data.eventName,
			data: data.hutangData
		};
	}
}
