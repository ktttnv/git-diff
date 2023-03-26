import { FunctionComponent } from "react";
import FileSplitViewer from "./FileSplitViewer/FileSplitViewer";
import FileUnifiedViewer from "./FileUnifiedViewer/FileUnifiedViewer";
import { FileViewerProps, FileViewerType } from "./fileViewerTypes";

const FileViewer: FunctionComponent<FileViewerProps> = ({fileViewer}) => {
  if (fileViewer === FileViewerType.Split) return <FileSplitViewer/>
  return <FileUnifiedViewer/>
}

export default FileViewer;
