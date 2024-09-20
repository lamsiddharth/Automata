import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-4'>
      <section className='flex flex-col gap-4 p-6'>
        <Workflow  description='creating new workflow' id='1' name='sidd' publish={false}/>
      </section>
    </div>
  )
}

export default Workflows