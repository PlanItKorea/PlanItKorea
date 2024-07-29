import React from 'react'
import styled from 'styled-components'
import Busan  from '../../assets/images/1/busan.jpg'
import Gapyeong  from '../../assets/images/1/gapyeong.jpg'
import Gyengju  from '../../assets/images/1/gyengju.jpg'
import Jeju  from '../../assets/images/1/jeju.jpg'
import Seoul from '../../assets/images/1/seoul.jpg'

const Div1 = styled.div`
  width: 60%;
  height: 60%;
`
const Div2 = styled.div`
  width: 60%;
  height: 605;
`
const Img = styled.img`
  width: 50px;
`

export default function index() {
  return (
    <Div1>
      <Div2>
        <Img src={Busan} alt="" />
        <Img src={Gapyeong} alt="" />
        <Img src={Gyengju} alt="" />
        <Img src={Jeju} alt="" />
        <Img src={Seoul} alt="" />
      </Div2>
      <div>
        <Img src={Busan} alt="" />
        <Img src={Gapyeong} alt="" />
        <Img src={Gyengju} alt="" />
        <Img src={Jeju} alt="" />
      </div>
      <div>
        <Img src={Busan} alt="" />
        <Img src={Gapyeong} alt="" />
        <Img src={Gyengju} alt="" />
        <Img src={Jeju} alt="" />
      </div>
    </Div1>
  )
}
