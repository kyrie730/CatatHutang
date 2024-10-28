export interface HutangEntity {
	id: string;
	name: string;
	debt: number;
	note: string;
	isComplete: boolean;
}

export interface HutangModel {
	id: string;
	name: string;
	debt: number;
	note: string;
	is_completed: boolean;
}

export namespace HutangEntity {
	export function fromJson(json: HutangModel): HutangEntity {
		return {
			debt: json.debt,
			id: json.id,
			isComplete: json.is_completed,
			name: json.name,
			note: json.note
		};
	}
}
