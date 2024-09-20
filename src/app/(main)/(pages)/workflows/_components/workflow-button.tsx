"use client"
import WorkflowForm from '@/components/forms/workflow-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButtom = (props: Props) => {
  const {setClose, setOpen } = useModal();

  const handleClick = () => {
      setOpen(
        <CustomModal title='create a workflow Automation' subHeading='workflows are a powerfull that help you automate tasks'>
          <WorkflowForm/>
        </CustomModal>
      )
  }


  return (
    <Button size={('icon')} onClick={handleClick}  >
        <Plus />
    </Button>
  )
}

export default WorkflowButtom