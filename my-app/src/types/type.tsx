export interface INote {
  id: string;
  title: string;
  description: string;
  isTag: boolean;
}
export interface INoteFormData {
  title: string;
  description: string;
}
export interface IFilterQuery {
  filterQuery: string;
  // filterCategory: string;
}
