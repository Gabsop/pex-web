import { Column } from "react-table";

export const columnsDataComplex = [
  {
    Header: "Clube",
    accessor: "clube",
  },
  {
    Header: "Clientes",
    accessor: "clientes",
  },
  {
    Header: "Preço Médio",
    accessor: "preco_medio",
  },
];

export type ColumnData = Column[];

export type TableData = Column<{
  clube: string;
  // clientes: string;
  // preco_medio: string;
}>;

export type TableProps = {
  title: string;
  secondaryTitle?: string;
  columnsData: ColumnData;
  tableData: TableData[];
};
