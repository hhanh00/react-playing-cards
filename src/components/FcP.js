import React from "react"

import Card from "./Card"

// four color big face
import fcbf2c from "../images/plain/2C.svg"
import fcbf3c from "../images/plain/3C.svg"
import fcbf4c from "../images/plain/4C.svg"
import fcbf5c from "../images/plain/5C.svg"
import fcbf6c from "../images/plain/6C.svg"
import fcbf7c from "../images/plain/7C.svg"
import fcbf8c from "../images/plain/8C.svg"
import fcbf9c from "../images/plain/9C.svg"
import fcbfTc from "../images/plain/TC.svg"
import fcbfJc from "../images/plain/JC.svg"
import fcbfQc from "../images/plain/QC.svg"
import fcbfKc from "../images/plain/KC.svg"
import fcbfAc from "../images/plain/AC.svg"

import fcbf2d from "../images/plain/2D.svg"
import fcbf3d from "../images/plain/3D.svg"
import fcbf4d from "../images/plain/4D.svg"
import fcbf5d from "../images/plain/5D.svg"
import fcbf6d from "../images/plain/6D.svg"
import fcbf7d from "../images/plain/7D.svg"
import fcbf8d from "../images/plain/8D.svg"
import fcbf9d from "../images/plain/9D.svg"
import fcbfTd from "../images/plain/TD.svg"
import fcbfJd from "../images/plain/JD.svg"
import fcbfQd from "../images/plain/QD.svg"
import fcbfKd from "../images/plain/KD.svg"
import fcbfAd from "../images/plain/AD.svg"

import fcbf2h from "../images/plain/2H.svg"
import fcbf3h from "../images/plain/3H.svg"
import fcbf4h from "../images/plain/4H.svg"
import fcbf5h from "../images/plain/5H.svg"
import fcbf6h from "../images/plain/6H.svg"
import fcbf7h from "../images/plain/7H.svg"
import fcbf8h from "../images/plain/8H.svg"
import fcbf9h from "../images/plain/9H.svg"
import fcbfTh from "../images/plain/TH.svg"
import fcbfJh from "../images/plain/JH.svg"
import fcbfQh from "../images/plain/QH.svg"
import fcbfKh from "../images/plain/KH.svg"
import fcbfAh from "../images/plain/AH.svg"

import fcbf2s from "../images/plain/2S.svg"
import fcbf3s from "../images/plain/3S.svg"
import fcbf4s from "../images/plain/4S.svg"
import fcbf5s from "../images/plain/5S.svg"
import fcbf6s from "../images/plain/6S.svg"
import fcbf7s from "../images/plain/7S.svg"
import fcbf8s from "../images/plain/8S.svg"
import fcbf9s from "../images/plain/9S.svg"
import fcbfTs from "../images/plain/TS.svg"
import fcbfJs from "../images/plain/JS.svg"
import fcbfQs from "../images/plain/QS.svg"
import fcbfKs from "../images/plain/KS.svg"
import fcbfAs from "../images/plain/AS.svg"

const cards = {
  '2c': fcbf2c,
  '3c': fcbf3c,
  '4c': fcbf4c,
  '5c': fcbf5c,
  '6c': fcbf6c,
  '7c': fcbf7c,
  '8c': fcbf8c,
  '9c': fcbf9c,
  'Tc': fcbfTc,
  'Jc': fcbfJc,
  'Qc': fcbfQc,
  'Kc': fcbfKc,
  'Ac': fcbfAc,

  '2d': fcbf2d,
  '3d': fcbf3d,
  '4d': fcbf4d,
  '5d': fcbf5d,
  '6d': fcbf6d,
  '7d': fcbf7d,
  '8d': fcbf8d,
  '9d': fcbf9d,
  'Td': fcbfTd,
  'Jd': fcbfJd,
  'Qd': fcbfQd,
  'Kd': fcbfKd,
  'Ad': fcbfAd,

  '2h': fcbf2h,
  '3h': fcbf3h,
  '4h': fcbf4h,
  '5h': fcbf5h,
  '6h': fcbf6h,
  '7h': fcbf7h,
  '8h': fcbf8h,
  '9h': fcbf9h,
  'Th': fcbfTh,
  'Jh': fcbfJh,
  'Qh': fcbfQh,
  'Kh': fcbfKh,
  'Ah': fcbfAh,

  '2s': fcbf2s,
  '3s': fcbf3s,
  '4s': fcbf4s,
  '5s': fcbf5s,
  '6s': fcbf6s,
  '7s': fcbf7s,
  '8s': fcbf8s,
  '9s': fcbf9s,
  'Ts': fcbfTs,
  'Js': fcbfJs,
  'Qs': fcbfQs,
  'Ks': fcbfKs,
  'As': fcbfAs,
}

function FcP(props) {
  return (
    <Card {...props} card={cards[props.card]} />
  )
}

export default FcP
