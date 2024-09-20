import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    name: string
    description: string
    id: string
    publish: boolean | null
}

const Workflow = ({description, id, name, publish}: Props) => {
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className='flex flex-col gap-4 '>
        <Link href={`/workflows/editor/${id}`}>
          <div className='flex flex-row gap-2'>
            <Image
              src="/googleDrive.png"
              alt="Goofle Drive"
              height={30}
              width={30}
              className='object-contain'
            />
            <Image
              src="/notion.png"
              alt="notion"
              height={30}
              width={30}
              className='object-contain'
            />
            <Image
              src="/discord.png"
              alt="discord"
              height={30}
              width={30}
              className='object-contain'
            />
          </div>
          <div>
            <CardTitle className='text-lg'>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
    </Card>
  )
}

export default Workflow