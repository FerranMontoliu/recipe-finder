import { useEffect } from 'react'

export const useWindowTitle = (title: string): void => {
  useEffect(() => {
    window.document.title = title
  }, [title])
}
