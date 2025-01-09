/* eslint-disable react-refresh/only-export-components */
import { ColumnDef } from "@tanstack/react-table";
import StarshipTable from "../../../shared/table/StarshipTable";
import { useStarshipQuery } from "./starship-query";

export type columnProps = {
  id: string;
  name: string;
  model: string;
  class: string;
  passenger: string;
  length:string;
  character: string;
};

export const columns: ColumnDef<columnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "id",
    header: "Id",
  },

];

const Starship = () => {

    const { starshipData, gettingStarships } = useStarshipQuery();

  return (
    <div>
      <h3 className="pb-8 font-Ubuntu font-semibold text-lg text-stone-500">
        Starships
      </h3>
      <StarshipTable
        tableData={starshipData?.results}
        isLoading={gettingStarships}
        tableColumns={columns}
      />
    </div>
  );
};

export default Starship;
