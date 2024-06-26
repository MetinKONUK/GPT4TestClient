import Editor from '@monaco-editor/react';
import EditorLoadingScreen from '../unitTestGeneration/EditorLoadingScreen';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateComparisonEditorContent } from '../../redux/features/toCompareListSlice';
import { toast } from 'react-toastify';

const ComparisonEditor = () => {
    const dispatch = useDispatch();
    const editorContent = useSelector((state) => state.toCompareList.focalCode);
    const toCompareList = useSelector(
        (state) => state.toCompareList.toCompareList
    );

    const handleComparisonEditorChange = (editorContent) => {
        dispatch(updateComparisonEditorContent(editorContent));
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.name.endsWith('.py')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target.result;
                handleComparisonEditorChange(fileContent);
            };
            reader.readAsText(file);
        } else {
            toast.error('Only .py files are allowed!');
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (
                event.ctrlKey &&
                (event.key.toLowerCase() === 's' || event.keyCode === 83)
            ) {
                event.preventDefault();
                toast.info('We save it for you, no worries 😏');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            style={{ height: '100%', width: '100%' }}
        >
            <Editor
                height="100%"
                theme="vs-light"
                language="python"
                value={editorContent}
                onChange={handleComparisonEditorChange}
                loading={<EditorLoadingScreen />}
                options={{
                    fontSize: 20,
                    readOnly: toCompareList.length > 0,
                }}
            />
        </div>
    );
};

export default ComparisonEditor;
