"use strict";
//data
const ENDASH = "\u2013",
Keywords = [
    ["representation theory", "表現論"],
    ["combinatorics", "組合せ論"],
    ["integrable system", "可積分系"],
    ["quantum group", "量子群"],
    ["quantum symmetric pair", "量子対称対"],
    ["Hecke algebra", "ヘッケ代数"],
    ["crystal", "結晶"],
    ["$\\imath$crystal", "$\\imath$結晶"],
    ["$R$-matrix", "$R$-行列"],
    ["$K$-matrix", "$K$-行列"],
],
Education = [
    {
        type: ["Ph.D. in Science", "博士(理学)"],
        date: "2019-03",
        univ: ["Tokyo Institute of Technology", "東京工業大学"],
        url: ["https://www.titech.ac.jp/english", "https://www.titech.ac.jp/"],
        advisor: ["Satoshi Naito", "内藤聡"],
    },
    {
        type: ["M.S. in Science", "修士(理学)"],
        date: "2016-03",
        univ: ["Tokyo Institute of Technology", "東京工業大学"],
        url: ["https://www.titech.ac.jp/english", "https://www.titech.ac.jp/"],
        advisor: ["Satoshi Naito", "内藤聡"],
    },
    {
        type: ["B.S. in Science", "学士(理学)"],
        date: "2014-03",
        univ: ["The University of Tokyo", "東京大学"],
        url: ["https://www.u-tokyo.ac.jp/en/index.html", "https://www.u-tokyo.ac.jp/ja/index.html"],
        advisor: ["Yoshihisa Saito", "斉藤義久"],
    },
],
ResearchHistory = [    
    {
        from: "2022-04",
        to: "Present",
        at: ["Osaka Central Advanced Mathematical Institute, Osaka Metropolitan University", "大阪公立大学数学研究所"],
        url: ["http://www.sci.osaka-cu.ac.jp/OCAMI/index_e.html", "http://www.sci.osaka-cu.ac.jp/OCAMI/"],
        as: ["JSPS research fellow PD", "日本学術振興会特別研究員 PD"]
    },   
    {
        from: "2021-04",
        to: "2022-03",
        at: ["Osaka City University Advanced Mathematical Institute, Osaka City University", "大阪市立大学数学研究所"],
        url: ["http://www.sci.osaka-cu.ac.jp/OCAMI/index_e.html", "http://www.sci.osaka-cu.ac.jp/OCAMI/"],
        as: ["JSPS research fellow PD", "日本学術振興会特別研究員 PD"]
    },   
    {
        from: "2020-04",
        to: "2021-03",
        at: ["Kyoto University", "京都大学"],
        url: ["https://www.kyoto-u.ac.jp/en", "https://www.kyoto-u.ac.jp/ja"],
        as: ["part-time teacher", "非常勤講師"]
    },   
    {
        from: "2019-10",
        to: "2021-03",
        at: ["Research Institute for Mathematical Sciences, Kyoto University", "京都大学数理解析研究所"],
        url: ["https://www.kurims.kyoto-u.ac.jp/en/index.html", "https://www.kurims.kyoto-u.ac.jp/ja/index.html"],
        as: ["part-time researcher", "非常勤研究員"]
    },   
    {
        from: "2019-04",
        to: "2019-09",
        at: ["Graduate School of Information Science and Technology, Osaka University", "大阪大学情報科学研究科"],
        url: ["https://www.ist.osaka-u.ac.jp/english/", "https://www.ist.osaka-u.ac.jp/japanese/"],
        as: ["project researcher", "特任研究員"]
    },
    {
        from: "2017-04",
        to: "2019-03",
        at: ["Department of Mathematics, Tokyo Institute of Technology", "東京工業大学理学院数学系"],
        url: ["https://www.titech.ac.jp/english", "https://www.titech.ac.jp/"],
        as: ["JSPS research fellow DC2", "日本学術振興会特別研究員"]
    },
];
//data


//
const kw_p = document.getElementById("keywords_p");
let result = ""
for (const kw of Keywords) {
    result += kw[0] + ", "
};
result = result.slice(0,-2);
result += "."
kw_p.textContent = result;


let edu_ul = document.getElementById("edu_ul");
for (const obj of Education) {
    const li = document.createElement("li"),
    div1 = document.createElement("div"),
    div2 = document.createElement("div");
    div1.className = "b_2col_list_1st";
    div2.className = "b_2col_list_2nd";
    div1.textContent = `${obj.type[0]}:`;
    div2.innerHTML = `<a href="${obj.url[0]}">${obj.univ[0]}</a>, ${obj.date}, Supervisor: ${obj.advisor[0]}`;
    li.append(div1, div2);
    edu_ul.append(li);
};


let his_ul = document.getElementById("his_ul");
for (const obj of ResearchHistory) {
    let li = document.createElement("li"),
    div1 = document.createElement("div"),
    div2 = document.createElement("div");
    div1.className = "b_2col_list_1st";
    div2.className = "b_2col_list_2nd";
    div1.textContent = `${obj.from}${ENDASH}${obj.to}:`;
    div2.innerHTML = `<a href="${obj.url[0]}">${obj.at[0]}</a>, ${obj.as[0]}.`;
    li.append(div1, div2);
    his_ul.append(li);
};