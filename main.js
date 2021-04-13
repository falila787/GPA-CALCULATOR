// const add = document.querySelector("#add");
// const courseCode = document.querySelector("#course-code");
// const unitLoad = document.querySelector("#unit-load");
// const grade = document.querySelector("#grade");
// const tbody = document.querySelector("#tbody");
// const tfoot = document.querySelector("#tfoot");
// const table = document.querySelector("#table");
// const calcGp = document.querySelector("#calc-gp");
// const clear = document.querySelector("#clear");

// let gpArry = [];

// add.addEventListener("click", () => {
//   if (
//     courseCode.value === "" ||
//     unitLoad.value <= 0 ||
//     grade.selectedIndex === 0
//   ) {
//     alert("Wrong input,check and try again");
//   } else {
//     const tr = document.createElement("tr");
//     const tdCourseCode = document.createElement("td");
//     tdCourseCode.innerHTML = courseCode.value;
//     const tdUnitLoad = document.createElement("td");
//     tdUnitLoad.innerHTML = unitLoad.value;
//     const tdGrade = document.createElement("td");
//     tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
//     tr.appendChild(tdCourseCode);
//     tr.appendChild(tdUnitLoad);
//     tr.appendChild(tdGrade);
//     tbody.appendChild(tr);
//     table.classList.remove("display-none");
//     calcGp.classList.remove("display-none");
//     clear.classList.remove("display-none");
//     gpArry.push({
//       unitLoad: unitLoad.value,
//       grade: grade.options[grade.selectedIndex].value,
//     });
//     console.log(gpArry);
//     courseCode.value = "";
//     unitLoad.value = "";
//     grade.selectedIndex = "0";
//   }
// });
// //you can use onclick event here instead of the event listener.
// calcGp.addEventListener("click", () => {
//   let unitLoads = 0,
//     productOfUnitLoadsAndGrades = 0,
//     sumOfProductOfUnitLoadsAndGrades = 0;

//   gpArry.forEach((result) => {
//     unitLoads += parseInt(result.unitLoad);
//     productOfUnitLoadsAndGrades =
//       parseInt(result.unitLoad) * parseInt(result.grade);
//     sumOfProductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
//   });
//   const tr = document.createElement("tr");

//   tdTotalUnitLoad = document.createElement("td");
//   tdTotalUnitLoad.innerHTML = `your total unit load is ${unitLoads}`;

//   tdGpa = document.createElement("td");
//   tdGpa.setAttribute("colspan", "2");
//   tdGpa.innerHTML = `your GPA is ${(
//     sumOfProductOfUnitLoadsAndGrades / unitLoads
//   ).toFixed(2)} `;

//   tr.appendChild(tdTotalUnitLoad);
//   tr.appendChild(tdGpa);
//     if (tfoot.querySelector("tr") !== null) {
//         tfoot.querySelector("tr").remove();
//     }
//   tfoot.appendChild(tr);
// });
// //you can use onclick event here instead of the event listener. 
// clear.addEventListener("click", () => {
//   gpArry = [];
//   tbody.querySelectorAll("*").forEach((child) => child.remove());
//   if (tfoot.querySelector("tr") !== null) {
//     tfoot.querySelector("tr").remove();
//   }

//   table.classList.add("display-none");
//   calcGp.classList.add("display-none");
//   clear.classList.add("display-none");
// });









$(document).ready(function () {
  let add = $("#add");
  let courseCode = $("#course-code");
  let unitLoad = $("#unit-load");
  let grade = $("#grade");
  let tbody = $("#tbody");
  let tfoot = $("#tfoot");
  let table = $("#table");
  let calcGp = $("#calc-gp");
  let clear = $("#clear");
  add.click(function () {
    if (
      courseCode.value === "" ||
      unitLoad.value <= 0 ||
      grade.selectedIndex === 0
    ) {
      alert("Wrong input,check and try again");
    } else {
      const tr = document.createElement("tr");
      const tdCourseCode = document.createElement("td");
      tdCourseCode.innerHTML = courseCode.value;
      const tdUnitLoad = document.createElement("td");
      tdUnitLoad.innerHTML = unitLoad.value;
      const tdGrade = document.createElement("td");
      tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
      tr.appendChild(tdCourseCode);
      tr.appendChild(tdUnitLoad);
      tr.appendChild(tdGrade);
      tbody.appendChild(tr);
      table.remove("display-none");
      calcGp.remove("display-none");
      clear.remove("display-none");

      let gpArry = [];
      gpArry.push({
        unitLoad: unitLoad.value,
        grade: grade.options[grade.selectedIndex].value,
      });

      console.log(gpArry);
      courseCode.value = "";
      unitLoad.value = "";
      grade.selectedIndex = "0";
    }
  });
  calcGp.click(function () {
    unitLoad = 0,
      productOfUnitLoadsAndGrades = 0,
      sumOfProductOfUnitLoadsAndGrades = 0;

    gpArry.forEach((result) => {
      unitLoad += parseInt(result.unitLoad);
      productOfUnitLoadsAndGrades =
        parseInt(result.unitLoad) * parseInt(result.grade);
      sumOfProductOfUnitLoadsAndGrades += productOfUnitLoadsAndGrades;
    });
    const tr = document.createElement("tr");

    tdTotalUnitLoad = document.createElement("td");
    tdTotalUnitLoad.innerHTML = `your total unit load is ${unitLoad}`;

    tdGpa = document.createElement("td");
    tdGpa.setAttribute("colspan", "2");
    tdGpa.innerHTML = `your GPA is ${(
      sumOfProductOfUnitLoadsAndGrades / unitLoads
    ).toFixed(2)} `;

    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdGpa);
    if (tfoot.add("tr") !== null) {
      tfoot.add("tr").remove();
    }
    tfoot.appendChild(tr);
  });
  //you can use onclick event here instead of the event listener. 
  clear.click(function () {
    gpArry = [];
    tbody.all("*").forEach((child) => child.remove());
    if (tfoot.add("tr") !== null) {
      tfoot.add("tr").remove();
    }

    table.add("display-none");
    calcGp.add("display-none");
    clear.add("display-none");

  });
});
