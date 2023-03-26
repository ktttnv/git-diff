export enum FileViewerType {
  Split = "split",
  Unified = "uni",
}

export type FileViewerProps = {
  fileViewer: FileViewerType,
}
