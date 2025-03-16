"use client";

import { useState } from "react";
import Button from "./ui/button";
import DialogBox from "./ui/dialog-box";

export default function NewQuizButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="w-full flex flex-col items-end pt-4 pr-4">
      <Button onClick={openDialog}>New quiz +</Button>

      {isDialogOpen && <DialogBox closeDialog={closeDialog} />}
    </div>
  );
}
