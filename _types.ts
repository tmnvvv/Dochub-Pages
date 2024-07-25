export type IClipboardValue = string


export interface IGotoParams {
    id: string;
    source: string;
    entity: string;
  }

  export interface IProjectMode {
    mode: string
  }

  export interface IUmlSourceCode {
    uml: string
  }

  export interface ISourceDownloadParams {
    content: string;
    title: string;
    description: string;
    extension: string;
  }

  export interface ISourceSchema {
    schema: string;
  }

  export interface IClipboardData<T = IClipboardValue> {
    data: T
  }

  export interface IFileContent<T = string> {
    source: string; 
    content: T
  }

  export interface ICodeMetadata {
    code: string;
    metadata: string;
  }