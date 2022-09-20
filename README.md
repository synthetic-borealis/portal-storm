# Portal Storm

![GitHub](https://img.shields.io/github/license/synthetic-borealis/portal-storm)
[![npm version](https://badge.fury.io/js/portal-storm.svg)](https://badge.fury.io/js/portal-storm)
![Tests](https://github.com/synthetic-borealis/portal-storm/actions/workflows/test.yml/badge.svg)

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
