import React from "react";
import { useShow, useResource, useNavigation, useOne, useMany } from "@refinedev/core";

export const PostShow = () => {
  const { edit, list } = useNavigation();
  const { id } = useResource();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Post</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className="flex items-center justify-between gap-1 rounded border border-gray-200 bg-indigo-500 p-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-indigo-600"
            onClick={() => list("posts")}
          >
            Posts List
          </button>

          <button
            className="flex items-center justify-between gap-1 rounded border border-gray-200 bg-indigo-500 p-2 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-indigo-600"
            onClick={() => edit("posts", id ?? "")}>
            Edit
          </button>
        </div>
      </div>
      <div>
        <div className="mb-2 block text-sm font-medium mr-1.5">
          <h5>Id</h5>
          <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm">
            {record?.id ?? ""}
          </div>
        </div>
        <div className="mb-2 block text-sm font-medium mr-1.5">
          <h5>Title</h5>
          <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm">
            {record?.title}
          </div>
        </div>
        <div className="mb-2 block text-sm font-medium mr-1.5">
          <h5>Content</h5>
          <p className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm">
            {record?.content}
          </p>
        </div>
        <div className="mb-2 block text-sm font-medium mr-1.5">
          <h5>Status</h5>
          <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm">
            {record?.status}
          </div>
        </div>
        <div className="mb-2 block text-sm font-medium mr-1.5">
          <h5>Created At</h5>
          <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm">
            {new Date(record?.createdAt).toLocaleString(undefined, {
              timeZone: "UTC",
            })}
          </div>
        </div>
        <div className="mb-2 block text-sm font-medium mr-1.5">
          <h5>Published At</h5>
          <div className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm">
            {new Date(record?.publishedAt).toLocaleString(
              undefined,
              { timeZone: "UTC" },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
