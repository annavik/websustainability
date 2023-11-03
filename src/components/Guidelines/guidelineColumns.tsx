import { Guideline } from "../../models/guideline";
import { TableColumn } from "../Table/types";

export const guidelineColumns: TableColumn<Guideline>[] = [
  {
    id: "guideline",
    name: "Guideline",
    sortField: "index",
    renderCell: (item) => <span>{item.title}</span>,
  },
  {
    id: "effort",
    name: "Effort",
    sortField: "effort",
    renderCell: (item) => <span>{item.effortLabel}</span>,
  },
  {
    id: "impact",
    name: "Impact",
    sortField: "impact",
    renderCell: (item) => <span>{item.impactLabel}</span>,
  },
];
