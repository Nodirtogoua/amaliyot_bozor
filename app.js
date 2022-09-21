/* Familiya va ism  o'rtasiga probel qoyish */

// let a = "PardayevNodirjon";
// function nodir(a) {
//     b = a;
//     for (i = 1; i < a.length; i++) {
//         if (b[i] == a[i].toUpperCase()) {
//             b = i;
//         }
//     }
//     console.log(a.slice(0, b) + " " + a.slice(b, a.lenght));
// }
// nodir(a);




/* F.I.O  o'rtasiga probel qoyish */

// let a = "PardayevNodirjonSodiqjonovich";
// function nodir(a) {
//     b = a;
//     c = a;
//     for (i = 1; i < a.length; i++) {
//         if (b[i] == a[i].toUpperCase()) {
//             b = i;
//         }
//     }
//     for (i = 10; i < a.length; i++) {
//         if (c[i] == a[i].toUpperCase()) {
//             c = i;
//         }
//     }
//     console.log(a.slice(0, b) + " " + a.slice(b, c) + " " + a.slice(c, a.length));
// }
// nodir(a);




/* Homework */

// const a = "      some text here    ";
// function nodir(a){
//     b = a.split(" ");
//     d = "";
//     for(i = 0; i < b.length; i++){
//         if(b[i] != ""){
//             d = d + b[i] + " ";
//         }
//         c = d.split(" ");
//         j = c.splice(0, c.length-1);
//     }
//     return j.join(" ");
// }
// console.log(nodir(a));