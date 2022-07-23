import IArticle from '../../../../src/interfaces/articleInterface';
export type Children = {
    children : JSX.Element
}

export type ApiDataType = {
    message: string
    status: string
    todos: IArticle[]
    todo?: IArticle
  }