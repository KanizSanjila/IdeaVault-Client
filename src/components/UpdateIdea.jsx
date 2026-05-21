"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { RiEdit2Line } from "react-icons/ri";

export function UpdateIdea({idea}) {
    console.log(idea)
    const { _id, 
imageURL, title,category,shortDescription,targetAudience,problemStatement,proposedSolution,detailedDescription} = idea;
     const handelUpdateIdea = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget)
        // console.log(fromData)
        const destination = Object.fromEntries(fromData.entries())
        // console.log(destination)
          

    //    const {data: tokenData} = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json',
                //  authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(destination)
        })
        const data = await res.json()
          window.location.reload()
          console.log(data)
    }
    return (
    <Modal>
      <Button variant="secondary"><RiEdit2Line /> Update</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and well get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form  onSubmit={handelUpdateIdea} className="flex flex-col gap-4">
                  <TextField defaultValue={title} className="w-full" name="title" type="text" isRequired>
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                  </TextField>
                  <TextField defaultValue={shortDescription}  className="w-full" name="shortDescription" type="text" isRequired>
                    <Label>ShortDescription</Label>
                    <Input placeholder="Enter your ShortDescription" />
                  </TextField>
                 <div className="space-y-2">
  <label className="font-bold text-black">
    Category
  </label>

  <select
    defaultValue={category}
    name="category"
    required
    className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Select Category</option>
    <option value="Tech">Tech</option>
    <option value="Health">Health</option>
    <option value="AI">AI</option>
    <option value="Education">Education</option>
  </select>
</div>
                  <TextField defaultValue={targetAudience} className="w-full" name="targetAudience" type="text" isRequired>
                    <Label>TargetAudience</Label>
                    <Input placeholder="Enter your company TargetAudience" />
                  </TextField>
                  <TextField defaultValue={problemStatement} className="w-full" name="problemStatement" type="text" isRequired>
                    <Label>ProblemStatement</Label>
                    <Input placeholder="Enter your ProblemStatement" />
                  </TextField>
                  <TextField defaultValue={proposedSolution} className="w-full" name="proposedSolution" type="text" isRequired>
                    <Label>ProposedSolution</Label>
                    <Input placeholder="Enter your ProposedSolution" />
                  </TextField>
                  <TextField defaultValue={imageURL} className="w-full" name="imageURL" type="url" isRequired>
                    <Label>imageUrl</Label>
                    <Input placeholder="Enter your imageURL" />
                  </TextField>
                  <TextField defaultValue={detailedDescription} className="w-full" name="detailedDescription" type="text" isRequired>
                    <Label>detailedDescription</Label>
                    <Input placeholder="Enter your detailedDescription" />
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
