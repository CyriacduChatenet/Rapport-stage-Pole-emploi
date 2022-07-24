interface IArticle {
  _id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  preview_image_src: string;
  article_link: string;
  content: [
    {
      subtitle: string;
      content: string;
      first_image_src: string;
      second_image_src: string;
      image_middle_right_src: string;
      image_middle_src: string;
    }
  ];
  stack?: {
    stack_status?: boolean;
    stack?: [
      {
        stack_name? : string;
        technologies?: [
          {
            technologie_name?: string;
            technologie_doc_link?: string;
            technologie_logo_url?: string;
          }
        ];
      }
    ];
  };
  thinks?: {
    thinks_status?: boolean;
    thinks_content?: string;
    thinks_people_List?: [
      {
        name?: string;
        job?: string;
      }
    ];
  };
}

export default IArticle;
