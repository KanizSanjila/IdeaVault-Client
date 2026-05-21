"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ idea }) {

  const { _id, shortDescription } = idea;

  const router = useRouter();

  const handleDelete = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await res.json();
    console.log(data);

    router.push("/");
  };

  return (
    <AlertDialog>

      <Button className="text-red-500 rounded-none" variant="outline">
        <TrashBin /> Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>

          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete idea permanently?
              </AlertDialog.Heading>

            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{shortDescription}</strong> and all of its data.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>

        </AlertDialog.Container>
      </AlertDialog.Backdrop>

    </AlertDialog>
  );
}