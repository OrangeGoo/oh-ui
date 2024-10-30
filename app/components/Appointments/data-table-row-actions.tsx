import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import React from "react"
import { EditDialog } from './dialog-edit-button';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({}: DataTableRowActionsProps<TData>) { 
  // const payment = row.original
  return (
    <EditDialog>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0"
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <EditDialog.Trigger asChild>
            <DropdownMenuItem>
              Edit
            </DropdownMenuItem>
          </EditDialog.Trigger>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </EditDialog>
  )
}
