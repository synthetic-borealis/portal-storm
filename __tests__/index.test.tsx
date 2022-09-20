// noinspection HtmlUnknownTarget

import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Portal from '../src';

describe('Portal', () => {
  afterEach(() => cleanup);

  it('renders to the body', () => {
    const rootContainer = document.createElement('div');
    rootContainer.id = 'root';
    document.body.append(rootContainer);
    render(
      <Portal container={document.body}>
        <h1>Hello Mars!</h1>
      </Portal>,
      { container: rootContainer },
    );
    expect(document.body.lastElementChild?.outerHTML).toBe('<h1>Hello Mars!</h1>');
  });

  it('renders to the head', () => {
    const rootContainer = document.createElement('div');
    rootContainer.id = 'root';
    document.body.append(rootContainer);
    render(
      <Portal container={document.head}>
        <link rel="preload" as="image" href="./images/logo.webp" type="image/webp" />
      </Portal>,
      { container: rootContainer },
    );
    expect(document.head.innerHTML)
      .toContain(
        '<link rel="preload" as="image" href="./images/logo.webp" type="image/webp">',
      );
  });

  it('renders to a sibling element', () => {
    const rootContainer = document.createElement('div');
    rootContainer.id = 'root';
    const sibling = document.createElement('div');
    sibling.id = 'sibling';
    document.body.append(rootContainer);
    document.body.append(sibling);
    render(
      <Portal container={sibling}>
        <h1>Hello Mars!</h1>
      </Portal>,
      { container: rootContainer },
    );
    expect(sibling.innerHTML).toBe('<h1>Hello Mars!</h1>');
  });
});
