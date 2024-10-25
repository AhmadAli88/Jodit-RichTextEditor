import React, { useState, useRef, useCallback } from 'react';
import JoditEditor from 'jodit-react';
import debounce from 'lodash.debounce';

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
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
      'table', 'link', '|',
      'left', 'center', 'right', 'justify', '|',
      'undo', 'redo', '|',
      'hr', 'eraser', 'fullsize'
    ],
    placeholder: 'Start typing...',
    enableDragAndDropFileToEditor: true,
    width: '100%',
    removeButtons: [],
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    theme: 'default',
    saveModeInCookie: false,
    spellcheck: true,
    inline: false,
  };

  // Debounced onChange handler
  const handleChange = useCallback(
    debounce((newContent) => {
      setContent(newContent);
    }, 300), // Adjust delay as needed
    []
  );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onChange={handleChange}
    />
  );
};

export default TextEditor;
