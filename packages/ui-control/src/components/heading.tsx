import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'

export const StyledHeading = styled.h1``

export interface HeadingProps {
  children: ReactNode
}

export const Heading: FC<HeadingProps> = ({ children }: HeadingProps) => (
  <StyledHeading>{children}</StyledHeading>
)
