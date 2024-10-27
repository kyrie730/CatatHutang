<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-6 card p-6">
		<div class="flex justify-between">
			<p class="text-5xl font-bold">Jalan" Mangga Dua</p>
			<form method="post" use:enhance action="?/deleteEvent">
				<button type="submit" class="btn variant-filled-error font-bold border border-error-700">
					Delete Event
				</button>
			</form>
		</div>
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
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<!-- {#each tableArr as row, i} -->
					<tr>
						<td>Gaung</td>
						<td>Rp.800.000,-</td>
						<td>Topi hitam</td>
						<td>false</td>
					</tr>
					<!-- {/each} -->
				</tbody>
				<tfoot>
					<tr>
						<th colspan="3">Total Hutang</th>
						<td>Rp.100.000,-</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</div>
