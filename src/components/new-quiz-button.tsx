"use client";

import Button from "./ui/button";
import DialogBox from "./ui/dialog-box";
import useDialogBox from "@/lib/hooks/useDialogBox";

export default function NewQuizButton() {
  const { isDialogOpen, openDialog, closeDialog } = useDialogBox();

  return (
    <div className="w-full flex flex-col items-end pt-4 pr-4">
      <Button onClick={openDialog}>New quiz +</Button>

      {isDialogOpen && <DialogBox closeDialog={closeDialog} />}
    </div>
  );
}
