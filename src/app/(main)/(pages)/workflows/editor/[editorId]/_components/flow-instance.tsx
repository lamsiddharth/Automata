"use client"
import { Button } from '@/components/ui/button'
import { useNodeConnections } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import React, { useCallback, useState } from 'react'

type Props = {
    children: React.ReactNode
    edges: any[]
    nodes: any[]
}

const FlowInstance = ({children, edges, nodes}: Props) => {
  
    const pathname = usePathname();
    const [isFlow, setFlow] = useState();
    const { nodeConnection } = useNodeConnections();
    

    const onFlowAutomation = useCallback(async() => {
        const flow = await onCreateNodesEdges(
            pathname.split('/').pop(),
            JSON.stringify(nodes),
            JSON.stringify(edges),
            JSON.stringify(isFlow),
        )
    })
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex gap-3 p-4'>
                <Button 
                    onClick={onFlowAutomation}
                    disabled={isFlow.length < 1}
                >
                    save
                </Button>
            </div>
        </div>
    )
}

export default FlowInstance