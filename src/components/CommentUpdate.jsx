"use client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { RiEdit2Line } from "react-icons/ri";

export function CommentUpdate({comments}) {
    console.log(comments)
    const {_id,name,comment,createdAt} = comments
     const handelUpdateIdea = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        // console.log(fromData)
        const destination = Object.fromEntries(fromData.entries())
        // console.log(destination)
       new Date(Comment.createdAt).toLocaleString()
          

    //    const {data: tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-interactions/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                //  authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(destination)
        })
        const data = await res.json()
          window.location.reload()
        //   console.log(data)
    }
    return (
    <Modal>
      <Button variant="secondary"><RiEdit2Line /> Update</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form  onSubmit={handelUpdateIdea} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" isRequired>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField  className="w-full" name="comment" type="text" isRequired>
                    <Label>Comment</Label>
                    <Input placeholder="Enter your Comment" />
                  </TextField>
                    <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type='submit' slot="close">Confirm Update</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
