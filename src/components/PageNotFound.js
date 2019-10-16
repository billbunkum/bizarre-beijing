import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h3>Ooops! Page not found</h3>
    <h3>倒霉！网站找不到了</h3>
    <Link to="/">Go Home</Link>
  </div>
);

export default PageNotFound;