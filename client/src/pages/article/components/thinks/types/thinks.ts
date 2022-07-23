export interface IThinks {
    thinks_status?: boolean;
    thinks_content: string;
    thinks_people_List: [
        {
            name: string;
            job: string;
        }
    ]
};

export interface IThinksList {
    name: string;
    job: string;
}