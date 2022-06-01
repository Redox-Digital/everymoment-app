import React from 'react';
import { Link } from 'react-router-dom';

interface SecondaryMenuProps {
  children: React.ReactNode;
}

export default function SecondaryMenu(props: SecondaryMenuProps) {
  return <nav className="secondaryMenu">{props.children}</nav>;
}
