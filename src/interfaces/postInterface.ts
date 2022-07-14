import { IStack } from './stackInterface';

export interface IPost {
    preview_title: string,
    preview_description: string,
    preview_picture_url: string,
    date: string,
    title: string,
    first_part_subtitle: string,
    first_part_text: string,
    second_part_subtitle: string,
    second_part_first_subtitle: string,
    second_part_first_text: string,
    second_part_first_picture: string,
    second_part_second_subtitle: string,
    second_part_second_text: string,
    second_part_second_first_picture: string,
    second_part_second_second_picture: string,
    second_part_third_subtitle: string,
    second_part_third_text: string,
    second_part_third_picture: string,
    second_part_fourth_subtitle: string,
    stack: IStack,
    third_part_subtitle: string,
    third_part_text: string
};