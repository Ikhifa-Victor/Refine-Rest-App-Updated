// import React from "react";
// import { IResourceComponentsProps, useNavigation, useDelete } from "@refinedev/core";
// import { useTable } from "@refinedev/react-table";
// import { ColumnDef, flexRender } from "@tanstack/react-table";

// export const PostList: React.FC<IResourceComponentsProps> = () => {
//     const columns = React.useMemo<ColumnDef<any>[]>(
//         () => [
//             {
//                 id: "id",
//                 accessorKey: "id",
//                 header: "Id",
//             },
//             {
//                 id: "title",
//                 accessorKey: "title",
//                 header: "Title",
//             },
//             {
//                 id: "content",
//                 accessorKey: "content",
//                 header: "Content",
//             },
//             {
//                 id: "status",
//                 accessorKey: "status",
//                 header: "Status",
//             },
//             {
//                 id: "createdAt",
//                 accessorKey: "createdAt",
//                 header: "Created At",
//                 cell: function render({ getValue }) {
//                     return new Date(getValue<any>()).toLocaleString(undefined, {
//                         timeZone: "UTC",
//                     });
//                 },
//             },
//             {
//                 id: "publishedAt",
//                 accessorKey: "publishedAt",
//                 header: "Published At",
//                 cell: function render({ getValue }) {
//                     return new Date(getValue<any>()).toLocaleString(undefined, {
//                         timeZone: "UTC",
//                     });
//                 },
//             },
//             {
//                 id: "actions",
//                 accessorKey: "id",
//                 header: "Actions",
//                 cell: function render({ getValue }) {
//                     return (
//                         <div className="flex flex-col flex-wrap gap-[4px]">
//                             <button
//                                 className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
//                                 onClick={() => {
//                                     show("posts", getValue() as string);
//                                 }}
//                             >
//                                 Show
//                             </button>
//                             <button
//                                 className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
//                                 onClick={() => {
//                                     edit("posts", getValue() as string);
//                                 }}
//                             >
//                                 Edit
//                             </button>

//                             <button
//                                 className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-red-500 hover:text-white"
//                                 onClick={() =>
//                                 mutate({
//                                     id: getValue() as number,
//                                     resource: "posts",
//                                 })
//                                 }
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     );
//                 },
//             },
//         ],
//         [],
//     );

//     const { edit, show, create } = useNavigation();
//     const { mutate } = useDelete();

//     const {
//         getHeaderGroups,
//         getRowModel,
//         setOptions,
//         // refineCore: {
//         //     tableQueryResult: { data: tableData },
//         // },
//         getState,
//         setPageIndex,
//         getCanPreviousPage,
//         getPageCount,
//         getCanNextPage,
//         nextPage,
//         previousPage,
//         setPageSize,
//         getColumn,
//     } = useTable({
//         columns
//     });

//     setOptions((prev) => ({
//         ...prev,
//         meta: {
//             ...prev.meta,
//         },
//     }));

//     return (
//         <div style={{ padding: "16px" }}>
//             <div
//                 style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                 }}
//             >
//                 <h1>Posts</h1>
//                 <button
//                     className="flex items-center justify-between gap-1 rounded border border-gray-200 bg-indigo-500 p-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-indigo-600"
//                     onClick={() => create("posts")}
//                 >
//                     Create
//                 </button>
//             </div>

//             <div
//                 style={{ maxWidth: "100%", overflowY: "scroll" }}
//             >
//                 <table className="min-w-full table-fixed divide-y divide-gray-200 border">
//                     <thead className="bg-gray-100">
//                         {getHeaderGroups().map((headerGroup) => (
//                             <tr key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => (
//                                     <th key={header.id}>
//                                         {!header.isPlaceholder &&
//                                             flexRender(
//                                                 header.column.columnDef.header,
//                                                 header.getContext(),
//                                             )}
//                                     </th>
//                                 ))}
//                             </tr>
//                         ))}
//                     </thead>

//                     <tbody className="divide-y divide-gray-200 bg-white">
//                         {getRowModel().rows.map((row) => (
//                             <tr
//                                 key={row.id}
//                                 className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
//                             >
//                                 {row.getVisibleCells().map((cell) => (
//                                     <td
//                                         key={cell.id}
//                                         className="transition hover:bg-gray-100"
//                                     >
//                                         {flexRender(
//                                             cell.column.columnDef.cell,
//                                             cell.getContext(),
//                                         )}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             <div className="flex items-center justify-between mx-auto mt-12">
//                 <div className="md:w-7/12 flex items-center justify-between mx-auto">
//                     <button
//                         className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
//                         onClick={() => setPageIndex(0)}
//                         disabled={!getCanPreviousPage()}
//                     >
//                         {"<<"}
//                     </button>
//                     <button
//                         className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
//                         onClick={() => previousPage()}
//                         disabled={!getCanPreviousPage()}
//                     >
//                         {"<"}
//                     </button>

