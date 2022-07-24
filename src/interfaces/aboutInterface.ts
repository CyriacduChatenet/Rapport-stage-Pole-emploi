export interface IAbout {
    _id? : string;
    title: string;
    preview_image_src : string;
    location : string;
    body : {
        content : string;
        profile_picture_src : string;
    },
    skills : [
        {
            name : string;
        }
    ],
    missions : [
        {
            job : string;
            company : string;
            date : string;
        }
    ],
    stack: {
        stack_status: boolean;
        stack: [
          {
            stack_name : string;
            technologies: [
              {
                technologie_name: string;
                technologie_doc_link: string;
                technologie_logo_url: string;
              }
            ];
          },
          {
            stack_name : string;
            technologies: [
              {
                technologie_name: string;
                technologie_doc_link: string;
                technologie_logo_url: string;
              }
            ];
          },
          {
            stack_name : string;
            technologies: [
              {
                technologie_name: string;
                technologie_doc_link: string;
                technologie_logo_url: string;
              }
            ];
          },
          {
            stack_name : string;
            technologies: [
              {
                technologie_name: string;
                technologie_doc_link: string;
                technologie_logo_url: string;
              }
            ];
          },
          {
            stack_name : string;
            technologies: [
              {
                technologie_name: string;
                technologie_doc_link: string;
                technologie_logo_url: string;
              }
            ];
          }
        ];
      };
}