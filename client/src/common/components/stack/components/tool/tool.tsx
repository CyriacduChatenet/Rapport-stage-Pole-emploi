import './tool.css';
import { ITechnologie } from './types/technologie';

export const Tool = ({technologie_name, technologie_logo_url, technologie_doc_link} : ITechnologie) => {
    return (
        <a href={technologie_doc_link}><div id="tool" style={{backgroundImage : `url(${technologie_logo_url})`}}></div></a>
    )
}