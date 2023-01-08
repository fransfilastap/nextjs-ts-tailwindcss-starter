import { ReactElement } from "react";
import { Root } from '@/components/layouts'
import Continer from '@/components/base/continer'
import Seo from '@/components/seo'

export default function Home(): ReactElement {
  return (
    <Root>
      <Seo/>
      <Continer>
        Hello
      </Continer>
    </Root>
  );
}
