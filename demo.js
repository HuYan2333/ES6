const scanf=require('scanf');
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));


    //while(1){
    //     console.log('1---添加一个幸运数字');
    //     console.log('2---显示全部幸运数字');
    //     console.log('3---删除最后一个幸运数字');
    //     console.log('4---退出');
    //     let con=scanf('%d');
    //     if(con===1){
    //         console.log('1---添加一个幸运数字');
    //         console.log('点击回车继续');
    //         scanf('%d');
    //     }
    //     if(con===2){
    //         console.log('2---显示全部幸运数字');
    //         console.log('点击回车继续');
    //         scanf('%d');
    //     }
    //     if(con===3){
    //         console.log('3---删除最后一个幸运数字');
    //         console.log('点击回车继续');
    //         scanf('%d');
    //     }
    //     if(con===4){
    //         console.log('4---退出');
    //         break;
    //     }
    // }



// console.log('欢迎进入幸运数字系统');
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个幸运数字');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1---添加一个幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('4---退出');
//         break;
//     }
// }
// let arr=[];
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个数字');
//     console.log('4---退出');
//     let con=scanf('%d'); 
//     if(con===1){
//         console.log('1---添加一个幸运数字');
//         let x=scanf('%d');
//         arr.push(x);
//         console.log('添加成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部幸运数字');
//         for(let i=0;i<arr.length;i++){
//             let a=arr[i];
//             console.log(a);
//         }
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除一个幸运数字');
//         arr.pop();
//         console.log('删除最后一个');
//         scanf('%d');
//     }
//     if(con===4){
//         consol.log('4---退出');
//     }
// }

// let xinlong={
//     a:1,
//     b:2,
// }
// console.log(xinlong);
// console.log(xinlong.a);
// console.log(`坐标为(${xinlong.a},${xinlong.b})`);

// let arr=[];
// while(1)
// {
//     console.log('1---添加一个坐标');
//     console.log('2---显示全部坐标');
//     console.log('3---删除最后一个坐标');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1---添加');
//         console.log('请输入横坐标：');
//         let x=scanf('%d');
//         console.log('请输入纵坐标：');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x,
//             'y':y
//         };
//         arr.push(zuobiao);
//         console.log('添加成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部');
//         for(let i=0;i<arr.length;i++)
//         {
//             let syk=arr[i];
//             console.log(`第${i+1}坐标为(${syk.x},${syk.y})`);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除');
//         arr.pop();
//         console.log('删除成功');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('4--退出');
//         break;
//     }

// }

console.log('欢迎进入学生成绩管理系统');
let arr=[];
while(1){
    console.log('1---添加学生成绩');
    console.log('2---显示所有学生成绩');
    console.log('3---删除最后一名学生成绩');
    console.log('4---退出');
    let con=scanf('%d');
    if(con===1){
        console.log('1---添加学生成绩');
        
        console.log('请输入学生姓名');
        let name=scanf('%s');
        console.log('请输入语文成绩');
        let chinese=scanf('%d');
        console.log('请输入数学成绩');
        let math=scanf('%d');
        let chengji={
            'name':name,
            'chinese':chinese,
            'math':math
        };
        arr.push(chengji);
        console.log('添加成功');
        scanf('%d');
    }
    if(con===2){
        console.log('2---显示所有学生成绩');
        for(let i=0;i<arr.length;i++){
            let sss=arr[i];
            console.log(`学生：${sss.name}\n语文：${sss.chinese}\n数学：${sss.math}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if(con===3){
        console.log('3---删除最后一名学生成绩');
        arr.pop();
        console.log('删除成功');
        scanf('%d');
    }
    if(con===4){
        console.log('4--退出');
        break;
    }
}


