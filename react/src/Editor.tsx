import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import { useEffect, useRef, useState } from 'react';
import './Editor.css';

function Editor() {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	useEffect(() => {
        setEditor((editor) => {
            if (editor) return editor;
            return monaco.editor.create(monacoEl.current!, {
                value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
                language: 'typescript'
            });
        });

		return () => editor?.dispose();
	}, [editor]);

	return <div className="editor" ref={monacoEl}></div>;
};

export default Editor
