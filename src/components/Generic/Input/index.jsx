import React, {forwardRef} from 'react'
import { Container, Wrapper, Icon } from './style'

const Input =forwardRef(({
  type, 
  onChange,
  onFocus,
  placeholder, 
  name, 
  value, 
  defaultValue,
  width,
  height,
  icon,
  prefix, 
}, ref)=>{
  return(
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container 
        ref={ref}
        prefix={prefix}
        icon={icon}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        type={type}
        widt={width}
        height={height}
      />
    </Wrapper>
  )
})
export default Input