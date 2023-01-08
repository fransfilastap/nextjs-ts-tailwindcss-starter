import { ReactElement } from 'react'
import Continer from '@/components/base/continer'

export default function Footer():ReactElement {
  return (
    <footer className={'h-[20vh] border dark:border-t-gray-800 bg-[#f1f1f1]'}>
      <Continer className={'flex flex-row space-x-3'}>
        Footer
      </Continer>
    </footer>
  )
}
