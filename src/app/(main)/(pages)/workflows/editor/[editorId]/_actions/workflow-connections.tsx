"use server"
import { db } from '@/lib/db'
import React from 'react'

type Props = {}

export const onCreateNodesEdges = async (
    flowId: string,
    nodes: string,
    edges: string,
    flowPath: string
) => {
  const flow = await db.workflows.update({
    where: {
        id: flowId,
    },
    data: {
        nodes,
        edges,
        flowPath: flowPath,
    }
  })
  if(flow) return {message: 'flow saved'}
}


