import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export interface PortalProps {
  container: HTMLElement;
  children: ReactNode;
}

export default function Portal({ container, children }: PortalProps): React.ReactPortal {
  return ReactDOM.createPortal(children, container);
}

Portal.propTypes = {
  container: PropTypes.instanceOf(HTMLElement).isRequired,
  children: PropTypes.node.isRequired,
};
