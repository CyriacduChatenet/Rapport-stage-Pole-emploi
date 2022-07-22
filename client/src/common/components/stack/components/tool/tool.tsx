import './tool.css';
import { ITool } from "./types/tool";

export const Tool = ({tool_name, tool_image_url} : ITool) => {
    return (
        <a href={tool_name}><div id="tool" style={{backgroundImage : `url(${tool_image_url})`}}></div></a>
    )
}