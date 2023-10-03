// Funções de redirecionamento

//  

function redirectRbxLua() {
    window.location.href = "./rbx_lua.html";
}

function redirectLua() {
    window.location.href = "./lua.html";
}

function redirectGithub() {
    window.location.href = "./github.html";
}

function redirectExcel() {
    window.location.href = "./excel.html";
}

function redirectHtml() {
    window.location.href = "./html.html";
}

function redirectPython() {
    window.location.href = "./python.html";
}

function redirectProjects() {
    window.location.href = "./projects.html";
}

function redirectJoinDev() {
    window.location.href = "./join_dev.html";
}


// Iniciando os Eventos





function initializeEvents() {
    const rbx_lua = document.getElementById("button-rbx-lua");
    const lua = document.getElementById("button-lua");
    const excel = document.getElementById("button-excel");
    const github = document.getElementById("button-github");
    const html = document.getElementById("button-html")
    const python = document.getElementById("button-python")
    const projects = document.getElementById("button-projects")
    const join_dev = document.getElementById("button-dev")

    rbx_lua.addEventListener('click', redirectRbxLua);
    lua.addEventListener('click', redirectLua);
    excel.addEventListener('click', redirectExcel);
    github.addEventListener('click', redirectGithub);
    html.addEventListener('click', redirectHtml);
    python.addEventListener('click', redirectPython);
    projects.addEventListener('click', redirectProjects);
    join_dev.addEventListener('click', redirectJoinDev)
};

initializeEvents();