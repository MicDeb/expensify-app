import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>This page doesn't exsist. <Link to="/">Go home</Link></p>
  </div>
)

export default NotFoundPage;
