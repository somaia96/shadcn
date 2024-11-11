/**
 * 
 * @param {string} txt - the input text to be sliced 
 * @param {number} [max = 150] - the maximum length before transaction
 * @returns The sliced text , with an ellipsis (...) appended if truncated.
 */ 


export function txtSlicer(txt: string, max: number = 150){
    if(txt.length >= max) return `${txt.slice(0,max)} ...`;
    return txt;
}
