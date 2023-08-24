var ArrayTask = []
var taskData = JSON.parse(localStorage.getItem('tasks_obj'));

if (taskData != null) {
    ArrayTask = [...taskData]
    display();
}

// console.log(ArrayTask, taskData);

let img = '<img src="./flag-icon/green-flag.png" style="height:30px;"/>'

let dropdownclick = (e) => {
    // console.log(e);
    img = `<img src="./flag-icon/${e}-flag.png" style="height:30px;"/>`
    document.getElementById("dropdown_menu").innerHTML = img
}


// ============== Add ==============

let add = () => {
    var title = document.getElementById("title").value;
    var deadline = document.getElementById("deadline").value;

    var temp = {
        title: title,
        deadline: deadline,
        priority: img
    }
    ArrayTask.push(temp);
    localStorage.setItem('tasks_obj', JSON.stringify(ArrayTask));

    location.reload()

    alert("Data Save Successfully !!!")
}

// ============== Display =================

function display() {
    let taskData = JSON.parse(localStorage.getItem('tasks_obj'));

    if (taskData != null) {
        let task_table = ``

        for (let i = 0; i < taskData.length; i++) {
            task_table += "<tr><th>" + (i + 1) + "</th><td>" + taskData[i].title + "</td><td>" + taskData[i].priority + '</td><td><span class="deadline-font">' + taskData[i].deadline + '<span></td><td>&nbsp; &nbsp;<a onclick="delete_task(' + i +')"><i class="fa fa-trash" ></i></a> </td></tr>'
        }
        console.log(task_table);
        document.getElementById("display").innerHTML = task_table;
    }
}

// =============== Delete ===================
function delete_task(e){
    // console.log(e);
    ArrayTask.splice(e,1);
    localStorage.setItem('tasks_obj', JSON.stringify(ArrayTask));
    location.reload()
}