import { Dispatch, SetStateAction } from "react";

export interface IPaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number;
}
