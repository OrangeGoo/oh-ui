import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AppointmentForm from "./AppointmentForm"


const EditDialogContent = () => {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <AppointmentForm/>
    </DialogContent>
  )
}

EditDialog.Trigger = DialogTrigger
EditDialogContent.displayName = "EditDialogContent"
EditDialog.Content = EditDialogContent

export function EditDialog({ children }: {children: React.ReactNode}) {
  return (
    <Dialog>
      {children}
      <EditDialog.Content/>
    </Dialog>
  )
}
