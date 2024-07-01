import React from 'react'
import Image from "next/image";
import settings from "../public/settings.svg";
import Link from "next/link";


const Settings = () => {
  return (
    <div className=".container-settings">
      <Image src={settings} alt="settings" />
    </div>
  )
}

export default Settings;
