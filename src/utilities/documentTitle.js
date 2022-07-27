import { useEffect } from "react";
export const useDocumentTitle = (title) => {
    useEffect(() => {
        if(title!=undefined)
        document.title = `${title} | RE-Kick`;
    }, [title]);
};