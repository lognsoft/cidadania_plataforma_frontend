"use client";
import React from "react";
import { CheckRegisterContent } from "../check-register-content";
import { IconButton } from "../icon-button";

interface ICheckRegisterProps {
  label: string;
  children: React.ReactNode;
  onCheck?: () => void;
  onEdit?: () => void;
}

const CheckRegister = ({
  label,
  children,
  onCheck,
  onEdit,
}: ICheckRegisterProps) => {
  return (
    <div>
      <div className="inline-flex items-center gap-3">
        <CheckRegisterContent label={label}>{children}</CheckRegisterContent>
        <ul className="flex items-center gap-2">
          <li className="flex items-center justify-center">
            <IconButton
              src="/images/icons/icon-check.svg"
              alt="Ícone de check"
              onClick={onCheck}
            />
          </li>
          <li className="flex items-center justify-center">
            <IconButton
              src="/images/icons/icon-edit.svg"
              alt="Ícone de editar"
              onClick={onEdit}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckRegister;
