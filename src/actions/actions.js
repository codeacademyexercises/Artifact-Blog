export const CLAP_UNCLAP = 'CLAP_UNCLAP';
export const LIKE_DISLIKE = 'LIKE_DISLIKE';

export const clap = (index)=>{
    return {
        type: CLAP_UNCLAP,
        index,
    }
}

export const like = (index)=>{
    return {
        type: LIKE_DISLIKE,
        index,
    }
}