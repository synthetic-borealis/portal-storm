# Portal Storm

A simple wrapper component for React portals.

## Installation

Run ```yarn add portal-storm``` or ```npm i portal-storm```.

## Usage

```jsx
import React from 'react';
import Portal from 'portal-storm';
import logo from './assets/images/logo.png';

export default function App() {
  return (
    <div className="App">
      <Portal container={document.head}>
        <link rel="preload" as="image" href={logo} type="image/png" />
      </Portal>
      <img className="App__logo" src={logo} alt="logo" />
    </div>
  );
}
```
