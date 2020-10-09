import React from 'react'
import { Link, Logo } from 'arwes';

export default function ReleaseMsg() {
  return (
    <div className="ReleaseMsg">
      <Logo animate size={200} />
      <Link style={{ margin: '0px 20px 0px 20px'}} href='https://store.steampowered.com/app/1091500/Cyberpunk_2077/'>Buy it now!!!</Link>
      <Logo animate size={200} />
    </div>
  )
}
