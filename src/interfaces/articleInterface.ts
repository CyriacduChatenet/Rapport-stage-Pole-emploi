interface IArticle {
    title : string;
    description : string;
    author : string;
    date : string;
    preview_image_src : string;
    article_link : string;
    content : [
        {
            subtitle : string;
            content: string;
            first_image_src : string;
            second_image_src : string;
            image_position: string;
        },
        {
            subtitle : string;
            content: string;
            first_image_src : string;
            second_image_src : string;
            image_position: string;
        },
        {
            subtitle : string;
            content: string;
            first_image_src : string;
            second_image_src : string;
            image_position: string;
        }
    ]
    stack : {
        backend : [
            {
                technologie_name : string;
                technologie_doc_link : string;
                technologie_logo_url : string;
            }
        ]
        frontend : [
            {
                technologie_name : string;
                technologie_doc_link : string;
                technologie_logo_url : string;
            }
        ]
        design : [
        {
            technologie_name : string;
            technologie_doc_link : string;
            technologie_logo_url : string;
        }]
        devops : [
            {
                technologie_name : string;
                technologie_doc_link : string;
                technologie_logo_url : string;
            }
        ]
        product_management : [
            {
                technologie_name : string;
                technologie_doc_link : string;
                technologie_logo_url : string;
            }
        ]
    },
    thinks : {
        thinks_status : boolean;
        thinks_content : string;
        thinks_people_List : [
            {
                name : string;
                job : string;
            }
        ]
    }
}

export default IArticle;