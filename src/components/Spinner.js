import React from 'react';
import './Spinner.css'

const Spinner = React.forwardRef((_,ref) => <div style={{height: 80}}>
<div ref={ref} className="loader">Loading...</div>
  </div>)

export default Spinner;
