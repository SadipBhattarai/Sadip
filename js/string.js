// Write a js function that converts string to lower case.

// const toLower = (text="") => String(text).toLowerCase();

// console.log(toLower("Sadip BHATTARAI"));
// console.log(toLower(123));

// Write a js function to convert long text to ...
// "Ram is a teacher at Broadway" => "Ram is a ...."; (truncate)

// Write a js function to convert text to slug
// "Raktim is a teacher" => "raktim-is-a-teacher"

// Write a function to check if the phone number is a mobile number or not
// 10 digits
//  phone number starts with 98

// const trunc = (paragraph= "") => 
//     String(paragraph).length > 9 
//     ? String(paragraph).slice(0,9).concat("...")
//     : String(paragraph);
// console.log(trunc("Ram is a teacher at Broadway."));


const truncate = (text="") => {
    const textData = String(text);
    const textLength = textData.length;
    if (textLength >9){
    const remainingText = textData.slice(0, 9);
    return remainingText.concat("...");
    }
    else {
        return textData;
    }
    
};
const data = truncate("Ram is a teacher at Broadway.");

console.log(data);

// Write a js funciton to create a Proper Case
// "raktim shrestha" => "Raktim Shrestha"

// Write a js function to clean the data
// "    Raktim      Shrestha    " => "Raktim Shrestha"

// Write a js function to convert any number to formatted number
// 1000 => 1,000
// 10000 => 10,000; 1000000 => 1,000,000

// Wrie a js function to check if the string contains the word or not
// "Raktim is a teacher" => search Teacher => true
// "Raktim is a teacher" => search father => false

const properCase = (data = "") => {
    const text = String(data).toLowerCase();
    let result = "";
    let check = true;
    for (let i= 0; i < text.length; i++) {
        const char = text[i];
        if  (check){
            result += char.toUpperCase();
            check = false;
        } else if(char === " ") {
            result += char;
            check = true;
        }else {
            result += char;
        }
    }
    return result;
};

console.log(properCase("raktim kuMar sHreStha"));

// Format Numbers

