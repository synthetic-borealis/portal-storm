import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  container: HTMLElement;
  children: ReactNode;
}

export default function Portal({ container, children }: PortalProps): React.ReactPortal {
  return ReactDOM.createPortal(children, container);
}
