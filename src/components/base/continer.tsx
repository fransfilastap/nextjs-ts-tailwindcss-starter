import { ComponentPropsWithoutRef, PropsWithChildren, ReactElement } from 'react'
import clsxtw from '@/lib/clsxtw'

type ContainerProps = PropsWithChildren<ComponentPropsWithoutRef<"div">>
export default function Continer ({children,className,...rest}:ContainerProps):ReactElement {
  return (
    <div {...rest} className={clsxtw('container mx-auto p-2 md:p-4 sm:p-3',className)}>
      {children}
    </div>
  )
}
