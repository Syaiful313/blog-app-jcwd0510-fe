import { FC } from "react";
import { Label } from "./ui/label";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  label: string;
  value: string;
  isError: boolean;
  onChange: (value: string) => void;
}

const RichTextEditor: FC<RichTextEditorProps> = ({
  label,
  value,
  isError,
  onChange,
}) => {
  const quilModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ["bold", "italic"]],
  };
  return (
    <div className="spaye-y-1,5 flex flex-col">
      <Label>{label}</Label>
      <QuillEditor
        value={value}
        onChange={onChange}
        modules={quilModules}
        className="h-[300px] pb-16"
      />
      {isError && <p className="text-red-500">{label} is required</p>}
    </div>
  );
};

export default RichTextEditor;
