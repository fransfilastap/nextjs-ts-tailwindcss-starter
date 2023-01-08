import { ComponentPropsWithRef, ReactElement } from 'react'
import clsxtw from '@/lib/clsxtw'
import Continer from '@/components/base/continer'
import useScroll from '@/hooks/useScroll'

type HeaderProps = ComponentPropsWithRef<"header">

export default function Header({className,...rest}:HeaderProps):ReactElement{
  const scrolled = useScroll(50);
  return (
    <header className={clsxtw('h-[9vh] transition-colors duration-100 ease-in-out sticky top-0 w-screen bg-white dark:bg-slate-800',{'bg-white/50 backdrop-blur-lg ':scrolled},className)} {...rest}>
      <Continer>

      </Continer>
    </header>
  )
}
