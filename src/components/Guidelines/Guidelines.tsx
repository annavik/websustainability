import { Guideline } from "../../models/guideline";
import { useGuidelines } from "../../utils/useGuidelines";
import { Table } from "../Table/Table";
import { TableColumn } from "../Table/types";

const guidelineColumns: TableColumn<Guideline>[] = [
  {
    id: "id",
    name: "Id",
    renderCell: (item) => <span>{item.Id}</span>,
  },
  {
    id: "title",
    name: "Title",
    renderCell: (item) => <span>{item.Title}</span>,
  },
  {
    id: "effort",
    name: "Effort",
    renderCell: (item) => <span>{item.Effort}</span>,
  },
  {
    id: "impact",
    name: "Impact",
    renderCell: (item) => <span>{item.Impact}</span>,
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
