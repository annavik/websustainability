import { Guideline } from "../../models/guideline";
import { TableColumn } from "../Table/types";
import { Tag } from "../Tag/Tag";
import styles from "./Guidelines.module.css";

export const guidelineColumns: TableColumn<Guideline>[] = [
  {
    id: "guideline",
    name: "Guideline",
    sortField: "index",
    renderCell: (item) => (
      <div>
        <span className={styles.category}>{item.category.label}</span>
        <h3 className={styles.guideline}>{item.title}</h3>
        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <Tag label={tag} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "effort",
    name: "Effort",
    sortField: "effort",
    renderCell: (item) => (
      <span>{[...Array(item.effort)].map(() => "🌱").join(" ")}</span>
    ),
  },
  {
    id: "impact",
    name: "Impact",
    sortField: "impact",
    renderCell: (item) => (
      <span>{[...Array(item.impact)].map(() => "🌍").join(" ")}</span>
    ),
  },
];
