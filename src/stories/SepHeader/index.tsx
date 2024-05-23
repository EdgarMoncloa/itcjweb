import React from "react";

import { Button } from "../Button";
import "./style.css";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const SepHeader = ({}: HeaderProps) => {
  return <div>Hola</div>;
};

export default SepHeader;
