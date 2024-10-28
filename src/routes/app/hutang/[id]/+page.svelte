<script lang="ts">
	import { enhance } from '$app/forms';
	import type { EventDetailEntity } from '$lib/Repository/Hutang';
	import { FormatToRupiah } from '$lib/Utils';
	import moment from 'moment';
	export let data: { eventDetail: EventDetailEntity };

	let unpaid = 0;
	data.eventDetail.data.map((e) => {
		if (!e.isComplete) {
			unpaid = unpaid + e.debt;
		}
	});
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2 card p-6">
		<div class="flex justify-between">
			<p class="text-4xl font-bold">{data.eventDetail.eventName}</p>
			<form method="post" use:enhance action="?/deleteEvent">
				<button type="submit" class="btn variant-filled-error font-bold border border-error-700">
					Delete Event
				</button>
			</form>
		</div>
		<p>{moment(data.eventDetail.eventDate).format('dddd, DD MMMM YYYY').toString()}</p>
	</div>
	<div class="flex flex-col gap-6 card p-6">
		<div class="table-container border border-gray-400 z-10 shadow-md">
			<table class="table table-hover border border-black">
				<thead class="">
					<tr>
						<th>Nama</th>
						<th>Jumlah</th>
						<th>Catatan</th>
						<th>Sudah Dibayar</th>
						<th>Aksi</th>
					</tr>
				</thead>
				<tbody>
					{#each data.eventDetail.data as row}
						<tr>
							<td class="border-y border-gray-300">{row.name}</td>
							<td class="border-y border-gray-300">{FormatToRupiah(row.debt) + ',-'}</td>
							<td class="border-y border-gray-300">{row.note}</td>
							<td class="border-y border-gray-300"
								>{#if row.isComplete}
									<button class="btn variant-filled-primary font-bold">Sudah Dibayar</button>
								{:else}
									<button class="btn variant-filled-error font-bold">Belum Dibayar</button>
								{/if}</td
							>
							<td class="border-y border-gray-300">
								<button class="btn variant-filled">Edit</button>
							</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr class="border-y border-gray-300">
						<th colspan="4">Total Hutang</th>
						<td>{FormatToRupiah(data.eventDetail.totalHutang) + ',-'}</td>
					</tr>
					<tr class="border-y border-gray-300 font-bold">
						<th colspan="4">Total Belum Dibayar</th>
						<td>{FormatToRupiah(unpaid)},-</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</div>
