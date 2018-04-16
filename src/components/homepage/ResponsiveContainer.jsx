import PropTypes from 'prop-types'
import React from 'react'

import { MobileContainer } from './MobileContainer'
import { DesktopContainer } from './DesktopContainer'

export const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}