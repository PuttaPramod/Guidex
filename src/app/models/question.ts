export interface Question {
  text: string;
  options: { label: string; score: number }[];
}
