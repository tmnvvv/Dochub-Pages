import { IGotoParams, 
    IClipboardData, 
    IProjectMode, 
    ISourceDownloadParams, 
    ISourceSchema, 
    IUmlSourceCode, 
    IFileContent,
    ICodeMetadata} from "./_types";
  
  
    export class BasePapiEvents {
  
      goTo(params: IGotoParams) {
        // TODO: добавить реализацию
      }
      applyEntitySchema(schema: ISourceSchema) {
        // TODO: добавить реализацию
      }
      registerLazyLoadedDiagrams() {
          // TODO: добавить реализацию
      }
    }
  
    export class RenderPapiEvents extends  BasePapiEvents {
      renderPlantUml(uml: IUmlSourceCode) {
          // TODO: добавить реализацию
      }
    }
  
    export class FileWorker extends RenderPapiEvents {
      initProject(mode: IProjectMode) {
        // TODO: добавить реализацию
      }
      download(source: ISourceDownloadParams) {
        // TODO: добавить реализацию
      }
    }
  
    export class IdeaPapiPlugin extends FileWorker{
  
      messagePull() {
        // TODO: добавить реализацию
      }
      pushFile(content: IFileContent) {
        // TODO: добавить реализацию
      }
      pushCode(metadata: ICodeMetadata) {
        // TODO: добавить реализацию
      }
      copyToClipboard(data: IClipboardData) {
        // TODO: добавить реализацию
      }
    }
  
    export class VsCodePapiPlugin extends FileWorker{
      
      loadingHtmlDocumentEvent() {
        // TODO: добавить реализацию
      }
      checkIsRootManifest() {
        // TODO: добавить реализацию
      }
    }