import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Routes />
    </>
  );
}
