import { Content, HomeContainer } from './style'

import { BannerAndCnpEntry } from '../../components/bannerAndCnpEntry'

export function Home() {
  return (
    <HomeContainer>
      <Content>
        <BannerAndCnpEntry />
      </Content>
    </HomeContainer>
  )
}
