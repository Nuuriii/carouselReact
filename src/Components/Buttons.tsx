import React from "react";

interface ButtonsProps {
   task: string;
   onClick: () => void;
}

export const Buttons: React.FC<ButtonsProps> = ({ task, onClick }) => {
   return <button onClick={onClick}>{task}</button>;
};
