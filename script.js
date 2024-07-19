// let a = "stringt";
/////[0,1,2,3,4,5];
// console.log(a.toUpperCase());

// console.log(a.length);
// console.log(a.charAt(5));
// console.log(a.toLowerCase());

// console.log(a.slice(0,4));

// console.log(a.replace("ng" , "gn"));
// console.log(a.indexOf("t"));
// console.log(a.concat("abc", a));

// let b = "work from home";
// console.log("the string is ", a + " and ", b);
// console.log(`the string is ${a} and ${b}`);

// let obj = {
//     id:10010, 
//     myname : "hii", 
//     pensOcc: {
//         pen1:"ThePen", 
//         pen2:"Parekr", 
//         pen3:"ParkRounded", 
//         get desc() {
//             return this.pen1;
//         }
//     },
// }

// console.log(obj.pensOcc.pen2);
// console.log(obj.pensOcc.desc);

// console.log(`abc${'"'}ab`); abc"ab

// obj.pensOcc.desc = "this is desc";
// console.log(obj);

// let b = [6,7,8,9];
// console.log(a);
// console.log(a.toString());
// console.log(a.push("name"));
// console.log(a.pop());
// console.log(a.shift());
// console.log(a.unshift("ADDED"));
// console.log(a);

//             delete a[3];
// console.log(a);
// console.log(b);
// console.log(a.flat());
// let c = a.concat(b);
// console.log(c);
            // console.log(a.concat(b));

            // console.log(a.sort());
            
            // console.log(a.reverse());
            // document.getElementById("some").value = a.toString();
            
            // let newArray = a.forEach(e = (value, index, array) => {
                //     a.map(e = () => {
                    //         return val+2;
                    //     })
                    // })
                    
                    // counter-=2;
                    // counter = counter - 2;
                    
    // let a = [5,6,4,7,1,2,3];
    // a.forEach(e = (val, ind) => {
    //     console.log("THE VALUES ARE " + ind );
    // })

    // let arr = [1,2,[3,4],5,6];
    // console.log(arr);
    // console.log(arr.flat());


    // ARRAY TYPES

    // single dimentional
    // 2d dimentional [2,3,4]
                 //   [4,5,6]
    // nested array [1,2[3,4],5,6]
    // JAGGED ARRAY
    // [2,3]
    // [4,5,6,7]
    // mixed Array [1,2,3,true,"string"]

    // array Masking

    // Empty values
    // Undefined values
    // null
    // Missing / wrong entries


    // function func (a,b) {
    //     c = a+b;

    // }
    // func(1,2);

    // const func = (a) => {
    //     c = a+b;
    // }
    // func(1);
    // let counter = 0;
    // const decrease = () => {
        
    // }
    // const increase = () => {

    // }
    // let output = document.getElementById("text").value;
    // output.textContent = counter;


    // a.forEach(e = (value, index, array) => {
    //     return (value+2 + "index is " + index + "array is "+ array);
    // })
    
    
// ---------------------------------------------------------------------------------------------------------------------------------------------------
// Given three strings S, S1, and S2 consisting of N, M, and K characters respectively, the task is to modify the string S by replacing all the substrings S1 with the string S2 in the string S.
// Examples:
// Input: S = “abababa”, S1 = “aba”, S2 = “a”
// Output: aba
// Explanation:
// Change the substrings S[0, 2] and S[4, 6](= S1) to the string S2(= “a”) modifies the string S to “aba”. Therefore, print “aba”.
// Input: S = “geeksforgeeks”, S1 = “eek”, S2 = “ok”
// Output: goksforgoks





    // let s = "geeksforgeeks",s1 = "eek",s2 = "ok", newStr = "";
    // if(s.includes(s1)){
    //     newStr = s.replaceAll(s1, s2);
    // }
    // else{
    //     console.log("substring doesnot exist! ")
    // }
    // console.log(newStr);



    // console.log(a.flat());
    // a = (a.map(val =>{
    //     return val+1;
    // }))
    // console.log(a);

    // const greatThanFour = (val => {
    //     if(val >= 4 )
    //     {
    //         return true;
    //     }
    //     else{
        //         return false;
        //     }
    // })
    // console.log(a.filter(greatThanFour));
    
    // const useRefuserAb = ((total, next) => {
        //     return total + next;
        // })
        // console.log(a.reduce(useRefuserAb));
        
        
        // let a = [1,2,3,4,5,6];
        // let arr = [4,5,a[0],a[1],a[2],a[3],a[4],a[5]];
        // let arr = [4,5,...a];
        // console.log(arr);

        // const addition =(a,b,c) => {
        //     return a+b+c;
        // }
        // let arr = [1,2,3];
        // console.log(addition(...arr));
        // let arr1 = [...arr];
        // console.log(arr1);

        // let arr = [1,2,3,4];
        // let first = arr[0];
        // console.log(first);           2016

        // let arr = [1,2,3,4];
        // let first = arr.slice(1);
        // console.log(first);           2019 

        // let [first, second, ...rest] = [...arr];
        // console.log(first);
        // console.log(second);
        // console.log(rest);           // 2024

        // `${}`
        
        const func = (...arr) => {
            let sum = arr.reduce((total, next) => {
                return total+next;
            })
            console.log(sum);
        }
        func(1,2,3,4,5,6);

        // [[1,2],[3,4,8], [5,6],[7,8]]
        // REDUSE AND FORMULATE EXPONENTIOAL VALUES OF PARTICULAR SUBARRAYS
        // flat 
        // FILTER AND PRINT UPTO 20 VAL 


        

    


    

// array -> 2 elements nikalne hai and one element push krna hai aur wo ek string hona chiye and 2 elements front se push krne hai 2 element and ek element pop krna hai jo existing hoga aur middle elemnt ko change krna hai with "abc"

    // a[2] = "abc";

//--------------------------------------------------------------------------------------------


