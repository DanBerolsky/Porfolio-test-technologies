import { useSearchParams } from 'next/navigation'

export default function useParam (paramName: string) {
  const searchParams = useSearchParams()
  const paramValue = searchParams.get(paramName) ?? '1'
  return paramValue
}
