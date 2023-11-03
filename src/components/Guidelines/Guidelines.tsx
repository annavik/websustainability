import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import { useGuidelines } from "../../utils/useGuidelines";
import { Table } from "../Table/Table";
import styles from "./Guidelines.module.css";
import { guidelineColumns } from "./guidelineColumns";

export const Guidelines = () => {
  const { guidelines = [], isLoading, isError } = useGuidelines();
  const [searchString, setSearchString] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(guidelines ?? [], {
        keys: [
          {
            name: "title",
            weight: 1,
          },
        ],
        threshold: 0.5,
        shouldSort: false,
      }),
    [guidelines]
  );

  if (isError) {
    return <span>Something went wrong!</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const filteredGuidelines =
    searchString.length > 1
      ? fuse.search(searchString).map((result) => result.item)
      : guidelines;

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Table items={filteredGuidelines} columns={guidelineColumns} />
    </div>
  );
};
