import { Tool } from './components/tool/tool';
import './stack.css';
import { IStack } from './types/stack';

export const StackBlock = ({technologies, stack_name} : IStack) => {
    return (
        <li id="stack">
            <h4 className="stackTitle">{stack_name}</h4>
            <ul className="toolsList">
                {technologies.map((tool) => <Tool technologie_name={tool.technologie_name} technologie_logo_url={tool.technologie_logo_url} technologie_doc_link={tool.technologie_doc_link} />)}
            </ul>
        </li>
    )
}