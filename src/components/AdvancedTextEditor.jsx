import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const AdvancedTextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const handleImageUpload = async (file) => {
    // Convert the uploaded file to a base64 Data URL
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const base64data = reader.result;
      // Insert the base64 image URL into the editor
      editor.current && editor.current.selection.insertImage(base64data);
    };
  };

  const advancedConfig = {
    readonly: false,
    height: 400,
    toolbarAdaptive: false,
    language: 'en',
    buttons: [
      'source', '|',
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'align', '|',
      'ul', 'ol', '|',
      'table', 'link', 'image', '|',
      'left', 'center', 'right', 'justify', '|',
      'undo', 'redo', '|',
      'hr', 'eraser', 'fullsize'
    ],
    
    placeholder: 'Start typing...',
    enableDragAndDropFileToEditor: true,
    width: '100%',
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    theme: 'default',
    spellcheck: true,

    // Uploader configuration
    uploader: {
      // Instead of a URL, we handle uploads locally
      isSuccess: () => true, // Always return true since we're not calling a server
      process: (file) => {
        // Call handleImageUpload when an image is uploaded
        handleImageUpload(file);
      },
      error: (e) => console.log('Upload error:', e.message)
    }
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={advancedConfig}
      onChange={(newContent) => setContent(newContent)}
      onBlur={() => console.log('Editor blur, current content:', content)}
    />
  );
};

export default AdvancedTextEditor;
