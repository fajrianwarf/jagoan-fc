let today = new Date();
export let date = ('0' + today.getDate()).slice(-2) + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();

export const dobReverser = (dob: any) => {
    return dob.split('-').reverse().join('-');
};

export const ageCalc = (age: string) => {
    let splitDate = date.split('-');
    let splitAge = age.split('-');
    let trueAge = parseInt(splitDate[2]) - parseInt(splitAge[2]);

    return trueAge.toString();
};