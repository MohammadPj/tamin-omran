"use client";
import React, { FC, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';

interface CustomCKEditorProps {
  onChange: (data: string) => void
}

const CustomCKEditor: FC<CustomCKEditorProps> = ({onChange}) => {
  const editorRef = useRef<any>();

  return (
    <div>
      <CKEditor
        ref={editorRef}
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              'undo', 'redo',
              '|', 'heading',
              '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
              '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
              // '|', 'uploadImage',
              'blockQuote', 'codeBlock',
              '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
            ],
          },
          heading: {
            options: [
              {
                model: "paragraph",
                title: "Paragraph",
                class: "ck-heading_paragraph",
              },
              {
                model: "heading1",
                view: "h1",
                title: "Heading 1",
                class: "ck-heading_heading1",
              },
              {
                model: "heading2",
                view: "h2",
                title: "Heading 2",
                class: "ck-heading_heading2",
              },
              {
                model: "heading3",
                view: "h3",
                title: "Heading 3",
                class: "ck-heading_heading3",
              },
              {
                model: "heading4",
                view: "h4",
                title: "Heading 4",
                class: "ck-heading_heading4",
              },
              {
                model: "heading5",
                view: "h5",
                title: "Heading 5",
                class: "ck-heading_heading5",
              },
              {
                model: "heading6",
                view: "h6",
                title: "Heading 6",
                class: "ck-heading_heading6",
              },
            ],
          },
          placeholder: "محتوا خود را وارد کنید",
          language: 'fa'
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log( 'Editor is ready to use!', editor );


        }}
        onChange={(event, editor) => {
          const value = editor.data.get()

          onChange(value)
        }}
        onBlur={(event, editor) => {
          // console.log( 'Blur.', editor );
          // console.log('a', editor.data.get())
        }}
        onFocus={(event, editor) => {
          // console.log( 'Focus.', editor );
        }}
      />
    </div>
  );
};

export default CustomCKEditor;
