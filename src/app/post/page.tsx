"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { deletePost, getPosts } from "./slice/postSlice";
import { RootState } from "@/store";
import CreatePostsModal from "./components/CreatePostsModal";

const Posts = () => {
  const [openAddPostsModal, setOpenAddOpenPostsModal] = useState({
    isOpen: false,
    data: null,
  });

  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "title",
      text: "Title",
    },
    {
      dataField: "body",
      text: "Body",
    },
    {
      dataField: "edit",
      formatter: (cell, row, rowIndex) => (
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              setOpenAddOpenPostsModal({ isOpen: true, data: row })
            }
          >
            Edit
          </button>
        </div>
      ),
    },
    {
      dataField: "delete",
      formatter: (cell, row, rowIndex) => (
        <div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => dispatch(deletePost(row?.id))}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const options = {
    onSizePerPageChange: (sizePerPage: number, page: number) => {
      console.log("Size per page change!!!");
      console.log("Newest size per page:" + sizePerPage);
      console.log("Newest page:" + page);
    },
    onPageChange: (page: number, sizePerPage: number) => {
      console.log("Page change!!!");
      console.log("Newest size per page:" + sizePerPage);
      console.log("Newest page:" + page);
    },
  };

  const handleCloseModal = () => {
    setOpenAddOpenPostsModal({ isOpen: false, data: null });
  };

  return (
    <div className="ml-64 p-6">
      <div className="float-right mb-3">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpenAddOpenPostsModal({ isOpen: true, data: null })}
        >
          Add Post
        </button>
      </div>
      {posts && posts.length > 0 ? (
        <BootstrapTable
          keyField="id"
          data={posts}
          columns={columns}
          pagination={paginationFactory(options)}
        />
      ) : (
        <p>Loading posts...</p>
      )}
      <CreatePostsModal
        onOpen={openAddPostsModal.isOpen}
        onClose={handleCloseModal}
        postToEdit={openAddPostsModal.data}
      />
    </div>
  );
};

export default Posts;
