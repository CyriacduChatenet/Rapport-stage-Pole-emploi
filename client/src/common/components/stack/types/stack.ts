import { ITechnologie } from '../components/tool/types/technologie';

export interface IStack {
  _id?: string;
  stack_name: string;
  technologies: ITechnologie[];
}
