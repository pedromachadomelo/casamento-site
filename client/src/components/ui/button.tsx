import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300'
  const variantClasses = variant === 'outline' 
    ? 'border-2 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-white'
    : 'bg-[#D4A574] text-white hover:bg-[#B8925F]'
  
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props} />
  )
}
