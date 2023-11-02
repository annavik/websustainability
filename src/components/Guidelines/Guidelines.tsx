import { Guideline } from "../../models/guideline";
import { useGuidelines } from "../../utils/useGuidelines";
import { Table } from "../Table/Table";
import { TableColumn } from "../Table/types";

const guidelineColumns: TableColumn<Guideline>[] = [
  {
    id: "id",
    name: "Id",
    renderCell: (item) => <span>{item.id}</span>,
  },
  {
    id: "title",
    name: "Title",
    sortField: "title",
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

export const Guidelines = () => {
  const { guidelines, isLoading, isError } = useGuidelines();

  if (isError) {
    return <span>Something went wrong!</span>;
  }

  if (isLoading || !guidelines) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <Table items={guidelines} columns={guidelineColumns} />
    </div>
  );
};
