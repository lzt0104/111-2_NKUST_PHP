export default function getBMI(weight=75, height=1.7){
    const bmi = weight/(height*height);
    return bmi;
}
