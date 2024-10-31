<script lang="ts">
	import type { CreateHutangDto } from '$lib/Repository/Hutang/Dto';
	import { FormatToRupiah } from '$lib/Utils';

	let eventName = '';
	let hutangData: CreateHutangDto[] = [];
	function totalHutang(data: CreateHutangDto[]) {
		let sum = 0;
		data.map((e) => (sum = sum + e.debt));
		return sum;
	}
	function handleChange(index: number, field: keyof CreateHutangDto, event: Event) {
		const target = event.target as HTMLInputElement;
		const value = field === 'debt' ? parseFloat(target.value) : target.value;

		hutangData = hutangData.map((item, i) => (i === index ? { ...item, [field]: value } : item));
	}
</script>

<div class="flex flex-col gap-2">
	<div class="card flex w-full justify-between gap-2 p-6">
		<input
			type="text"
			id="name"
			bind:value={eventName}
			required
			class="input bg-primary-50 w-1/2"
			placeholder="Event Name"
		/>
		<button class="btn">Submit</button>
	</div>
	<div class="card w-full flex flex-col gap-4 p-6">
		<div class="flex w-full justify-between">
			<p class="font-bold text-3xl">List Hutang</p>
			<button
				class="btn"
				on:click={() => {
					hutangData = [...hutangData, { debt: 0, name: '', note: '' }];
					console.log(hutangData);
				}}>+ Tambah Hutang</button
			>
		</div>
		<div class="table-container border border-gray-400 z-10 shadow-md">
			<table class="table table-hover border border-black">
				<thead class="">
					<tr>
						<th>Nama</th>
						<th>Jumlah</th>
						<th>Catatan</th>
					</tr>
				</thead>
				<tbody>
					{#each hutangData as row, i}
						<tr>
							<td class="border-y border-gray-300"
								><input
									type="text"
									id="name"
									required
									class="input bg-primary-50"
									placeholder="Nama"
									on:change={(e) => handleChange(i, 'name', e)}
								/></td
							>
							<td class="border-y border-gray-300"
								><input
									type="number"
									id="debt"
									required
									class="input bg-primary-50"
									placeholder="Jumlah"
									on:change={(e) => handleChange(i, 'debt', e)}
								/></td
							>
							<td class="border-y border-gray-300"
								><input
									type="text"
									id="note"
									required
									class="input bg-primary-50"
									placeholder="Catatan"
									on:change={(e) => handleChange(i, 'note', e)}
								/></td
							>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr class="border-y border-gray-300">
						<th colspan="2">Total Hutang</th>
						<td>{FormatToRupiah(totalHutang(hutangData))},-</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</div>
