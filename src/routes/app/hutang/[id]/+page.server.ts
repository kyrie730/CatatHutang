import { DeleteEvent } from '$lib/Repository/Hutang/Repository/DeleteEvent';
import { redirect, type Actions, error } from '@sveltejs/kit';

export const actions: Actions = {
	deleteEvent: async ({ params }) => {
		const { id } = params;
		if (id) {
			const res = await DeleteEvent(id);
			if (!res) {
				console.error('Error deleting record:');
				throw error(500, 'Could not delete the record');
			}
			throw redirect(303, '/app/hutang');
		}
		throw error(500, 'Could not delete the record');
	}
};
