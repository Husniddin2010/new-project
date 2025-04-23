import * as React from 'react';
import { DialogsProvider, useDialogs } from '@toolpad/core/useDialogs';
import Button from '@mui/material/Button';

function DemoContent() {
  const dialogs = useDialogs();

  const handleDelete = async () => {
    const confirm = await dialogs.confirm("Rostdan ham bu cardni o'chirmoqchimisiz?", {
      okText: 'Ha',
      cancelText: 'Yo‘q',
    });

    if (confirm) {
      // Bu yerga o‘chirish logikasini yozing (masalan API chaqiruv)
      dialogs.alert('Card o‘chirildi!');
    } else {
      dialogs.alert('O‘chirish bekor qilindi');
    }
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleDelete}>
        Cardni o'chirish
      </Button>
    </div>
  );
}

export default function MyDeleteDialogWrapper() {
  return (
    <DialogsProvider>
      <DemoContent />
    </DialogsProvider>
  );
}