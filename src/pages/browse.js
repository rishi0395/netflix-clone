import React from 'react';
import BrowserContainer from '../container/browserContainer';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

function Browse() {
  // we need the series and the films
  //  we need slides
  // pass it to the browse container
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({ series, films });

  return <BrowserContainer slides={slides} />;
}

export default Browse;
