import { GET_ALL_POSTS } from "@/services/url";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { addPost, editPost } from "../slice/postSlice";
import { RootState } from "@/store";

const CreatePostsModal: React.FC<{
  onOpen: boolean;
  onClose: () => void;
  postToEdit: {
    id?: number;
    title: string;
    body: string;
    userId: number;
  } | null;
}> = ({ onOpen, onClose, postToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const { posts } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setDescription(postToEdit.body);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [postToEdit, onOpen, onClose]);

  const handleSavePost = async () => {
    try {
      if (postToEdit) {
        // const response = await fetch(`${GET_ALL_POSTS}/${postToEdit.id}`, {
        //   method: "PUT",
        //   body: JSON.stringify({
        //     title: title,
        //     description: description,
        //     userId: 1,
        //   }),
        //   headers: {
        //     "Content-type": "application/json; charset=UTF-8",
        //   },
        // });

        dispatch(
          editPost({
            id: postToEdit.id,
            title: title,
            body: description,
            userId: 1,
          })
        );
        onClose();

        // if (data) {
        //   await fetch(GET_ALL_POSTS);
        //   onClose();
        // }
      } else {
        const response = await fetch(GET_ALL_POSTS, {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const data = await response.json();

        if (data) {
          await fetch(GET_ALL_POSTS);

          dispatch(
            addPost({
              userId: data.userId,
              id: posts?.length + 1,
              title: data.title,
              body: data.description,
            })
          );
          onClose();
        }
      }
      return;
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <>
      <Modal isOpen={onOpen} toggle={onClose}>
        <ModalHeader toggle={onClose}>
          {postToEdit ? "Edit Post" : "Create Post"}
        </ModalHeader>
        <ModalBody>
          <Label>Title</Label>
          <Input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Label>Description</Label>
          <Input
            type="textarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSavePost}>
            {postToEdit ? "Update" : "Create"}
          </Button>
          <Button color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreatePostsModal;
