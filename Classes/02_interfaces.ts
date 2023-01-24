export interface HasId {
  //Interface cannot have private or protected properties
  id: string;
  printId();
}

export interface HasTitle extends HasId {
  title: string;
}
