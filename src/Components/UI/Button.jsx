import React from 'react'

export default function Button({label, icon, ...props}) {
  return <button {...props}>
    {icon}
    <span>{label}</span>
  </button>
}
