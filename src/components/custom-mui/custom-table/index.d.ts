import React from "react";

export interface IExportItem {
  text: string;
  icon?: React.ReactNode
  isActive?: boolean,
  onClick?: () => void
}

export interface IImportItems {
  text: string;
  icon?: React.ReactNode
  isActive?: boolean,
  onClick?: () => void
}