//                     <button
//                         className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
//                         onClick={() => nextPage()} disabled={!getCanNextPage()}>
//                         {">"}
//                     </button>

//                     <button
//                         className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
//                         onClick={() => setPageIndex(getPageCount() - 1)}
//                         disabled={!getCanNextPage()}
//                     >
//                         {">>"}
//                     </button>

//                     <div className="w-[40%] px-5">
//                         Page
//                         <strong>
//                             &nbsp; {getState().pagination.pageIndex + 1} of{" "}
//                             {getPageCount()}
//                         </strong>
//                     </div>

//                     <div className="px-5">
//                         Go to page:
//                         <input
//                             className="p-2 block border rounded-[8px]"
//                             type="number"
//                             defaultValue={getState().pagination.pageIndex + 1}
//                             onChange={(e) => {
//                                 const page = e.target.value
//                                     ? Number(e.target.value) - 1
//                                     : 0;
//                                 setPageIndex(page);
//                             }}
//                         />
//                     </div>{" "}

//                     <select
//                         className="px-5 border w-[50%]"
//                         value={getState().pagination.pageSize}
//                         onChange={(e) => {
//                             setPageSize(Number(e.target.value));
//                         }}
//                     >
//                         {[10, 20, 30, 40, 50].map((pageSize) => (
//                             <option key={pageSize} value={pageSize}>
//                                 Show {pageSize}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//         </div>
//     );
// };











import React from "react";
import { IResourceComponentsProps, useNavigation, useDelete } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";

export const PostList: React.FC<IResourceComponentsProps> = () => {
	const columns = React.useMemo<ColumnDef<any>[]>(
		() => [
			{
				id: "id",
				accessorKey: "id",
				header: "Id",
			},
			{
				id: "title",
				accessorKey: "title",
				header: "Title",
			},
			{
				id: "content",
				accessorKey: "content",
				header: "Content",
			},
			{
				id: "status",
				accessorKey: "status",
				header: "Status",
			},
			{
				id: "createdAt",
				accessorKey: "createdAt",
				header: "Created At",
				cell: function render({ getValue }) {
					return new Date(getValue<any>()).toLocaleString(undefined, {
						timeZone: "UTC",
					});
				},
			},
			{
				id: "publishedAt",
				accessorKey: "publishedAt",
				header: "Published At",
				cell: function render({ getValue }) {
					return new Date(getValue<any>()).toLocaleString(undefined, {
						timeZone: "UTC",
					});
				},
			},
			{
				id: "actions",
				accessorKey: "id",
				header: "Actions",
				cell: function render({ getValue }) {
					return (
						<div className="flex flex-col flex-wrap gap-[4px]">
							<button
								className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
								onClick={() => {
									show("posts", getValue() as string);
								}}
							>
								Show
							</button>
							<button
								className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-indigo-500 hover:text-white"
								onClick={() => {
									edit("posts", getValue() as string);
								}}
							>
								Edit
							</button>

							<button
								className="rounded border border-gray-200 p-2 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-red-500 hover:text-white"
								onClick={() =>
									mutate({
										id: getValue() as number,
										resource: "posts",
									})
								}
							>
								Delete
							</button>
						</div>
					);
				},
			},
		],
		[]
	);
	const { edit, show, create } = useNavigation();
	const { mutate } = useDelete();

	const {
		getHeaderGroups,
		getRowModel,
		setOptions,
		refineCore: {
			tableQueryResult: { data: tableData },
		},
	} = useTable({
		columns,
	});
	setOptions((prev) => ({
		...prev,
		meta: {
			...prev.meta,
		},
	}));
	return (
		<div style={{ padding: "16px" }}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h1>Posts</h1>
				<button
					className="flex items-center justify-between gap-1 rounded border border-gray-200 bg-indigo-500 p-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-indigo-600"
					onClick={() => create("posts")}
				>
					Create
				</button>
			</div>
			<div style={{ maxWidth: "100%", overflowY: "scroll" }}>
				<table className="min-w-full table-fixed divide-y divide-gray-200 border">
					<thead className="bg-gray-100">
						{getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th key={header.id}>
										{!header.isPlaceholder &&
											flexRender(
												header.column.columnDef.header,
												header.getContext()
											)}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className="divide-y divide-gray-200 bg-white">
						{getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
							>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id} className="transition hover:bg-gray-100">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};