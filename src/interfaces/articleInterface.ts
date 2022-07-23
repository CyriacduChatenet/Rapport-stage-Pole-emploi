interface IArticle {
    title: string;
    description: string;
    preview_image_src: string;
    date: string;
    author : string;
    first_title: string;
    first_part_first_subtitle : string;
    first_part_first_content : string;
    first_part_first_first_image_src : string;
    first_part_first_second_image_src : string;
    second_title: string;
    second_part_first_subtitle : string;
    second_part_first_content : string;
    second_part_first_first_image_src : string;
    second_part_first_second_image_src : string;
    second_part_second_subtitle? : string;
    second_part_second_content? : string;
    second_part_second_first_image_src? : string;
    second_part_second_second_image_src? : string;
    second_part_third_subtitle? : string;
    second_part_third_content? : string;
    second_part_third_first_image_src? : string;
    second_part_third_second_image_src? : string;
    second_part_fourth_subtitle? : string;
    second_part_fourth_content? : string;
    second_part_fourth_first_image_src? : string;
    second_part_fourth_second_image_src? : string;
    second_part_fifth_subtitle? : string;
    second_part_fifth_content? : string;
    second_part_fifth_first_image_src? : string;
    second_part_fifth_second_image_src? : string;
    third_title: string;
}

export default IArticle;