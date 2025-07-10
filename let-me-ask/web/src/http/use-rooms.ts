import { useQuery } from '@tanstack/react-query'
import type { GetRoomsResponse } from './types/get-rooms-response'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms')
      const result: GetRoomsResponse = await response.json()

      return [
        {
          id: '1',
          name: 'Sala 1',
          questionsCount: 0,
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          name: 'Sala 2',
          questionsCount: 0,
          createdAt: new Date().toISOString(),
        },
        {
          id: '3',
          name: 'Sala 3',
          questionsCount: 5,
          createdAt: new Date().toISOString(),
        },
      ]
    },
  })
}
