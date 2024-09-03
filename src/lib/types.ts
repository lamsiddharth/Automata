import { z } from 'zod';
import { ConnectionsProvider, ConnectionProviderProps } from '@/providers/connections-provider';

export const EditUserProfileSchema = z.object({
    email: z.string().email('Required'),
    name:z.string().min(3, 'Required'),
    
})
export type ConnectionTypes = 'Google Drive' | 'Notion' | 'Slack' | 'Discord'

export type Connection = {
  title: ConnectionTypes
  description: string
  image: string
  connectionKey: keyof ConnectionProviderProps
  accessTokenKey?: string
  alwaysTrue?: boolean
  slackSpecial?: boolean
}