import React from 'react';

function SizedBox({ width, height }: { width?: any; height?: any }) {
  return <div style={{ width, height }}></div>;
}

export default SizedBox;
